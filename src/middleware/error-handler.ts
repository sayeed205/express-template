import { logger } from '@/utils';
import type { Request, Response } from 'express';

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
): void => {
    logger.error(err);

    res.status(500).json({ message: err.message });
};
