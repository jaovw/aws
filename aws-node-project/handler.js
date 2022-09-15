'use strict';

module.exports.hello = async (event) => {
  return process.env['FIRST_NAME']
};
