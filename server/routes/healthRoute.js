import { Router as expressRouter } from 'express';

const router = expressRouter();

/**
 * @swagger
 * /health:
 *   get:
 *     tags: ['Metadata']
 *     description: Check the Health of the service
 *     produces:
 *       - application/json
 */
router.get('/', (req, res) => res.json({
  status: 'UP'
}));

export default router;
