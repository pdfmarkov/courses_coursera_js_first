/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    // Извинюясь за код, схожий с тем, что было в обсуждениях. 
    //Попытался на основе обсуждений исправить все свои недочеты.
    const addZero = n => n < 10 ? '0' + n : n;

    let answer = new Date(date);
    types = ['years', 'months', 'days', 'hours', 'minutes'];

    Object.defineProperties(answer, {
		'add': {
			value: function (num, param) {
				if (num > 0 && (types.includes(param))) {
					if (param === 'years')
						answer.setFullYear(answer.getFullYear() + num);
					if (param === 'months')
						answer.setMonth(answer.getMonth() + num);
					if (param === 'days')
						answer.setDate(answer.getDate() + num);
					if (param === 'hours')
						answer.setHours(answer.getHours() + num);
					if (param === 'minutes')
						answer.setMinutes(answer.getMinutes() + num);
					return this;
				}
				else
					throw new TypeError();
			}
		},
		'subtract': {
			value: function (num, param) {
				if (num > 0 && (types.includes(param))){
					if (param === 'years')
						answer.setFullYear(answer.getFullYear() - num);
					if (param === 'months')
						answer.setMonth(answer.getMonth() - num);
					if (param === 'days')
						answer.setDate(answer.getDate() - num);
					if (param === 'hours')
						answer.setHours(answer.getHours() - num);
					if (param === 'minutes')
						answer.setMinutes(answer.getMinutes() - num);
					return this;
				}
				else
					throw new TypeError();
			}
		}
	});

	Object.defineProperty(answer, 'value', {
		get: function () {
            return answer.getUTCFullYear()+'-'+addZero(answer.getUTCMonth()+1) + '-' + addZero(answer.getUTCDate()) + ' '+addZero(answer.getHours())+":"+addZero(answer.getUTCMinutes());
		}
	});

	return answer;

};

