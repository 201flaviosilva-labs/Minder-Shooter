const GlobalConfigs = {
	screen: {
		width: 1280, // 16:9 // https://calculateaspectratio.com
		height: 720,
		middleWidth: 0,
		middleHeight: 0,
	},
	debug: false,
	language: "en",
	controllers: {
		left: "LEFT",
		right: "RIGHT",
		up: "UP",
		down: "DOWN",
	},
};

GlobalConfigs.screen.middleWidth = GlobalConfigs.screen.width / 2;
GlobalConfigs.screen.middleHeight = GlobalConfigs.screen.height / 2;

export default GlobalConfigs;
