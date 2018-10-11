'use strict'

const onHeaders = require('on-headers');

module.exports = function featurePolicy(policies) {
  return (req, res, next) => {
    if (!policies) {
      if (typeof next === 'function') {
        return next()
      }
      return;
    }

    onHeaders(res, () => {
      const policiesStr = Object.entries(policies).map(([key, value]) => {
        return `${key} ${value}`;
      }).join("; ");

      res.setHeader('Feature-Policy', policiesStr);
    });
    if (typeof next === 'function') {
      next();
    }
  }
}
