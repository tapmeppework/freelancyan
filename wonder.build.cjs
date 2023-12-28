
const
	fs = require('node:fs'),
	os = require("node:os"), //@see https://dev.to/melvin2016/how-to-get-the-name-of-the-operating-system-platform-in-node-js-k7j
	{ spawn } = require('node:child_process'),
	wonder = require('./wonder.abcd.cjs'),
	[, , option] = process.argv

switch (option) {
	case 'before':
		console.log(`'${wonder.flag}' BUNDLING the development state.`)

		// version synchronisation
		try {
			const
				charset = 'utf8',
				version = JSON.parse(fs.readFileSync(wonder.join('package.json'), charset)).version
			if (version) {
				const
					path = wonder.join('src/bloc/ABCD.ts'),
					config = fs.readFileSync(path, charset)
				if (config) {
					fs.writeFileSync(
						path,
						config.replace(
							/version:\s*("|')(\d+\.\d+\.\d+)("|')/,
							`version: $1${version}$3`
						),
						charset
					)
					console.log(`'${wonder.flag}' UPDATING the version.`)
				} else throw new Error('The current configuration of the application could NOT be read.')
			} else throw new Error('The version could NOT be harvest from the package.json')
		} catch (error) {
			console.log(
				`'${wonder.flag}' WARNING.`,
				`The version could not be transfered to '${path}'.`,
				error
			)
		}

		fs.copyFile( // copy wonder > wonder.backup
			wonder.folders.original,
			wonder.folders.backup,
			error => {
				if (error) console.error(`'${wonder.flag}'`, `'${wonder.original}' could not be BACKED UP.`, error)
				else {
					const bundler = spawn( // bundle wonder.backup > wonder @see https://nodejs.org/api/child_process.html
						wonder.path.dirname(process.execPath).replace(/\\/g, '/') + (os.platform() == 'win32' ? '/npx.cmd' : '/npx'),
						[
							'webpack',
							`--config=${wonder.flag}.config.cjs`,
							'--cache', //clear cache
							'--stats-error-details',
						],
						{ cwd: __dirname } // { cwd: process.cwd() } => default
					)
					bundler.stdout.setEncoding('utf8')
					bundler.stdout.on('data', console.log)
					bundler.stderr.setEncoding('utf8')
					bundler.stderr.on('data', console.log)
					bundler.on('close', code => {
						// console.log("exit code", code)
						if (code == 0) console.log(`'${wonder.flag}' BUNDLING SUCCESSFUL.\n`)
						else console.error(`'${wonder.flag}' BUNDLING UNSUCCESFUL.\n`)
						process.exit(code)
					})
				}
			}
		)
		break;
	case 'after':
		console.log(`\n'${wonder.flag}' RESTORING the development state.`)
		fs.copyFile( // copy wonder.backup > wonder
			wonder.folders.backup,
			wonder.folders.original,
			error => {
				if (error) console.error(`'${wonder.flag}' RESTORING UNSUCCESFUL.`, `'${wonder.original}' could not be RESTORED.`, error)
				else {
					console.log(`'${wonder.flag}' RESTORING SUCCESSFUL.`)
					fs.unlink(wonder.folders.backup, error => {
						if (error) console.log(
							`'${wonder.flag}' WARNING.`,
							`'${wonder.backup}' could not be DELETED.`,
							error
						)
					})
				}
			}
		)
		break;

	default:
		console.error(`'${wonder.flag}' ERROR.`, `The option '${option}' is not supported.`)
		break;
}
