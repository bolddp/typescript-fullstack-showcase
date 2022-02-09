import bodyParser from 'body-parser';
import express from 'express';
import { RegisterRoutes } from './routes';

export const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(
  '/docs',
  express.static('./dist/docs', {
    setHeaders: (res, path, stat) => {
      res.setHeader('content-type', 'text/html');
    },
  })
);

RegisterRoutes(app);
