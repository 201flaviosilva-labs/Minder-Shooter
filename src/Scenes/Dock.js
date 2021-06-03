import Configs from "../Config/Configs";
import { TextStyle } from "../Theme";

import Settings from "../State/Settings";

import Background from "../Components/Background";

export default class Dock extends Phaser.Scene {
	constructor() {
		super({ key: "Dock" });
	}

	init() {
		this.Settings = Settings.getInstance();
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;

		const background = new Background(this);

		const title = this.add.text(middleWidth, 50, "Dock", TextStyle.dock.title).setOrigin(0.5);

		this.graphics = this.add.graphics();
		this.graphics.setDefaultStyles({
			lineStyle: {
				width: 5,
				color: 0xffffff,
				alpha: 1,
			},
			fillStyle: {
				color: 0xffffff,
				alpha: 1,
			}
		});
		this.graphics.lineBetween(0, 0, 50, 0);

		this.drawMinders();

		{ // Play
			this.play = this.add.text(width - 125, height - 30, this.Settings.playTexture, TextStyle.dock.play).setOrigin(0.5);
			this.play.setInteractive({ useHandCursor: true });
			this.play.on("pointerup", () => { this.scene.start("Play"); });
		}

		{ // Exit
			const exit = this.add.text(middleWidth, height - 30, "Exit", TextStyle.dock.exit).setOrigin(0.5);
			exit.setInteractive({ useHandCursor: true });
			exit.on("pointerup", () => { this.scene.start("Home"); });
		}
	}

	drawMinders() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;
		const textures = Configs.playerTextures;

		for (let i = 0; i < textures.length; i++) {
			const x = i * 150 + 50;
			const t = textures[i];

			const sprite = this.add.image(x, middleHeight, t);
			sprite.setAngle(90);
			sprite.setInteractive({ useHandCursor: true, });
			sprite.on("pointerup", () => {
				this.Settings.playTexture = t;
				this.play.setText(t);

				this.drawGraphics(sprite);
			});

			if (t === this.Settings.playTexture) this.drawGraphics(sprite);
		}
	}

	drawGraphics(sprite) {
		const x = sprite.x - sprite.width / 2;
		const y = sprite.y + sprite.height / 2 + 20;

		this.graphics.setPosition(x, y);
		this.graphics.lineBetween(0, 0, sprite.width, 0);
	}
}
