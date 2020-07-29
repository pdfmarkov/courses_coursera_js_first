/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
        minutes += interval;
        while ( minutes > 59 ) {
            minutes -= 60;
            hours++;
        }
        while (hours >23 )  hours -= 24;
        let answer;
        ( hours <= 9 ) ? answer = '0'+hours+':' :  answer = hours+':';
        ( minutes <=9 ) ? answer += '0'+minutes :  answer += minutes;
        return answer;
};
