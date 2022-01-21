let getStringNumbers = function(){
    let result = '';
    let numberIterations = '';
    while(1){
        numberIterations = prompt('Введите число от 1 до 100');
        if(isNotANumber(numberIterations)){
            alert('Нужно ввести число!');
            continue;
        }
        if(isEmpty(numberIterations)){
            alert('Нужно ввести число!');
            continue;
        }
        if(numberIterations<0 || numberIterations>100){
            alert('Введенное вами число не из диапазона!')
            numberIterations = prompt('Введите число от 1 до 100');
        }
        else{
            break;
        }
    }
    console.log(numberIterations);
    for(let i=0; i<numberIterations; i++){
        let number = '';
        while(1){
            number = prompt('Введите число от 1 до 100');
            if(isNotANumber(number) || isEmpty(number)){
                alert('Нужно ввести число!');
                continue;
            }
            else{
                break;
            }
        }
        if(number%2==0 && result === ''){
            result += number;
            console.log(number);
        }
        else if(number%2==0 && result !== ''){
            result = result + ',' + number;
            console.log(number);
        }
    }
    return result === ''?alert('пустая строка'):alert(result); 
}

let isNotANumber = function(num){
    return isNaN(Number(num))?true:false;
}
let isEmpty = function(num){
    return Boolean(num)?false:true;
}

getStringNumbers();

////////////////////////////

let sumAnswer = function(){
    while(1){
        let sumResult = prompt('Какая сумма выражения 3 + 4 = ?');
        if(sumResult != 7){
            console.log(sumResult);
            alert('Неверно! Еще одна попытка!')
        }
        else{
            console.log(sumResult);
            alert('Вы истинный математик!');
            break;
        }
    }
}

/* sumAnswer(); */

/////////////////////////////

let getQuarter = function(){
    while(1){
        let number = prompt('Введите число от 0 до 60');
        if(Boolean(number) == false){
            alert('Нужно ввести число!');
            continue;
        }
        if(isNaN(Number(number))){
            alert('Нужно ввести число!');
            continue;
        }
        else if(number<0 || number>60){
            alert('Введенное вами число не из диапазона!')
            number = prompt('Введите число от 1 до 60');
        }
        else{
            switch (true){
                case number<=15:
                    alert('Первая четверть');
                    break;
                case number<=30:
                    alert('Вторая четверть');
                    break;
                case number<=45:
                    alert('Третья четверть');
                    break;
                case number<=60:
                    alert('Четвертая четверть');
                    break;
            }
            break;
        }
    }
}
/* getQuarter(); */
/*
1.Создать строку которая содержит только четный числа

Запросить у пользователя ввести число от 1 до 100 (сделать проверку)
Создать цикл с количеством итераций с предыдущего шага
Проверить если это число четное, добавить его к строке через запятую
(Пример let result = "2,4,6,8")

2. Сделать цикл, который бесконечно запрашивает ответ

Создаем цикл, который внутри запрашивает с помощью prompt 
"Какая сумма выражения 3 + 4 = ?"
Если пользователь вводит неверный ответ (все кроме 7), 
браузер должен запросить ввести ответ еще раз. 
И так до бесконечности пока пользователь не введен корректный ответ
Если пользователь вводит корректный ответ, цикл должен остановится 
и нужно вывести сообщение "Вы истинный математик!"

3. Определить в какую четверть часа попадает число с помощью switch/case

Запросить у пользователя ввести число от 0 до 60
С помощью switch/case сделать условия, для проверки к какой четверти относится 
число Вывести результат, в какой четверти находится число 
(alert('В первую четверть.'))
*/