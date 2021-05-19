import Configs from "../Config/Configs";

const SCENE_WIDTH = Configs.world.width;
const SCENE_HEIGHT = Configs.world.height;

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, "Duke");

		this.speed = 100;
	}

	generate() {
		// World Bounds
		const bounds = new Phaser.Geom.Rectangle(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
		this.body.setBoundsRectangle(bounds);

		// Direction
		const margin = 500;
		this.setRandomPosition(margin, margin, SCENE_WIDTH - margin, SCENE_HEIGHT - margin);

		// Angle
		const angle = Phaser.Math.Angle.Between(this.scene.player.x, this.scene.player.y, this.x, this.y);
		this.setRotation(angle);
	}
}
