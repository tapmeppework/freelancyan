/**
 * @description This script is used as a bridge to run the application on Plesk.
 * @since PM (26.10.2023)
 */
return import('./dist/server/main.mjs')
	.then(object => console.log(object))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
