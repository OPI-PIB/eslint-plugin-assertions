module.exports = {
	forceExit: true,
	verbose: true,
	collectCoverage: false,
	transform: {
		'^.+\\.(js|ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.json',
			},
		],
	},
	moduleFileExtensions: ['ts', 'js'],
	testMatch: ['./**/*.spec.(ts|js)'],
};
