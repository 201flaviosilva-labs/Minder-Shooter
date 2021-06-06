import Configs from "../Config/Configs";
import Settings from "../State/Settings";

import { TextStyle } from "../Theme";

export default class Home extends Phaser.Scene {
	constructor() {
		super({ key: "PlayUI", active: false, });
	}

	init() {
		this.Settings = Settings.getInstance();
		this.playScene = this.scene.get("Play");

		this.lifeIcons = [];
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;
		const { play } = this.Settings.output;

		let lives = 3;
		for (let i = 0; i < lives; i++) {
			this.addNewLife();
		}

		this.labelScore = this.add.text(width - 240, 50, play.score + 0, TextStyle.playUI.score);

		this.labelAmmunition = this.add.text(middleWidth, height - 50, play.ammunition + 10, TextStyle.playUI.score).setOrigin(0.5);

		// Events
		this.playScene.events.removeListener("UpdateScore");
		this.playScene.events.removeListener("UpdateAmmunition");
		this.playScene.events.removeListener("UpdateLife");

		this.playScene.events.on("UpdateScore", this.addScore, this);
		this.playScene.events.on("UpdateAmmunition", this.updateAmmunition, this);

		this.playScene.events.on("UpdateLife", data => {
			if (data.lives > lives) this.addNewLife();
			else this.deleteLife();
			lives = data.lives;
		}, this);
	}

	addNewLife() {
		const x = 50 * this.lifeIcons.length + 50;
		const life = this.add.image(x, 50, this.Settings.playTexture).setScale(0.5).setAngle(90).setTint(0xff0000).setAlpha(0);
		this.lifeIcons.push(life);

		this.tweens.add({
			targets: [life],
			duration: 250,
			ease: "Back",
			alpha: { from: 0, to: 0.75, },
			scale: { from: 0, to: 0.5, },
		});
	}

	deleteLife() {
		const icon = this.lifeIcons[this.lifeIcons.length - 1];
		this.lifeIcons.pop();

		this.tweens.add({
			targets: [icon],
			duration: 250,
			ease: "Back.easeIn",
			alpha: { from: icon.alpha, to: 0 },
			scale: { from: icon.scale, to: 0 },
			onComplete: () => { icon.destroy(); },
		});
	}

	addScore(s) {
		const { score } = this.Settings.output.play;
		this.labelScore.setText(score + s);
	}

	updateAmmunition(data) {
		const { ammunition } = this.Settings.output.play;
		this.labelAmmunition.setText(ammunition + data.ammunition);
	}
}
