const tasks = [
    {text: "Напишите функцию обращения строки"},
    {text: "Напишите рекурсивную функцию обращения строки"},
    {text: "Напишите функцию, проверяющую, является ли строка палиндромом"},
    {text: "Напишите функцию, определяющую позицию максимального элемента массива целочисленных значений"},
    {text: "Напишите функции алгебры комплексных чисел(сложение, вычитание, умножение, деление), оперирующие составными объектами"},
    {text: "Напишите функцию, которая выводит в консоль таблицу умножения с генерацией отступов для цифр(каждая «ячейка» таблицы должна занимать одинаковое количество символов), принимающее на вход отступы между ячейками и строками"},
    {text: "Напишите функцию, сокращающую строку до первого и последнего символов, а между ними указывающую количество удаленных символов."},
    {text: "Напишите функцию, подсчитывающую длину максимальной неунывающей последовательности в массиве целочисленных значений"},
    {text: "Напишите функцию, определяющую, является ли среднее арифметическое элементов массива целочисленных значений больше, чем длина переданного массива"},
    {text: "Напишите функцию, определяющую является ли число простым, в случае аргумента более 100 возвращает строку «TOO BIG NUMBER!»"},
    {text: "Определите функцию executeBinaryOp, принимающую на вход функцию от двух аргументов и пару аргументов, возвращает результат выполнения переданной функции. Какой тип будет у функции executeBinaryOp? Почему?"},
];
tasks.map((item,index)=>{
    this.document.getElementById("my_tasks").innerHTML += `
        <div>
            <h1>Задача #${index + 1}</h1>
            <p class="test_task">${item.text}</p>
            <p>Входные данные: <span id="data_${index + 1}"></span></p>
            <p>Результат: <span id="result_${index + 1}"></span></p>
        </div>
    `;
});
function writeText(number, data, result) {
    this.document.getElementById(`data_${number}`).innerHTML = data;
    this.document.getElementById(`result_${number}`).innerHTML = result;
}

/****** Task #1 ******/
const reverse = (str:string) => {
    return str.split("").reverse().join("");
};
const string_task_1:string = "Hello World!";
writeText(1, string_task_1, reverse(string_task_1));

/****** Task #2 ******/
const recursion = (str:string, slice_str:string) => {
    return (str.length > 1) ?
        recursion(str.slice(1), str[0] + slice_str) :
        str[0] + slice_str;

};
const string_task_2:string = "Привет мир!";
writeText(2, string_task_2, recursion(string_task_2, ""));

/****** Task #3 ******/
const palindrome = (str:string) => {
    str = str.toUpperCase();
    const reverse_str:string = str.split("").reverse().join("");
    return reverse_str === str ? "Является палиндромом" : "Не является палиндромом";
};
const string_task_3:string = "Mom_Lol_mom";
writeText(3, string_task_3, palindrome(string_task_3));

/****** Task #4 ******/
const indexMaxElement = (arr) =>{
    let maxEl = Math.max(...arr);
    return arr.findIndex(el => {return el === maxEl});
};
const array_task_4 = [1,560,9,70,-12];
writeText(4, `[${array_task_4}]`, indexMaxElement(array_task_4));

/*** Task #5 ***/
let complexObj = {
    num_1: {a: 2, b: 0},
    num_2: {a: 1,b: 2},
    sum: function () {
        const n1 = this.num_1.a + this.num_2.a;
        const n2 = this.num_1.b + this.num_2.b;
        return this.char(n1,n2);
    },
    raz: function () {
        const n1 = this.num_1.a - this.num_2.a;
        const n2 = this.num_1.b - this.num_2.b;
        return this.char(n1,n2);
    },
    umn: function () {
        const n1 = (this.num_1.a * this.num_2.a) - (this.num_1.b * this.num_2.b);
        const n2 = (this.num_1.a * this.num_2.b) + (this.num_2.a * this.num_1.b);
        return this.char(n1,n2);
    },
    del: function () {
        const n1 = (this.num_1.a*this.num_2.a+this.num_1.b*this.num_2.b)/(this.num_2.a*this.num_2.a+this.num_2.b*this.num_2.b);
        const n2 = (this.num_2.a*this.num_1.b-this.num_1.a*this.num_2.b)/(this.num_2.a*this.num_2.a+this.num_2.b*this.num_2.b);
        return this.char(n1,n2);
    },
    char: function (a,b) {
        let char = "";
        b > 0 ? char = "+" : char = "";
        return a + char + b + "i";
    }
};
const complex = () => {
    return `Сумма = ${complexObj.sum()} | Разность = ${complexObj.raz()} | Произведение = ${complexObj.umn()} | Частное = ${complexObj.del()}`;
};
const data_5  = `{${complexObj.num_1.a}, ${complexObj.num_1.b}}  {${complexObj.num_2.a}, ${complexObj.num_2.b}}`;
writeText(5, data_5, complex());

