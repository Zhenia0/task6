let number;
do{
    number = +prompt('Введите число больше 100', '');
}while(number != 0 && number < 100)
console.log(number);
//run it in browser