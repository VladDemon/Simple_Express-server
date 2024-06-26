import { Request, Response } from 'express';
import { UserHistory } from '../models/historyModel';

export const getHistory = async (req: Request, res: Response) => {
    const { userId, page = '1', pageSize = '10' } = req.query;
    const limit = parseInt(pageSize as string);
    const offset = (parseInt(page as string) - 1) * limit;
    try {
        const history = await UserHistory.findAll({
            where: userId ? { userId: parseInt(userId as string) } : undefined,
            limit,
            offset
        });
        res.status(200).send(history);
    } catch (error) {
        res.status(500).send(error);
    }
};