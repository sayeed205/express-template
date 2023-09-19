import * as moduleAlias from 'module-alias';

const src = process.env.NODE_ENV === 'development' ? 'src' : __dirname;
moduleAlias.addAliases({
    '@': `${src}`,
});

import app from '@/app';

const port = 5000;

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received. Closing server...');
    server.close(err => {
        console.log('HTTP server closed');
        process.exit(err ? 1 : 0);
    });
});
