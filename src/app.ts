import express, { Express } from 'express';
import helmet from 'helmet';

import { xss } from '@/middleware';

const app: Express = express();

/*<!---------- Helmet is used to secure this app by configuring the http-header ---------> */
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*<!---------- XSS is used to sanitize the request body, query, and params ---------> */
app.use(xss);

export default app;
