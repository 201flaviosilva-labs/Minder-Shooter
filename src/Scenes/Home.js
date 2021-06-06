import Configs from "../Config/Configs";
import { TextStyle } from "../Theme";

import Settings from "../State/Settings";

import Background from "../Components/Background";

export default class Home extends Phaser.Scene {
	constructor() {
		super({ key: "Home" });
	}

	init() {
		this.Settings = Settings.getInstance();
		this.game.sound.mute = this.Settings.isMute;
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;
		const { home } = this.Settings.output;

		const background = new Background(this);

		const margin = 75;

		{ // Play
			const play = this.add.text(middleWidth, middleHeight - margin * 2, home.play, TextStyle.home).setOrigin(0.5);
			play.setInteractive({ useHandCursor: true, });
			play.on("pointerup", () => {
				this.scene.start("Play");
			});
		}

		{ // Dock
			const dock = this.add.text(middleWidth, middleHeight - margin * 0.66, home.dock, TextStyle.home).setOrigin(0.5);
			dock.setInteractive({ useHandCursor: true, });
			dock.on("pointerup", () => {
				this.scene.start("Dock");
			});
		}

		{ // Leaderboard
			const settings = this.add.text(middleWidth, middleHeight + margin * 0.66, home.leaderboard, TextStyle.home).setOrigin(0.5);
			settings.setInteractive({ useHandCursor: true, });
			settings.on("pointerup", () => {
				this.scene.start("Leaderboard");
			});
		}

		{ // Settings
			const settings = this.add.text(middleWidth, middleHeight + margin * 2, home.settings, TextStyle.home).setOrigin(0.5);
			settings.setInteractive({ useHandCursor: true, });
			settings.on("pointerup", () => {
				this.scene.start("Settings");
			});
		}
	}
}
