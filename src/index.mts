import { assertionCode } from './rules/assertion-code.mjs';
import { assertionCondition } from './rules/assertion-condition.mjs';

export default {
	rules: {
		'assertions-code': assertionCode,
		'assertions-condition': assertionCondition
	}
};
