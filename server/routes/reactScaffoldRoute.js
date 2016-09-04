import { Router as expressRouter } from 'express';
import { prepareReactScaffoldData } from '../middleware/reactScaffold/reactScaffoldMiddleware';
import renderReactScaffoldApp from '../middleware/react/renderReactScaffoldApp';
const router = expressRouter();

router.get(
  '/',
  prepareReactScaffoldData,
  renderReactScaffoldApp
);

export default router;
