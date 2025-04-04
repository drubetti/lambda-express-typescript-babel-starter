import serverlessExpress from '@codegenie/serverless-express';
import bodyParser from 'body-parser';
import { errors as celebrateErrors } from 'celebrate';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { errorsHandler } from '@middlewares/index';
import { routes } from '@routes/index';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());

app.use('/', routes);

app.use(celebrateErrors());
app.use(errorsHandler);

export const expressApp = app;
export default serverlessExpress({ app });
