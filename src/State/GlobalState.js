import GlobalConfigs from "../Config/Configs";

import EN from "../Lang/EN";
import PT from "../Lang/PT";

let instance = null;

class GlobalState {
	constructor() {
		this.langOptions = {
			en: EN,
			pt: PT
		};

		this._language = GlobalConfigs.language;
		if (localStorage.getItem("language")) this._language = localStorage.getItem("language");
		else localStorage.setItem("language", this._language);
		this.output = this.langOptions[this._language];

		this._isMute = GlobalConfigs.isMute;
		if (localStorage.getItem("isMute")) this._isMute = localStorage.getItem("isMute") === "true" ? true : false;
		else localStorage.setItem("isMute", this._isMute);
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

	get language() { return this._language; }
	get isMute() { return this._isMute; }
}

const config = new GlobalState();

export default {
	getInstance: () => {
		if (!instance) {
			instance = config;
		}
		return instance;
	},
};

GlobalState.getInstance = () => {
	return instance;
};
