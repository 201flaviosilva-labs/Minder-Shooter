import Configs from "../Config/Configs";

import Background from "../Components/Background";
import Player from "../Objects/Player";
import Enemy from "../Objects/Enemy";
import Life from "../Objects/Life";
import Ammunition from "../Objects/Ammunition";

const SCENE_WIDTH = Configs.world.width;
const SCENE_HEIGHT = Configs.world.height;

export default class Play extends Phaser.Scene {
	constructor() {
		super({ key: "Play", active: false, });
	}

	create() {
		const { width, height, middleWidth, middleHeight } = Configs.screen;

		if (Configs.debug) this.drawDebugGraphics();

		const background = new Background(this);

		// ---- Groups
		// -- Player
		const playersGroup = this.physics.add.group({
			classType: Player,
			collideWorldBounds: true,
			runChildUpdate: true,
		});
		this.player = playersGroup.get(50, 130);
		this.player.generate();

		// -- Enemies
		this.enemiesGroup = this.physics.add.group({
			classType: Enemy,
			collideWorldBounds: true,
		});

		for (let i = 0; i < 5; i++) {
			this.createEnemy();
		}

		// -- Lifes
		this.lifeGroup = this.physics.add.group({
			classType: Life,
			maxSize: 2,
			runChildUpdate: true,
		});

		// -- Ammunition
		this.ammunitionGroup = this.physics.add.group({
			classType: Ammunition,
			maxSize: 10,
		});

		// ---- Timers
		const timerEnemy = this.time.addEvent({
			delay: 1500,
			callback: this.createEnemy,
			callbackScope: this,
			repeat: -1,
		});

		const timerLife = this.time.addEvent({
			delay: 20000,
			callback: () => this.lifeGroup.get(0, 0, this.player.selectedTexture),
			repeat: -1,
		});

		const timerAmmunition = this.time.addEvent({
			delay: 10000,
			callback: () => this.ammunitionGroup.get(0, 0, this.player.selectedTexture),
			repeat: -1,
		});

		// ---- Collision
		this.physics.add.overlap(this.player.shoots, this.enemiesGroup, this.playerShootsOverlapEnemy, null, this);
		this.physics.add.overlap(this.player, this.enemiesGroup, this.enemyHitPlayer, null, this);
		this.physics.add.overlap(this.player, this.lifeGroup, this.playerOverlapLife, null, this);
		this.physics.add.overlap(this.player, this.ammunitionGroup, this.playerOverlapAmmunition, null, this);
		this.physics.add.collider(this.enemiesGroup);

		// ---- UI Scene
		this.scene.launch("PlayUI");
	}

	createEnemy() {
		const enemy = this.enemiesGroup.get(1000, 1000);
		if (enemy) {
			enemy.generate();
			this.physics.add.overlap(this.player, enemy.shoots, this.shootHitPlayer, null, this);
		}
	}

	playerShootsOverlapEnemy(s, e) {
		if (!e.alive) return;
		s.kill();
		e.kill();
		this.events.emit("UpdateScore");
	}

	enemyHitPlayer(p, e) {
		if (e.alive) {
			e.kill();
			this.player.removeLife();
			this.updatePlayerLives();
		}
	}

	playerOverlapLife(p, l) {
		if (this.player.maxLives > this.player.lives) {
			this.player.lives++;
			this.updatePlayerLives();
		}
		l.kill();
	}

	playerOverlapAmmunition(p, a) {
		a.kill();
		this.player.addAmmunition();
	}

	shootHitPlayer(p, s) {
		s.kill();
		this.player.removeLife();
		this.updatePlayerLives();
	}

	updatePlayerLives(p) {
		this.events.emit("UpdateLife", { lives: this.player.lives, });
		if (this.player.lives <= 0) {
			this.scene.start("Home");
			this.scene.stop("PlayUI");
			this.scene.stop();
		}
	}

	drawDebugGraphics() {
		const graphics = this.add.graphics().setDepth(0);
		graphics.lineStyle(1, 0xff0000, 1);
		const xSpace = 250;
		for (let i = 0; i < SCENE_WIDTH / xSpace; i++) {
			const x = i * xSpace;
			graphics.lineBetween(x, 0, x, SCENE_HEIGHT);
			this.add.text(x, 10, x);
		}
	}

	update() {
		const enemies = this.enemiesGroup.getChildren();
		for (let i = 0; i < enemies.length; i++) {
			const enemy = enemies[i];
			if (enemy.alive) {
				this.physics.moveToObject(enemy, this.player, enemy.speed);
				enemy.fixRotation();
			}
		}
	}
}
