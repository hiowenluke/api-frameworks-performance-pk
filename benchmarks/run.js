
const autocannon = require('autocannon');
const spawn = require('child_process').spawn;
const Table = require('cli-table');
const myOs = require('./os');

const compare = (p) => {
	return (m,n) =>{
		return n[p] - m[p];
	}
};

const print = {
	breakLine(char = '-', length = 40) {
		const breakLine = char.repeat(length);
		console.log(breakLine);
	},

	title(topic, char, length) {
		this.breakLine(char, length);
		console.log(topic);
		this.breakLine(char, length);
	},

	table(name, data) {
		this.title(name, '=');

		const table = new Table({
			chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
				, 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
				, 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
				, 'right': '' , 'right-mid': '' , 'middle': ' ' },
			style: { 'padding-left': 0, 'padding-right': 0 }
		});

		data.forEach(result => {
			const {name, avgRate} = result;
			table.push([name, avgRate]);
		});

		console.log(table.toString());
		this.breakLine('=');
	}
};

const main = async () => {
	const frameworks = ['noapi', 'express', 'koa'];
	const url = 'http://localhost:3333/?foo[bar]=baz';

	let cp;
	let results = [];

	const seconds = frameworks.length * 10;
	console.log(`Benchmarking, about ${seconds} seconds...`);

	for (let i = 0; i < frameworks.length; i ++) {
		const name = frameworks[i];
		cp = spawn('node', [__dirname + '/./frameworks/' + name]);

		const result = await autocannon({url});
		process.kill(cp.pid, 'SIGTERM');

		results.push({name, avgRate: result.requests.average});
	}

	results.sort(compare("avgRate"));
	print.table('Results (requests/sec)', results);

	console.log(myOs.getOSInfo());
};

main();
