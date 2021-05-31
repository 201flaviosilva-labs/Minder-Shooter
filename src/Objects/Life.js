import Configs from "../Config/Configs";

const SCENE_WIDTH = Configs.world.width;
const SCENE_HEIGHT = Configs.world.height;

export default class Life extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, frame) {
		super(scene, x, y, "Minder");

		this.setScale(0.45);
		this.setAlpha(0.75);
		this.setTint(0xde5452);
		this.setRandomPosition(0, 0, SCENE_WIDTH, SCENE_HEIGHT);

		this.alive = true;

		this.particles = this.scene.add.particles("Minder").createEmitter({
			delay: 100,
			lifespan: { min: 250, max: 750 },
			quantity: { min: 1, max: 5 },
			frequency: 100,
			tint: 0xde5452,
			scale: { start: 0.1, end: 0.2 },
			alpha: { start: 0.1, end: 0.33 },
			rotate: { onEmit: () => this.angle },
			speed: 50,
			follow: this,
		});

		this.tween = this.scene.tweens.add({
			targets: [this],
			ease: "Linear",
			duration: 2000,
			scale: { from: 0.45, to: 0.75 },
			repeat: -1,
			yoyo: true,
		})

		this.timer = this.scene.time.addEvent({
			delay: Phaser.Math.Between(10000, 30000),
			callback: this.kill,
			loop: false,
		});
	}

	kill() {
		if (!this.alive) return;

		this.timer.paused = true;
		this.particles.on = false;

		this.timer.destroy();
		this.destroy();

		this.alive = false;
	}

	update() {
		const angle = Phaser.Math.Angle.Between(this.scene.player.x, this.scene.player.y, this.x, this.y) - Phaser.Math.DegToRad(180);
		this.setRotation(angle);
	}
}
