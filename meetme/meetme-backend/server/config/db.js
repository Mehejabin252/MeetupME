import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/meetupME');
  mongoose.connection
    // eslint-disable-next-line no-console
    .once('open', () => console.log('Mongodb running'))
    // eslint-disable-next-line no-console
    .on('error', err => console.error(err));
};
