/* eslint no-param-reassign: 'off' */
import { Router as expressRouter } from 'express';
import { version } from '../../package.json';

const router = expressRouter();

/**
 * @swagger
 * /info:
 *   get:
 *     tags: ['Metadata']
 *     description: Check all info related to the application
 *     produces:
 *       - application/json
 */
router.get('/',
  (req, res) => res.json({ version }));

export default router;
