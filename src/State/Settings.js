import GlobalConfigs from "../Config/Configs";

import EN from "../Lang/EN";
import PT from "../Lang/PT";
import { sortDescendingObj } from "../Utils/Utils";

let instance = null;

class Settings {
	constructor() {
		this.langOptions = {
			en: EN,
			pt: PT,
		};

		this._language = "en";
		if (localStorage.getItem("language")) this._language = localStorage.getItem("language");
		else localStorage.setItem("language", this._language);
		this.output = this.langOptions[this._language];

		this._isMute = true;
		if (localStorage.getItem("isMute")) this._isMute = localStorage.getItem("isMute") === "true" ? true : false;
		else localStorage.setItem("isMute", this._isMute);

		this._playTexture = GlobalConfigs.playerTextures[3];

		this._score = [];
		if (localStorage.getItem("score")) this._score = JSON.parse(localStorage.getItem("score"));
		else localStorage.setItem("score", JSON.stringify(this._score));
	}

	set language(value) {
		this._language = value;
		this.output = this.langOptions[value];
		localStorage.setItem("language", value);
	}

	set isMute(value) {
		this._isMute = value;
		localStorage.setItem("isMute", value);
	}

	set playTexture(value) {
		this._playTexture = value;
	}

	addScore(data) {
		this._score.push(data);
		localStorage.setItem("score", JSON.stringify(this._score));
	}

	sortScore() {
		return sortDescendingObj(this._score, "score");
	}

	getTopScore(n) {
		return this.sortScore().slice(0, n);
	}

	get language() { return this._language; };
	get isMute() { return this._isMute; };
	get playTexture() { return this._playTexture; };
	get score() { return this._score; };
}

const config = new Settings();

export default {
	getInstance: () => {
		if (!instance) {
			instance = config;
		}
		return instance;
	},
};

Settings.getInstance = () => {
	return instance;
};
