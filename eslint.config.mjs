import ljharb from '@ljharb/eslint-config/flat';

export default [
	...ljharb,
	{
		rules: {
			'new-cap': ['error', { capIsNewExceptions: ['GetIntrinsic'] }],
		},
	},
];
