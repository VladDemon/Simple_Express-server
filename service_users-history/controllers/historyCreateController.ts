import { Request, Response } from 'express';
import { UserHistory } from '../models/historyModel';

export const createHistory = async (req: Request, res: Response) => {
    const { userId, action } = req.body;
    try {
        const newHistory = await UserHistory.create({ userId, action });
        res.status(200).send(newHistory);
    } catch (e) {
        res.status(400).send(e);
    }
};