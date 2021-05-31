import GlobalConfigs from "../Config/Configs";

export default class Background extends Phaser.GameObjects.TileSprite {
	constructor(scene) {
		const { middleWidth, middleHeight, width, height } = GlobalConfigs.screen;
		super(scene, middleWidth, middleHeight, width, height, "Background");
		scene.add.existing(this);

		this.bgPosition = 0;
		this.setScrollFactor(0);

		this.scene.tweens.add({
			targets: [this],
			duration: 10000,
			ease: "Linear",
			alpha: { from: 1, to: 0.75 },
			yoyo: true,
			repeat: -1,
		})
	}

	preUpdate() {
		this.tilePositionX = Math.sin(this.bgPosition) * 100;

		this.bgPosition += 0.001;
	}
}
