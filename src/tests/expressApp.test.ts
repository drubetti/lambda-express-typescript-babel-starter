import request from 'supertest';

import { expressApp as app } from '@handlers/expressApp';
import { StatusCode } from '@models/index';
import { BASE_URL } from '@routes/index';

describe('Demo test', () => {
	test('Should return no content', async () => {
		const { status } = await request(app).get(BASE_URL);
		expect(status).toBe(StatusCode.NoContent);
	});
});
