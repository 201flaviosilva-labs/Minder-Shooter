export default class Shoots extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, frame) {
		super(scene, x, y, frame);

		this.speed = Phaser.Math.GetSpeed(400, 1);
		this.time = 0;
		this.direction = null;

		this.particles = this.scene.add.particles(frame).createEmitter({
			lifespan: 750,
			scale: { start: 0.1, end: 0 },
			alpha: { start: 0.1, end: 0 },
			speed: 50,
			rotate: { onEmit: () => this.angle },
			follow: this,
		});
	}

	fire(x, y, direction) {
		this.setScale(0.2);
		this.setPosition(x, y);
		this.setRotation(direction);

		this.direction = direction;
	}

	update(time, delta) {
		this.time++;
		if (this.time > 250) this.kill();

		if (!this.direction) return;

		this.x += Math.cos(this.direction) * this.speed * delta;
		this.y += Math.sin(this.direction) * this.speed * delta;


		if (this.time > 150) {
			this.particles.stop();
			this.setAlpha(this.alpha - 0.01);
		}
	}

	kill() {
		this.particles.remove();
		this.destroy();
	}
}
