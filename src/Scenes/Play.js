import Configs from "../Config/Configs";

import Player from "../Objects/Player";
import Background from "../Objects/Background";

const SCENE_WIDTH = Configs.world.width;
const SCENE_HEIGHT = Configs.world.height;

export default class Play extends Phaser.Scene {
	constructor() {
		super({ key: "Play" });
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;

		{ // Debug
			const graphics = this.add.graphics().setDepth(0);
			graphics.lineStyle(1, 0xff0000, 1);
			const xSpace = 250;
			for (let i = 0; i < SCENE_WIDTH / xSpace; i++) {
				const x = i * xSpace;
				graphics.lineBetween(x, 0, x, SCENE_HEIGHT);
				this.add.text(x, 10, x);
			}
		}

		const background = new Background(this);

		const playersGroup = this.physics.add.group({
			classType: Player,
			collideWorldBounds: true,
			runChildUpdate: true,
		});

		this.player = playersGroup.get(middleWidth, middleHeight);
		this.player.generate();
	}
}
