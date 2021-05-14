import Configs from "../Config/Configs";

export default class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, "Sprite");

		this.speed = 200;

		const controllers = Configs.controllers;
		this.keys = this.scene.input.keyboard.addKeys({
			left: controllers.left,
			right: controllers.right,
			up: controllers.up,
			down: controllers.down,
		});
	}

	update() {
		const keys = this.keys;

		if (keys.left.isDown) this.setVelocity(-this.speed, 0);
		else if (keys.right.isDown) this.setVelocity(this.speed, 0);

		if (keys.up.isDown) this.setVelocity(0, -this.speed);
		else if (keys.down.isDown) this.setVelocity(0, this.speed);
	}
}
