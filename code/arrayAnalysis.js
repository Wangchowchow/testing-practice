const arrayAnalysis = (array) => {
    function min(array) {
      return array.sort((a, b) => a - b)[0];
    }
    return {
      average: array.reduce((prev, next) => prev + next) / array.length,
      min: array.sort((a, b) => a - b)[0],
      max: array.sort((a, b) => b - a)[0],
      length: array.length,
    };
  };

module.exports = arrayAnalysis;