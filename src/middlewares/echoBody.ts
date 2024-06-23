import type { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
	res.locals.result = { ...req.body };
	next();
};
