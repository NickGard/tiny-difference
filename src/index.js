Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.difference = function(array) {
  var otherArrays = Array.prototype.slice.call(arguments, 1);
  if (!Array.isArray(array) || !otherArrays.every(Array.isArray)) return [];
  return array.filter(function(element) {
    return otherArrays.every(function(otherArray) {
      return otherArray.indexOf(element) === -1;
    });
  });
};
