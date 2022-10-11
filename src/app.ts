import express, { Request, Response, NextFunction } from 'express';
import member from './router/memeber';
import story from './router/story';
import task from './router/task';
import unexpectedTask from './router/unexpectedTask';
const app = express();

app.use(express.json());

app.use('/member', member);
app.use('/story', story);
app.use('/task', task);
app.use('/unexpectedTask', unexpectedTask);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send('Hi! This is my first express server. My name is Woojin.');
});

app.listen('3300', () => {
	console.log(`
    #############################################x
        🛡️ Server listening on port: 8000 🛡️
    #############################################    
    `);
});
