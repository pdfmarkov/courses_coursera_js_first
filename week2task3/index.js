// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

    switch(command.split(' ')[0]){
        case 'ADD':
            addCommand(command.split(' ')[1], command.split(' ')[2]);
            break;
        case 'REMOVE_PHONE':
            return removeCommand(command.split(' ')[1]);
            break;
        case 'SHOW':
            return showCommand();
            break;

    }

};


function addCommand(name, phone){
    if (!phoneBook.hasOwnProperty(name)) {
        (phone.search('\,') != -1) ? phoneBook[name] = [phone.split(',')[0], phone.split(',')[1]] : phoneBook[name] = [phone];
    } else {
        if (phone.search('\,') != -1)  {
            phoneBook[name].push(phone.split(',')[0]);
            phoneBook[name].push(phone.split(',')[1]);

        } else phoneBook[name].push(phone);
    }
};

function removeCommand(phone1) {
   let names = Object.keys(phoneBook);

   for (let i = 0; i < names.length; i++){
       var name = names[i];
       var phone = phoneBook[name];
       var index = phone.indexOf(phone1);
       if (index > -1) {
           phone.splice(index, 1);
           return true;
       } else {
           if (i === names.length-1) return false;
       }
    }
};

function showCommand(){
   
    let names = Object.keys(phoneBook);
    let answer = [];

    for (let i = 0; i < names.length; i++){
        var name = names[i];
        var phone = phoneBook[name];
        if (phone.length > 0) answer.push(`${name}: ${phone.join(', ')}`);
    }
    answer.sort();
    return answer;
 };