const GlobalConfigs = {
	screen: {
		width: 1280, // 16:9 // https://calculateaspectratio.com
		height: 720,
		middleWidth: 0,
		middleHeight: 0,
	},
	world: {
		width: 0,
		height: 0,
	},
	debug: false,
	controllers: {
		left1: "A",
		right1: "D",
		up1: "W",
		down1: "S",
		left2: "LEFT",
		right2: "RIGHT",
		up2: "UP",
		down2: "DOWN",
		shoot: "SPACE",
	},
	playerTextures: [
		"BarMinder",
		"BatMinder",
		"Bigodes",
		"CowMinder",
		"Minder",
		"Mindera",
		"Nerd",
		"PirateMinder",
		"PixelMinder",
		"VampMinder",
	],
};

GlobalConfigs.screen.middleWidth = GlobalConfigs.screen.width / 2;
GlobalConfigs.screen.middleHeight = GlobalConfigs.screen.height / 2;

GlobalConfigs.world.width = GlobalConfigs.screen.width * 2;
GlobalConfigs.world.height = GlobalConfigs.screen.height * 2;

export default GlobalConfigs;
