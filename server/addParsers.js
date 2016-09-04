import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

export default function (app) {
  app
    .use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cookieParser());
}
