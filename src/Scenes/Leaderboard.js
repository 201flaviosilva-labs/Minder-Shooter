import Configs from "../Config/Configs";
import { TextStyle } from "../Theme";

import settings from "../State/Settings";

import Background from "../Components/Background";

export default class Leaderboard extends Phaser.Scene {
	constructor() {
		super({ key: "Leaderboard", });
	}

	init() {
		this.Settings = settings.getInstance();
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;
		const { leaderboard } = this.Settings.output;

		const background = new Background(this);
		const title = this.add.text(middleWidth, 50, leaderboard.title, TextStyle.leaderboard.title).setOrigin(0.5);

		const top = this.Settings.getTopScore(10);

		if (top.length) {
			for (let i = 0; i < top.length; i++) {
				const { table } = TextStyle.leaderboard;
				const marginX = 200;
				const y = 130 + 50 * i;
				const name = this.add.text(middleWidth - marginX, y, top[i].name, table.name).setOrigin(0.5);
				const score = this.add.text(middleWidth, y, top[i].score, table.score).setOrigin(0.5);
				const date = this.add.text(middleWidth + marginX, y, top[i].date, table.date).setOrigin(0.5);
			}
		} else {
			this.add.text(middleWidth, middleHeight, leaderboard.noScore, TextStyle.leaderboard.noScore).setOrigin(0.5);
		}


		{ // Exit
			const exit = this.add.text(middleWidth, height - 30, leaderboard.exit, TextStyle.leaderboard.exit).setOrigin(0.5);
			exit.setInteractive({ useHandCursor: true });
			exit.on("pointerup", () => { this.scene.start("Home"); });
		}
	}
}
