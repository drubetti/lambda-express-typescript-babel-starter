import { celebrate } from 'celebrate';
import { Router } from 'express';

import { echoBody, echoParams, success } from '@middlewares/index';
import {
	requestBodySchema,
	requestParamsSchema,
	requestQuerySchema,
} from '@schemas/index';

const router = Router();

export const BASE_PATH = '/app';
export const PROXY_PATH = '/:id';

router.get(BASE_PATH, celebrate(requestQuerySchema), success);

router.get(PROXY_PATH, celebrate(requestParamsSchema), echoParams, success);

router.post(BASE_PATH, celebrate(requestBodySchema), echoBody, success);

router.put(
	PROXY_PATH,
	celebrate({ ...requestBodySchema, ...requestParamsSchema }),
	echoBody,
	success,
);

router.delete(PROXY_PATH, celebrate(requestParamsSchema), success);

export default router;
