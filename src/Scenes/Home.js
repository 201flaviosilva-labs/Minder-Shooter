import Configs from "../Config/Configs";

import Player from "../Objects/Player";

export default class Home extends Phaser.Scene {
	constructor() {
		super({ key: "Home" });
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;

		const playersGroup = this.physics.add.group({
			classType: Player,
			collideWorldBounds: true,
			runChildUpdate: true,
		});

		this.player = playersGroup.get(middleWidth, middleHeight);
	}
}
