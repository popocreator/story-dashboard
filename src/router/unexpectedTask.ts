import express, { Request, Response, Router } from 'express';

const unexpectedTask: Router = express.Router();

// URL - /unexpectedTask
unexpectedTask.get('/', (req: Request, res: Response) => {
	return res.status(200).json({
		status: 200,
		message: '유저 조회 성공',
	});
});

export default unexpectedTask;
