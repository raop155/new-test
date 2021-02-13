exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {

  },

  manipulateRemoteData: function (url) {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const arr = res.map(person => person.name);
        arr.sort()
      })
  }
};
