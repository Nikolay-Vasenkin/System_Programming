/**** Поиск одинаковых строк или файлов (hash). ****/

const fs = require('fs');
const handlerFunc = (text) => {
    let result = [];
    let i = 0, row = 1, position = 1;

    console.log("WRITE TEXT = ", text);

    while (i < text.length) {
        if(text[i] === "\n") {
            row += 1;
            position = 0;
        }
        if (Number(text[i])) {
            let num = String(parseFloat(text.substr(i)));
            let newNum = {
                row: row,
                number: null,
                position: null,
            };
            if(text[i - 1] === "-"){
                newNum.number = `-${num}`;
                newNum.position = `Позиция: ${position - 1}`;
            } else {
                newNum.number = `${num}`;
                newNum.position = `Позиция: ${position}`;
            }
            result.push(newNum);
            i += num.length;
            position += num.length;
        } else {
            i += 1;
            position += 1;
        }
    }
    // Result
    if (result.length === 0) {
        return 'No numbers in the file';
    } else {
        const currentDate = parseInt(new Date().getTime() / 1000);
        const fileName = __dirname + "/save_file/" + currentDate + ".txt";
        fs.writeFileSync(fileName, text);
        return writeResult(result, currentDate);
    }
};

const writeResult = (result, fileName) => {
    let writeText = "=====| File: " + fileName + ".txt |=====\n";
    result.forEach((el) => {
        writeText += `Число: '${el.number}' Строка: ${el.row}; ${el.position}\n`
    });
    writeText += "\n";
    const resultOldText = fs.readFileSync('result.txt', 'utf-8');
    fs.writeFileSync('result.txt', resultOldText + writeText);
};

module.exports = handlerFunc;