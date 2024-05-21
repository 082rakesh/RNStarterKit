import { logger, fileAsyncTransport } from 'react-native-logs';
import FileSystem from 'react-native-fs';

const today = new Date();
const dateString = today.toISOString().split('T')[0];

const config = {
	severity: 'debug',
	transport: fileAsyncTransport,
	levels: {
		custom: 0,
		debug: 1,
		info: 2,
		warn: 3,
		error: 4,
		devNotice: 5,
	},
	transportOptions: {
		colors: {
			custom: 'white',
			devNotice: 'blue',
			info: 'blueBright',
			warn: 'yellowBright',
			error: 'redBright',
			debug: 'white',
		},
		FS: FileSystem,
		fileName: `logs_${dateString}.txt`, // Create a new file every day
	},
};

const log = logger.createLogger(config);
const filePath = FileSystem.DocumentDirectoryPath + '/logs.txt';

export const Logger = {
	debug: (message: string) => {
		log.debug(message);
	},
	info: (message: string) => {
		log.info(message);
	},
	warn: (message: string) => {
		log.info(message);
	},
	error: (message: string) => {
		log.info(message);
	},
};
