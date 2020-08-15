/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    //console.log('NEW\n');
    var command = [].slice.call(arguments);
    var newCollection = [];
    var selectedParam = [];
    var selectedCollection = [];

    for (var i = 0; i < collection.length; i++) {
        newCollection[i] = Object.assign({}, collection[i]);
    }

    for (var i = 1; i < arguments.length; i++) {
        if (command[i][0] == 'filter') {
            for (var j = 0; j < command[i][1].length; j += 2) {
                var param = command[i][1][j];
                var value = command[i][1][j + 1];
                for (var k = 0; k < newCollection.length;) {
                    if ((typeof newCollection[k][param] == 'undefined') || !value.includes(newCollection[k][param])) {
                        newCollection.splice(k, 1);
                    }
                    else {
                        k++;
                    }
                }
            }
        }
        else selectedParam.push(command[i][1]);
    }

    var isReady = false;

    if (selectedParam.length > 0) {
        if (selectedParam.length==1) isReady = true;
        else {
            for (let i = 0; i < selectedParam.length; i++) {
                for (let j = 0; j < selectedParam[i].length;j++) {
                    for (let q = 0; q < selectedParam.length; q++) {
                        for (let t = 0; t < selectedParam[q].length; t++) {
                            if (i==q && j==t);
                            else  {
                                if (selectedParam[i][j] == selectedParam[q][t]) isReady = true;
                            }
                        }
                    }
                }
            }
        }

        if (isReady)  {
            const commonElements = function(arrays) {
                if (arrays.length == 0)
                    return [];
                const intersection = new Set(arrays[0]);
                for (const array of arrays) {
                    const set = new Set(array);
                    for (x of intersection) {
                        if (!set.has(x))
                            intersection.delete(x);
                    }
                }
                return Array.from(intersection);
            };

            selectedCollection = commonElements(selectedParam);
        }
    }

    if (isReady) {
        for (var i = 0; i < newCollection.length; i++) {
            var temp = 0;
            for (var key in newCollection[i]) {
                temp++;
                if (!selectedCollection.includes(key)) {
                    temp--;
                    delete newCollection[i][key];
                }
            }
            if (temp == 0) {
                newCollection.splice(i, 1);
            }
        }
    }

    if (!isReady && selectedParam.length > 0) return []; else return newCollection;
    

}

/**
 * @params {String[]}
 */
function select() {
    return ['select', [].slice.call(arguments)];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filter', [].slice.call(arguments)];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
