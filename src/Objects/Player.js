import Configs from "../Config/Configs";
import Bullet from "./Bullet";

export default class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, "Minder");

		this.init();

		const controllers = Configs.controllers;
		this.keys = this.scene.input.keyboard.addKeys({
			left: controllers.left,
			right: controllers.right,
			up: controllers.up,
			down: controllers.down,
			shoot: controllers.shoot,
		});

		this.shoots = this.scene.physics.add.group({
			classType: Bullet,
			// maxSize: 2,
			runChildUpdate: true,
		});


		this.scene.input.on("pointermove", this.checkAngle, this);
	}

	init() {
		this.speed = 200;
		this.nextTimeFired = 0;
	}

	checkAngle(pointer) {
		const angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
		this.setAngle(angle);
	}

	update() {
		const keys = this.keys;

		// X
		if (keys.left.isDown) this.setVelocityX(-this.speed);
		else if (keys.right.isDown) this.setVelocityX(this.speed);
		else this.setVelocityX(0);

		// Y
		if (keys.up.isDown) this.setVelocityY(-this.speed);
		else if (keys.down.isDown) this.setVelocityY(this.speed);
		else this.setVelocityY(0);

		// Shoot
		if (keys.shoot.isDown) this.shoot();
	}

	shoot() {
		const shoot = this.shoots.get();
		if (shoot) {
			shoot.fire(this.x, this.y, this.rotation);
		}
	}
}
