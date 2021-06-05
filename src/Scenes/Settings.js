import Configs from "../Config/Configs";
import { TextStyle } from "../Theme";

import settings from "../State/Settings";

import Background from "../Components/Background";

export default class Settings extends Phaser.Scene {
	constructor() {
		super({ key: "Settings", });
	}

	init() {
		this.Settings = settings.getInstance();
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;

		const background = new Background(this);
		const title = this.add.text(middleWidth, 50, "Settings", TextStyle.settings.title).setOrigin(0.5);

		{ // Sound
			const sound = this.add.text(middleWidth, middleHeight - 50, "Sound", TextStyle.settings.options).setOrigin(0.5);
			sound.setColor(this.game.sound.mute ? "Green" : "Red");
			sound.setInteractive({ useHandCursor: true, });
			sound.on("pointerup", () => {
				this.Settings.isMute = !this.Settings.isMute;
				this.game.sound.mute = this.Settings.isMute;
				if (this.game.sound.mute) sound.setColor("Green");
				else sound.setColor("Red");
				console.log("Sound");
			});
		}

		{ // Language
			const text = this.Settings.language === "pt" ? "Português" : "English";
			const lang = this.add.text(middleWidth, middleHeight, text, TextStyle.settings.options).setOrigin(0.5);
			lang.setInteractive({ useHandCursor: true, });
			lang.on("pointerup", () => {
				this.Settings.language = (this.Settings.language === "pt" ? "en" : "pt");
				if (confirm("Need to reload to update!")) location.reload();
				console.log("Language");
			});
		}

		{ // Full Screen
			const full = this.add.text(middleWidth, middleHeight + 50, "Full Screen", TextStyle.settings.options).setOrigin(0.5);
			full.setColor(this.scale.isFullscreen ? "Green" : "Red");
			full.setInteractive({ useHandCursor: true, });
			full.on("pointerup", () => {
				if (this.scale.isFullscreen) {
					this.scale.stopFullscreen();
					full.setColor("Red");
				}
				else {
					this.scale.startFullscreen();
					full.setColor("Green");
				}
				console.log("Full Screen");
			});
		}

		{ // Exit
			const exit = this.add.text(middleWidth, height - 30, "Exit", TextStyle.settings.exit).setOrigin(0.5);
			exit.setInteractive({ useHandCursor: true });
			exit.on("pointerup", () => { this.scene.start("Home"); });
		}
	}
}
