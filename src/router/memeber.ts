import express, { Request, Response, Router } from 'express';

const member: Router = express.Router();

// URL - /memeber
member.get('/', (req: Request, res: Response) => {
	return res.status(200).json({
		status: 200,
		message: '유저 조회 성공',
	});
});

export default member;
