import compression from 'compression';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';

import { env } from '@/config';
import { errorHandler, xss } from '@/middleware';
import { compress } from '@/utils';

const app: Express = express();

/*<!---------- Helmet is used to secure this app by configuring the http-header ---------> */
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*<!---------- XSS is used to sanitize the request body, query, and params ---------> */
app.use(xss());

/*<!---------- Compression is used to compress the response body ---------> */
app.use(compression({ filter: compress }));

app.use(cors({ origin: env.cors.origin }));

app.all('*', (req, res) => {
    res.status(404).json({
        ok: false,
        message: `Can't find '${req.originalUrl}' on this server!`,
    });
});

/*<!---------- Error handler ---------> */
app.use(errorHandler);

export default app;
