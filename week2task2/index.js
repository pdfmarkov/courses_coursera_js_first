/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    return hashtags.map(item => item.toLowerCase()).filter((item , index) => hashtags.map(item => item.toLowerCase()).indexOf(item) === index ).join(', ');
};
