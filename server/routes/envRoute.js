/* eslint no-param-reassign: 'off' */
import { Router as expressRouter } from 'express';
import config from './../../config/config';

const router = expressRouter();

router.get('/', (req, res) => res.json(config));

export default router;
