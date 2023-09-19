import express, { Express } from 'express';
import helmet from 'helmet';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

export default app;
