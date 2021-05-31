import Configs from "../Config/Configs";
import Shoots from "./Shoots";

const SCENE_WIDTH = Configs.world.width;
const SCENE_HEIGHT = Configs.world.height;

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, "Duke");

		this.speed = 100;
		this.alive = false;

		this.setAlpha(0);
		this.setScale(0);

		// Shoots
		this.shoots = this.scene.physics.add.group({
			classType: Shoots,
			runChildUpdate: true,
		});

		this.shootTimer = this.scene.time.addEvent({
			delay: Phaser.Math.Between(2500, 20000),
			callback: this.shoot,
			callbackScope: this,
			loop: true,
		});

		// Particles
		this.particles = this.scene.add.particles("Duke").createEmitter({
			lifespan: 1000,
			delay: 100,
			scale: { start: 0.2, end: 0 },
			alpha: { start: 0.5, end: 0 },
			speed: 50,
			rotate: { onEmit: () => this.angle },
			follow: this,
		});
	}

	generate() {
		// World Bounds
		const bounds = new Phaser.Geom.Rectangle(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
		this.body.setBoundsRectangle(bounds);

		// Direction
		const margin = 250;
		this.setRandomPosition(margin, margin, SCENE_WIDTH - margin, SCENE_HEIGHT - margin);

		// Angle
		this.fixRotation();

		this.scene.tweens.add({
			targets: [this],
			duration: 1500,
			delay: 250,
			ease: "Cubic.easeIn",
			alpha: { from: 0, to: 1 },
			scale: { from: 0, to: 1 },
			onUpdate: () => this.fixRotation(),
			onComplete: () => {
				this.alive = true;
			},
		});
	}

	fixRotation() {
		const angle = Phaser.Math.Angle.Between(this.scene.player.x, this.scene.player.y, this.x, this.y) - Phaser.Math.DegToRad(180);
		this.setRotation(angle);
	}

	shoot() {
		if (!this.alive) return;
		const shoot = this.shoots.get(this.x, this.y, "Duke");
		if (shoot) {
			shoot.fire(this.x, this.y, this.rotation);
		}
	}

	kill() {
		if (!this.alive) return;

		this.scene.tweens.add({
			targets: [this],
			duration: 1000,
			ease: "Linear",
			alpha: { from: 1, to: 0 },
			scale: { from: 1, to: 0 },
			onComplete: () => {
				this.particles.remove();
				this.destroy();
			},
		});

		this.alive = false;

		this.shootTimer.paused = true;
		this.shootTimer.remove();

		this.shoots.setActive(false);
		this.shoots.setVisible(false);

		this.setVelocity(0);
		this.speed = 0;

		this.particles.stop();
	}
}
