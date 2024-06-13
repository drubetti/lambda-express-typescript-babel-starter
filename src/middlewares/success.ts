import noContent from '@middlewares/noContent';
import type { Request, Response } from 'express';

export default (req: Request, res: Response) => {
	const { result } = res.locals;
	result ? res.send(result) : noContent(req, res);
};
