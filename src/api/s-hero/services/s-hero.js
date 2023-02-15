'use strict';

/**
 * s-hero service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::s-hero.s-hero');
