const { createDimension } = require("./dimension");

module.exports = { createMap };

function createMap(newWidth, newHeight) {
  const width = createDimension(newWidth);
  const height = createDimension(newHeight);
  return { width, height };
}
