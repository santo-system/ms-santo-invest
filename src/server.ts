import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorMiddleware } from '@shared/middlewares/error';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

app.listen(3333, () => {
  console.log('🏆 Server started on http://localhost:3333/');
});
