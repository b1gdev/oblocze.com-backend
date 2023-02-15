'use strict';

/**
 * s-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::s-service.s-service');
