var _this = this;
var tasks = [
    { text: "Напишите функцию обращения строки" },
    { text: "Напишите рекурсивную функцию обращения строки" },
    { text: "Напишите функцию, проверяющую, является ли строка палиндромом" },
    { text: "Напишите функцию, определяющую позицию максимального элемента массива целочисленных значений" },
    { text: "Напишите функции алгебры комплексных чисел(сложение, вычитание, умножение, деление), оперирующие составными объектами" },
    { text: "Напишите функцию, которая выводит в консоль таблицу умножения с генерацией отступов для цифр(каждая «ячейка» таблицы должна занимать одинаковое количество символов), принимающее на вход отступы между ячейками и строками" },
    { text: "Напишите функцию, сокращающую строку до первого и последнего символов, а между ними указывающую количество удаленных символов." },
    { text: "Напишите функцию, подсчитывающую длину максимальной неунывающей последовательности в массиве целочисленных значений" },
    { text: "Напишите функцию, определяющую, является ли среднее арифметическое элементов массива целочисленных значений больше, чем длина переданного массива" },
    { text: "Напишите функцию, определяющую является ли число простым, в случае аргумента более 100 возвращает строку «TOO BIG NUMBER!»" },
    { text: "Определите функцию executeBinaryOp, принимающую на вход функцию от двух аргументов и пару аргументов, возвращает результат выполнения переданной функции. Какой тип будет у функции executeBinaryOp? Почему?" },
];
tasks.map(function (item, index) {
    _this.document.getElementById("my_tasks").innerHTML += "\n        <div>\n            <h1>\u0417\u0430\u0434\u0430\u0447\u0430 #" + (index + 1) + "</h1>\n            <p class=\"test_task\">" + item.text + "</p>\n            <p>\u0412\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435: <span id=\"data_" + (index + 1) + "\"></span></p>\n            <p>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: <span id=\"result_" + (index + 1) + "\"></span></p>\n        </div>\n    ";
});
function writeText(number, data, result) {
    this.document.getElementById("data_" + number).innerHTML = data;
    this.document.getElementById("result_" + number).innerHTML = result;
}
/****** Task #1 ******/
var reverse = function (str) {
    return str.split("").reverse().join("");
};
var string_task_1 = "Hello World!";
writeText(1, string_task_1, reverse(string_task_1));
/****** Task #2 ******/
var recursion = function (str, slice_str) {
    return (str.length > 1) ?
        recursion(str.slice(1), str[0] + slice_str) :
        str[0] + slice_str;
};
var string_task_2 = "Привет мир!";
writeText(2, string_task_2, recursion(string_task_2, ""));
/****** Task #3 ******/
var palindrome = function (str) {
    str = str.toUpperCase();
    var reverse_str = str.split("").reverse().join("");
    return reverse_str === str ? "Является палиндромом" : "Не является палиндромом";
};
var string_task_3 = "Mom_Lol_mom";
writeText(3, string_task_3, palindrome(string_task_3));
/****** Task #4 ******/
var indexMaxElement = function (arr) {
    var maxEl = Math.max.apply(Math, arr);
    return arr.findIndex(function (el) { return el === maxEl; });
};
var array_task_4 = [1, 560, 9, 70, -12];
writeText(4, "[" + array_task_4 + "]", indexMaxElement(array_task_4));
/*** Task #5 ***/
var complexObj = {
    num_1: { a: 2, b: 0 },
    num_2: { a: 1, b: 2 },
    sum: function () {
        var n1 = this.num_1.a + this.num_2.a;
        var n2 = this.num_1.b + this.num_2.b;
        return this.char(n1, n2);
    },
    raz: function () {
        var n1 = this.num_1.a - this.num_2.a;
        var n2 = this.num_1.b - this.num_2.b;
        return this.char(n1, n2);
    },
    umn: function () {
        var n1 = (this.num_1.a * this.num_2.a) - (this.num_1.b * this.num_2.b);
        var n2 = (this.num_1.a * this.num_2.b) + (this.num_2.a * this.num_1.b);
        return this.char(n1, n2);
    },
    del: function () {
        var n1 = (this.num_1.a * this.num_2.a + this.num_1.b * this.num_2.b) / (this.num_2.a * this.num_2.a + this.num_2.b * this.num_2.b);
        var n2 = (this.num_2.a * this.num_1.b - this.num_1.a * this.num_2.b) / (this.num_2.a * this.num_2.a + this.num_2.b * this.num_2.b);
        return this.char(n1, n2);
    },
    char: function (a, b) {
        var char = "";
        b > 0 ? char = "+" : char = "";
        return a + char + b + "i";
    }
};
var complex = function () {
    return "\u0421\u0443\u043C\u043C\u0430 = " + complexObj.sum() + " | \u0420\u0430\u0437\u043D\u043E\u0441\u0442\u044C = " + complexObj.raz() + " | \u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 = " + complexObj.umn() + " | \u0427\u0430\u0441\u0442\u043D\u043E\u0435 = " + complexObj.del();
};
var data_5 = "{" + complexObj.num_1.a + ", " + complexObj.num_1.b + "}  {" + complexObj.num_2.a + ", " + complexObj.num_2.b + "}";
writeText(5, data_5, complex());
/*** Task #6 ***/
var multiplication = function (marginX, marginY) {
    var margin_row = "";
    var matgin_two = "";
    var row_string = "";
    for (var i = 0; i < marginX; i++) {
        margin_row += " ";
        if (marginX - 1 !== i)
            matgin_two += " ";
    }
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            var composition = i * j;
            if (composition > 9) {
                row_string += margin_row + composition + matgin_two;
            }
            else {
                row_string += margin_row + composition + margin_row;
            }
        }
        for (var y = 0; y < marginY; y++) {
            console.info("");
        }
        console.info(row_string);
        row_string = "";
    }
    return "См. Консоль (F12)";
};
var num_6_1 = 2, num_6_2 = 1;
writeText(6, num_6_1 + " " + num_6_2, multiplication(num_6_1, num_6_2));
/*** Task #7 ***/
var sliceString = function (str) {
    return str.length > 1 ?
        str[0] + (str.length - 2) + str.slice(-1) :
        str;
};
var string_task_7 = "BigText";
writeText(7, string_task_7, sliceString(string_task_7));
/*** Task #8 ***/
var monotone = function (arr) {
    var temp = arr[0] < arr[1];
    var value = arr[0];
    var temp_length = 1, max_length = 0;
    arr.forEach(function (item) {
        temp_length++;
        if (value < item && !temp || value > item && temp) {
            if (temp_length > max_length)
                max_length = temp_length;
            temp_length = 1;
            temp = !temp;
        }
        value = item;
    });
    return max_length;
};
var array_task_8 = [-1, -2, -3, 100, 200, 300, 400, 9];
writeText(8, "[" + array_task_8 + "]", monotone(array_task_8));
/*** Task #9 ***/
var arithmetic = function (arr) {
    var arr_length = arr.length;
    var sum_el_arr = arr.reduce(function (sum, item) {
        return sum + item;
    }, 0);
    var arithmetic_mean = sum_el_arr / arr_length;
    var mark = "";
    arithmetic_mean > arr_length ? mark = ">" : mark = "<";
    return "\u0421\u0440. \u0430\u0440\u0438\u0444\u043C. (" + ("" + arithmetic_mean.toFixed(2)) + ") " + mark + " \u0414\u043B. \u043C\u0430\u0441\u0441\u0438\u0432\u0430 (" + arr_length + ")";
};
var array_task_9 = [1, 2, 0, 9, 2, 5];
writeText(9, "[" + array_task_9 + "]", arithmetic(array_task_9));
/*** Task #10 ***/
var primeNumber = function (num) {
    if (num > 100)
        return "TOO BIG NUMBER!";
    var result = "Простое число!";
    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0 || num === 1) {
            result = "Не является простым";
            break;
        }
    }
    return result;
};
var number_task_10 = 23;
writeText(10, "" + number_task_10, primeNumber(number_task_10));
/*** Task #11 ***/
var sum = function (a, b) {
    return a + b;
};
var executeBinaryOp = function (num1, num2) {
    return num1 + " + " + num2 + " = " + sum(num1, num2);
};
var num_11_1 = 5, num_11_2 = 6;
writeText(11, num_11_1 + ", " + num_11_2, executeBinaryOp(num_11_1, num_11_2));
