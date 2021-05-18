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
		this.time = 0;

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
			runChildUpdate: true,
		});


		this.scene.input.on("pointermove", this.checkAngle, this);
		this.scene.input.on("pointerdown", this.shoot, this);
	}

	checkAngle(pointer) {
		const angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, pointer.worldX, pointer.worldY);
		this.setAngle(angle);
	}

	generate() {
		// Player Bounds
		const bounds = new Phaser.Geom.Rectangle(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
		this.body.setBoundsRectangle(bounds);

		// Set camera follow player
		this.scene.cameras.main.setBounds(0, 0, SCENE_WIDTH, SCENE_HEIGHT, this);
		this.scene.cameras.main.startFollow(this, false, 0.1, 0.1);
	}

	update(time) {
		this.time = time;
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
		if (keys.shoot.isDown && this.nextTimeFired < this.time) this.shoot();
	}

	shoot() {
		this.nextTimeFired = this.time + 100;
		const shoot = this.shoots.get();
		if (shoot) {
			shoot.fire(this.x, this.y, this.rotation);
		}
	}
}
