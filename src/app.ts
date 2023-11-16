import cors from 'cors';
import * as express from 'express';
import errorMiddleware from './middleware/error';
import routes from './routes';
import morgan from 'morgan';

const app = express.default();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(cors({ origin: true }));
app.use('/', routes);

app.use('/', errorMiddleware);

//tmp
app.get('/ping', async (_req, res) => {
  res.send({ message: 'pong' });
});

export default app;
