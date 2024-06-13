import { celebrate } from 'celebrate';
import { Router } from 'express';

import { echoBody, echoParams, success } from '@middlewares/index';
import {
	requestBodySchema,
	requestParamsSchema,
	requestQuerySchema,
} from '@schemas/index';

const router = Router();

export const BASE_URL = '/app';

router.get(BASE_URL, celebrate(requestQuerySchema), success);

router.get(
	`${BASE_URL}/:id`,
	celebrate(requestParamsSchema),
	echoParams,
	success,
);

router.post(BASE_URL, celebrate(requestBodySchema), echoBody, success);

router.put(
	`${BASE_URL}/:id`,
	celebrate({ ...requestBodySchema, ...requestParamsSchema }),
	echoBody,
	success,
);

router.delete(`${BASE_URL}/:id`, celebrate(requestParamsSchema), success);

export default router;
