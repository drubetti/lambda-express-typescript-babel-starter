import { StatusCode } from '@models/index';
import type { Request, Response } from 'express';

export default (_req: Request, res: Response) =>
	res.sendStatus(StatusCode.NoContent);