/*** Task #6 ***/
const multiplication = (marginX:number, marginY:number) => {
    let margin_row:string = "";
    let matgin_two:string = "";
    let row_string:string = "";
    for(let i = 0; i < marginX; i++){
        margin_row += " ";
        if(marginX - 1 !== i) matgin_two += " ";
    }
    for (let i = 1; i < 10; i++){
        for(let j = 1; j < 10; j++){
            let composition = i * j;
            if (composition > 9) {
                row_string += margin_row + composition + matgin_two;
            }else {
                row_string += margin_row + composition + margin_row;
            }
        }
        for (let y = 0; y < marginY; y++){
            console.info("");
        }
        console.info(row_string);
        row_string = "";
    }
    return "См. Консоль (F12)";
};
const num_6_1:number = 2, num_6_2:number = 1;
writeText(6, `${num_6_1} ${num_6_2}`, multiplication(num_6_1, num_6_2));

/*** Task #7 ***/
const sliceString = (str:string) => {
    return str.length > 1 ?
        str[0] + (str.length - 2) + str.slice(-1) :
        str;
};
const string_task_7 = "BigText";
writeText(7, string_task_7, sliceString(string_task_7));

/*** Task #8 ***/
const monotone = (arr) => {
    let temp:boolean = arr[0] < arr[1];
    let value:number = arr[0];
    let temp_length:number = 1, max_length:number = 0;
    arr.forEach((item) => {
        temp_length++;
        if(value < item && !temp || value > item && temp) {
            if(temp_length > max_length) max_length = temp_length;
            temp_length = 1;
            temp = !temp;
        }
        value = item;
    });
    return max_length;
};
const array_task_8 = [-1,-2,-3,100,200,300,400,9];
writeText(8, `[${array_task_8}]`, monotone(array_task_8));

/*** Task #9 ***/
const arithmetic = (arr:number[]) => {
    let arr_length:number = arr.length;
    let sum_el_arr:number = arr.reduce((sum, item) => {
        return sum + item;
    }, 0);
    let arithmetic_mean:number = sum_el_arr / arr_length;
    let mark:string = "";
    arithmetic_mean > arr_length ? mark = ">" : mark = "<";
    return `Ср. арифм. (${"" + arithmetic_mean.toFixed(2)}) ${mark} Дл. массива (${arr_length})`;
};
const array_task_9 = [1,2,0,9,2,5];
writeText(9, `[${array_task_9}]`, arithmetic(array_task_9));

/*** Task #10 ***/
const primeNumber = (num:number) => {
    if(num > 100) return "TOO BIG NUMBER!";
    let result:string = "Простое число!";
    for (let i = 2; i*i <= num; i++) {
        if (num % i === 0 || num === 1) {
            result = "Не является простым";
            break;
        }
    }
    return result;
};
const number_task_10:number = 23;
writeText(10, `${number_task_10}`, primeNumber(number_task_10));

/*** Task #11 ***/
const sum = (a:number, b:number) => {
    return a+b;
};
const executeBinaryOp = (num1:number, num2:number) => {
    return `${num1} + ${num2} = ${sum(num1,num2)}`;
};
const num_11_1:number = 5, num_11_2:number = 6;
writeText(11, `${num_11_1}, ${num_11_2}`, executeBinaryOp(num_11_1,num_11_2));