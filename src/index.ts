import app from './app';

const port = 3000;

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
