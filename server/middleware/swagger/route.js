import { Router as expressRouter } from 'express';

const router = expressRouter();

router.get('/', (req, res) => res.redirect('/swagger?url=/v2/api-docs.json'));

export default router;
