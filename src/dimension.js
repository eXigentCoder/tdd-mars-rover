const _ = require("lodash");

const messages = {
  noDimension: "No dimension provided",
  invalidDimension: "Dimension must be a positive integer",
};

module.exports = { createDimension, messages };

function createDimension(dimension) {
  if (_.isNil(dimension)) {
    throw new Error(messages.noDimension);
  }
  if (dimension <= 0) {
    throw new Error(messages.invalidDimension);
  }
  if (!_.isInteger(dimension)) {
    throw new Error(messages.invalidDimension);
  }
  return dimension;
}
