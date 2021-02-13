exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function (str1, str2) {

    var m = (function () {
      var greeting = str1;
      var name = str2;

      return {
        sayIt: function () {
          return `${greeting}, ${name}`;
        },
        get name() {
          return name
        },
        set name(value) {
          name = value
        },
        get greeting() {
          return greeting
        },
        set greeting(value) {
          greeting = value
        }
      };
    })();

    return m;

  }
};
