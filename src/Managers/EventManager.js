let instance = null;

class EventManager {
	constructor() {
		this.events = {};
	}

	on(name, callback) {
		if (!this.events[name]) this.events[name] = [];
		this.events[name].push(callback);
	}

	dispatch(name, data) {
		if (this.events[name]) {
			this.events[name].forEach(callback => {
				callback(data);
			});
		}
	}
}

export default {
	getInstance: () => {
		if (!instance) {
			instance = new EventManager();
		}
		return instance;
	},
};

EventManager.getInstance = () => {
	return instance;
};
