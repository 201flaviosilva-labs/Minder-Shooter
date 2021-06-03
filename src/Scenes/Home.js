import Configs from "../Config/Configs";
import { TextStyle } from "../Theme";

import Background from "../Components/Background";

export default class Home extends Phaser.Scene {
	constructor() {
		super({ key: "Home" });
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;

		const background = new Background(this);

		const play = this.add.text(middleWidth, middleHeight - 50, "Play", TextStyle.home).setOrigin(0.5);
		play.setInteractive({ useHandCursor: true, });
		play.on("pointerup", () => {
			this.scene.start("Play");
		});

		const dock = this.add.text(middleWidth, middleHeight + 50, "Dock", TextStyle.home).setOrigin(0.5);
		dock.setInteractive({ useHandCursor: true, });
		dock.on("pointerup", () => {
			this.scene.start("Dock");
		});
	}
}
