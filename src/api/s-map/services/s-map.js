'use strict';

/**
 * s-map service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::s-map.s-map');
