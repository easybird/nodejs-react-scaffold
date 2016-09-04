/* eslint no-param-reassign: "off" */

/**
 * @param req.query.name, req.query.message
 * @returns req.scaffoldName
 * @returns req.scaffoldMessage
 */
export function prepareReactScaffoldData(req, res, next) {
  req.scaffoldName = (req.query.name || '?name=aName');
  req.scaffoldMessage = (req.query.message || '?message=aMessage');
  next();
}
