// Data Types
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function dataTypes() {
    // Нельзя вместо одного типа задать другой тип данных, кроме типа any
    var str = 'Hello';
    var num = 15;
    var bool = true;
    var n = null;
    var u = undefined;
    var obj = {};
    var sym = Symbol('id');
    var bgi = 9999n;
    var a = '';
    a = 10;
    console.log(typeof a);
    //Тип array
    //После двоеточия ставиться тип для значений массива (лучше использовать вот такой вариант записи)
    var arr = [2, 4, 6, 7];
    var arr1 = [true, false];
    var arr2 = ['Hello', 'Bye'];
    //Также пишут еще по другому: такой пример абсолютно равен записи arr, arr1, arr2
    var mass = [4, 5, 6];
    var mass1 = [true, false];
    var mass2 = ['Hello', 'Bye'];
    var newArr = __spreadArray(__spreadArray([], arr, true), [9], false);
    console.log(newArr);
    // Можно добавить несколько и более значений:
    var ex = [6, 7, true, false];
    //Если поставить readonly, то массив нельзя будет мутировать:
    // Readonly для того, чтобы просто читать массив (его изменить)
    var notMut = [5, 'Hi', true];
    // В типе Tuple можно хранить порядок типов:
    // Типы значений указываются по порядку после двоеточия
    var tup = [3, 'Hello'];
    // Type object
    //Object type with any:
    var user = {
        name: 'Yauhen',
        age: 30
    };
    //Define object type:
    var user1 = {
        name: 'Yauhen',
        age: 30
    };
    var human = {
        name: 'Max',
        age: 30,
        nickName: 'Iogga'
    };
    var admin = {
        name: 'Alex',
        age: 20,
        getPass: 'password'
    };
}
//Functions
function functions() {
    var createPasswoed = function (name, age) {
        console.log("".concat(name, " ").concat(age));
    };
    createPasswoed('Name', 30);
    createPasswoed('Name', '30');
    //Function with optional argument "age"
    var createUser = function (name, age) {
        if (name === void 0) { name = 'Max'; }
        age === undefined ? age = '' : age;
        console.log("".concat(name, " ").concat(age));
    };
    createUser('Max');
    //Rest type
    var createSkills = function (name) {
        var skills = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            skills[_i - 1] = arguments[_i];
        }
        console.log("I'm ".concat(name, ", my skills: ").concat(skills));
    };
    createSkills('Nikita', 'programming', 'cook', 'play hockey');
    //Write the return type
    var sum = function (a, b) { return a + b; };
    console.log(sum(7, 3));
    //Describe funtcion type:
    var myFunc;
    var oldFunc = function (name) {
        console.log(name);
    };
    myFunc = oldFunc;
    myFunc('Nick');
}
functions();
