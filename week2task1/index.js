/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
   return tweet.split(' ').filter(item => item.startsWith('\#') === true).map(item => item.slice(1,item.length));
};