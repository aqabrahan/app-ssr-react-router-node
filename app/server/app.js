import path from 'path';
import express from 'express';
import cors from 'cors';

import router from './router';

const app = express();

const assets = express.static(path.resolve(__dirname, '../'));
//const indexPath = path.resolve(__dirname, '../index.html');

app.use(cors());
app.use(assets);

app.get('*', router);

export default app;