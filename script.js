let getStringNumbers = function(){
    let result = '';
    
    let numberIterations = prompt('Введите число от 1 до 100');
    if(numberIterations<0 || numberIterations>100){
        alert('Введенное вами число не из диапазона!')
        numberIterations = prompt('Введите число от 1 до 100');
    }
    for(let i=1; i<numberIterations; i++){        
        if(i%2==0 && result === ''){
            result += i;
        }
        else if(i%2==0 && result !== ''){
            result = result + ',' + i;
        }
    }
    return result === ''?alert('пустая строка'):alert(result); 
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
    let number = prompt('Введите число от 0 до 60'); 
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
}