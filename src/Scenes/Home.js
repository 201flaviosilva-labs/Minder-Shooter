import Configs from "../Config/Configs";
import { TextStyle } from "../Theme";

export default class Home extends Phaser.Scene {
	constructor() {
		super({ key: "Home" });
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;

		const play = this.add.text(middleWidth, middleHeight, "Play", TextStyle.home).setOrigin(0.5);
		play.setInteractive({ useHandCursor: true });
		play.on("pointerup", () => {
			this.scene.start("Play");
		});
	}
}
