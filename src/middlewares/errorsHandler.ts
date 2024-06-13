import { StatusCode } from '@models/index';
import type { NextFunction, Request, Response } from 'express';

export default async (
	// biome-ignore lint: err must be any
	err: any,
	_req: Request,
	res: Response,
	_next: NextFunction,
) => {
	const { message = '', statusCode = StatusCode.Error } = err || {};
	res.status(statusCode).send({ message });
};
