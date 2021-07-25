import express from 'express';
import dbConfig from './config/db';
import middleWaresConfig from './config/middleWares';
import { MeetupRoutes, GroupRoutes } from './modules';

const app = express();

dbConfig();

middleWaresConfig(app);

app.use('/api', [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  // eslint-disable-next-line no-lone-blocks
  } else {
    // eslint-disable-next-line no-console
    console.log(`App Lister to port : ${PORT}`);
  }
});
