const httpStatus = require('http-status');
const { Sinhvien } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a sinhvien
 * @param {Object} sinhvienBody
 * @returns {Promise<Sinhvien>}
 */
const createSinhvien = async (sinhvienBody) => {

  return Sinhvien.create(sinhvienBody);
};

/**
 * Query for sinhviens
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySinhviens = async (filter, options) => {
  const sinhviens = await Sinhvien.paginate(filter, options);
  return sinhviens;
};
module.exports = {
  createSinhvien,
  querySinhviens,
};
