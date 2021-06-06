import Phaser from "Phaser";

import "./CSS/Reset.css";

import GlobalConfigs from "./Config/Configs";

import favicon from "./Assets/Favicon/favicon.png";

// Configs/Infos
import packageJson from "../package.json";
import { Banner } from "./Theme";

// Scenes
import Preload from "./Scenes/Preload";
import Home from "./Scenes/Home";
import Dock from "./Scenes/Dock";
import Leaderboard from "./Scenes/Leaderboard";
import Settings from "./Scenes/Settings";
import Play from "./Scenes/Play";
import PlayUI from "./Scenes/PlayUI";

const config = {
	title: "Minder Shooter",
	url: packageJson.homepage,
	version: packageJson.version,
	banner: {
		text: Banner.Text,
		background: Banner.Background,
		hidePhaser: false,
	},
	// Game
	parent: "GameContainer",
	type: Phaser.AUTO,
	width: GlobalConfigs.screen.width,
	height: GlobalConfigs.screen.height,
	backgroundColor: "#000000",
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	transparent: false,
	antialias: true,
	pixelArt: false,
	roundPixels: true,
	physics: {
		default: "arcade",
		arcade: {
			debug: GlobalConfigs.debug,
			gravity: { x: 0, y: 0 },
		}
	},
	scene: [
		Preload,
		Home, Dock, Leaderboard, Settings,
		Play, PlayUI,
	]
}

const game = new Phaser.Game(config);

document.getElementById("favicon").setAttribute("href", favicon);
