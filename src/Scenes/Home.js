import Configs from "../Config/Configs";
import { TextStyle } from "../Theme";

import settings from "../State/Settings";

import Background from "../Components/Background";

export default class Home extends Phaser.Scene {
	constructor() {
		super({ key: "Home" });
	}

	init() {
		this.Settings = settings.getInstance();
		this.game.sound.mute = this.Settings.isMute;
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;

		const background = new Background(this);

		const margin = 100;

		const play = this.add.text(middleWidth, middleHeight - margin, "Play", TextStyle.home).setOrigin(0.5);
		play.setInteractive({ useHandCursor: true, });
		play.on("pointerup", () => {
			this.scene.start("Play");
		});

		const dock = this.add.text(middleWidth, middleHeight, "Dock", TextStyle.home).setOrigin(0.5);
		dock.setInteractive({ useHandCursor: true, });
		dock.on("pointerup", () => {
			this.scene.start("Dock");
		});

		const settings = this.add.text(middleWidth, middleHeight + margin, "Settings", TextStyle.home).setOrigin(0.5);
		settings.setInteractive({ useHandCursor: true, });
		settings.on("pointerup", () => {
			this.scene.start("Settings");
		});
	}
}
