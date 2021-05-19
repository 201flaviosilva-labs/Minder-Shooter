import Configs from "../Config/Configs";

import Player from "../Objects/Player";
import Enemy from "../Objects/Enemy";
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

		// Player
		const playersGroup = this.physics.add.group({
			classType: Player,
			collideWorldBounds: true,
			runChildUpdate: true,
		});
		this.player = playersGroup.get(50, 50);
		this.player.generate();

		// Enemies
		this.enemiesGroup = this.physics.add.group({
			classType: Enemy,
			collideWorldBounds: true,
		});

		for (let i = 0; i < 5; i++) {
			const enemy = this.enemiesGroup.get(width, height);
			if (enemy) enemy.generate();
		}

		// Timer
		const timer = this.time.addEvent({
			delay: 1500,
			callback: () => {
				const enemy = this.enemiesGroup.get(width, height);
				if (enemy) enemy.generate();
			},
			repeat: -1,
		});

		// Collision
		this.physics.add.overlap(this.player.shoots, this.enemiesGroup, this.shootsEnemy, null, this);
		this.physics.add.overlap(this.player, this.enemiesGroup, () => { this.scene.start("Home") }, null, this);
	}

	shootsEnemy(s, e) {
		s.destroy();
		e.destroy();
	}

	update() {
		Phaser.Utils.Array.Each(
			this.enemiesGroup.getChildren(),
			this.physics.moveToObject,
			this.physics,
			this.player, 120);
	}
}