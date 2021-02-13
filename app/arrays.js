exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((acc, item) => {
      return acc += item;
    }, 0)
  },

  remove: function (arr, item) {
    return arr.filter(x => x !== item)
  },

  removeWithoutCopy: function (arr, item) {
    return arr.forEach((x, index) => {
      if (x === item) {
        arr.splice(index, 1)
      }
    })
  },

  append: function (arr, item) {
    return [...arr, item]
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    return [item, ...arr]
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return [...arr1, ...arr2]
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    return arr.reduce((acc, x) => {
      if (x === item) {
        return acc += 1;
      }
      return acc;
    }, 0)
  },

  duplicates: function (arr) {
    const object = {};
    const result = [];

    arr.forEach(item => {
      if (!object[item])
        object[item] = 0;
      object[item] += 1;
    })

    for (const prop in object) {
      if (object[prop] >= 2) {
        result.push(+prop);
      }
    }

    return result;
  },

  square: function (arr) {
    return arr.map(item => item * item)
  },

  findAllOccurrences: function (arr, target) {

  }
};
