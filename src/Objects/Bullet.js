export default class Bullet extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, frame) {
		super(scene, x, y, frame);
		this.init();
	}

	init() {
		this.speed = Phaser.Math.GetSpeed(400, 1);
		this.time = 0;
		this.direction = null;
	}

	fire(x, y, direction) {
		this.setScale(0.2);
		this.setPosition(x, y);
		this.setRotation(direction);

		this.direction = direction;
	}

	update(time, delta) {
		this.time++;
		if (this.time > 250) this.destroy();

		if (!this.direction) return;

		this.x += Math.cos(this.direction) * this.speed * delta;
		this.y += Math.sin(this.direction) * this.speed * delta;


		if (this.time > 150) this.setAlpha(this.alpha - 0.01);
	}
}
