import config from './server/config';
import app from './server';

app.server.listen(process.env.PORT || config.port, config.hostname, () => {
    console.log(`Started on port ${app.server.address().port}`);
});

export default app;
