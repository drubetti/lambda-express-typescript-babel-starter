import request from 'supertest';

import { expressApp as app } from '@handlers/expressApp';
import { StatusCode } from '@models/index';
import { BASE_PATH } from '@routes/index';

describe('Demo test', () => {
	test('Should return no content', async () => {
		const { status } = await request(app).get(BASE_PATH);
		expect(status).toBe(StatusCode.NoContent);
	});
});
