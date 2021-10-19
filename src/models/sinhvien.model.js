const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sinhvienSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    idSV: {
      type: String,
      requireds: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sinhvienSchema.plugin(toJSON);
sinhvienSchema.plugin(paginate);

/**
 * @typedef sinhvien
 */
const sinhvien = mongoose.model('sinhvien', sinhvienSchema);

module.exports = sinhvien;
