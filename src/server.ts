import app, { startServer } from './app';

const PORT = 3000;

const main = async () => {
    await startServer();
    app.listen(3000, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();