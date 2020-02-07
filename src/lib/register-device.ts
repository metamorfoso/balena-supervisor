import factory = require('balena-register-device');
import { getRequestInstance, PromisifiedRequest } from './request';

export const { generateUniqueKey, register } = factory({
	request: {
		send: async (options: Parameters<PromisifiedRequest['postAsync']>[0]) =>
			(await getRequestInstance()).postAsync(options),
	},
});
