import { Router as expressRouter } from 'express';

const router = expressRouter();

/**
 * @swagger
 * /rest/scaffold/{key}:
 *   get:
 *     tags: ['NodeJs React Scaffold: REST API']
 *     description: Get it
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: key
 *         in: path
 *         type: string
 *         description: the key
 *         required: false
 *     responses:
 *       200:
 *         description: Get the info
 *       404:
 *         description: key not found
 */
router.get(
  '/scaffold/:key?',
  (req, res) => res
    .status(200)
    .json({
      scaffold: 'yes!',
      key: req.params.key
    })
);

export default router;
