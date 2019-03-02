/*
    Если находит число, то сохраняет как файл у себя и в базе сохраняет запись. Файл такой-то числа на такой позиции +
    Поиск одинаковых строк или файлов (hash).
*/
const fs = require('fs');
const handlerFunc = (text) => {
    let result = [];
    console.log("WRITE TEXT = ", text);
    let i = 0;
    while (i < text.length) {
        if (Number(text[i])) {
            let num = String(parseFloat(text.substr(i)));
            const newNum = {
                number: num,
                position: `Символ ${i + 1} - ${i + num.length + 1}`
            };
            result.push(newNum);
            i += num.length;
        } else {
            i += 1;
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
    let fileResultText = fs.readFileSync('result.txt', 'utf-8');
    let writeText = "=====| File: " + fileName + ".txt |=====\n";
    result.forEach((el, i,) => {
        writeText += `Число #${i + 1}: ${el.number}; ${el.position}\n`
    });
    writeText += "\n";
    fs.writeFileSync('result.txt', fileResultText + writeText);
};

module.exports = handlerFunc;