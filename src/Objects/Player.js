import Configs from "../Config/Configs";
import Bullet from "./Bullet";

const SCENE_WIDTH = Configs.world.width;
const SCENE_HEIGHT = Configs.world.height;

export default class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, "Minder");

		// Set variables
		this.speed = 200;
		this.nextTimeFired = 0;

		// Controllers
		const controllers = Configs.controllers;
		this.keys = this.scene.input.keyboard.addKeys({
			left: controllers.left,
			right: controllers.right,
			up: controllers.up,
			down: controllers.down,
			shoot: controllers.shoot,
		});

		// Shoots
		this.shoots = this.scene.physics.add.group({
			classType: Bullet,
			runChildUpdate: true,
		});

		// Particles
		this.particles = this.scene.add.particles("Minder").createEmitter({
			lifespan: 750,
			delay: 100,
			scale: { start: 0.2, end: 0 },
			alpha: { start: 0.5, end: 0 },
			speed: { min: 50, max: 150 },
			rotate: { onEmit: () => this.angle },
			follow: this,
			on: false,
		});

		// Pointer
		this.pointer = this.scene.input.activePointer;
	}

	generate() {
		this.setDepth(10);
		// Player Bounds
		const bounds = new Phaser.Geom.Rectangle(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
		this.body.setBoundsRectangle(bounds);

		// Set camera follow player
		this.scene.cameras.main.setBounds(0, 0, SCENE_WIDTH, SCENE_HEIGHT, this);
		this.scene.cameras.main.startFollow(this, false, 0.1, 0.1);
	}

	update(time) {
		const keys = this.keys;

		// Angle
		this.checkAngle();

		// X
		if (keys.left.isDown) this.setVelocityX(-this.speed);
		else if (keys.right.isDown) this.setVelocityX(this.speed);
		else this.setVelocityX(0);

		// Y
		if (keys.up.isDown) this.setVelocityY(-this.speed);
		else if (keys.down.isDown) this.setVelocityY(this.speed);
		else this.setVelocityY(0);

		if (this.body.velocity.x || this.body.velocity.y) this.particles.on = true;
		else this.particles.on = false;

		// Shoot
		if ((keys.shoot.isDown || this.pointer.isDown) && this.nextTimeFired < time) this.shoot(time);
	}

	checkAngle() {
		const angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, this.pointer.worldX, this.pointer.worldY);
		this.setAngle(angle);
	}

	shoot(time) {
		this.nextTimeFired = time + 100;
		const shoot = this.shoots.get();
		if (shoot) {
			shoot.fire(this.x, this.y, this.rotation);
		}
	}
}
