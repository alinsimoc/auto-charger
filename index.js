const axios = require('axios');
const si = require('systeminformation');

const config = require('./config.json');

const toggleCallback = ({ battery }) => {
	const { events, key } = config;
	let event = '';

	if (battery.percent >= events.off.percent && battery.isCharging) {
		event = events.off.name;
	} else if (battery.percent <= events.on.percent && !battery.isCharging) {
		event = events.on.name;
	} else {
		return;
	}

	axios
		.post(`https://maker.ifttt.com/trigger/${event}/json/with/key/${key}`)
		.then((res) => {
			console.log(`Status Code: ${res.status} | Event: ${event}`);
		})
		.catch((error) => {
			console.error(error);
		});
};

const observables = {
	values: {
		battery: 'isCharging, percent',
	},
	interval: 1000,
	callback: toggleCallback,
};

si.observe(observables.values, observables.interval, observables.callback);
