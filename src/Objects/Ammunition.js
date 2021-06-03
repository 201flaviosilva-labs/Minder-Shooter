import Configs from "../Config/Configs";

const SCENE_WIDTH = Configs.world.width;
const SCENE_HEIGHT = Configs.world.height;

export default class Ammunition extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, frame) {
		super(scene, x, y, frame);

		this.alive = true;

		this.setScale(0.2);
		this.setAlpha(0.5);
		this.setRandomPosition(0, 0, SCENE_WIDTH, SCENE_HEIGHT);

		this.scene.add.tween({
			targets: [this],
			ease: "linear",
			duration: 10000,
			angle: { from: 0, to: 360, },
			yoyo: true,
			repeat: -1,
		});

		this.timer = this.scene.time.addEvent({
			delay: Phaser.Math.Between(10000, 30000),
			callback: () => this.kill(),
			loop: false,
		});
	}

	kill() {
		this.destroy();
	}
}
