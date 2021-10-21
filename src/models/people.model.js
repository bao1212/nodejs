const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { Schema } = mongoose;

const peopleSchema = mongoose.Schema(
  {
    PID: {
      type: String,
      required: true,
      trim: true,
    },
  
    Sex: {
      type: Boolean,
      requireds: true,
      trim: true,
    },
    DOB: {
      type: String,
      requireds: true,
      trim: true,
    },
    Phone: {
      type: Number,
      requireds: true,
      trim: true,
    },
    Address: {
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
peopleSchema.plugin(toJSON);
peopleSchema.plugin(paginate);

/**
 * @typedef people
 */
const people = mongoose.model('people', peopleSchema);

module.exports = people;
