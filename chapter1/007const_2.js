const number1 = 10;
const number2 = 20;
const sum = number1 + number2;
console.log(sum);

const familyName = '鈴木';
const firstName = '太郎';
const fullName = familyName + firstName;
console.log(fullName);

const value; //constでは初期値の省略は不可能

const myArray = ['鈴木', '田中', '高橋'];
myArray[0] = '後藤'; //myArray[0]が変更される。エラーは出ない。
console.log(myArray);

const myObject = {id: 20, name:'鈴木'};
myObject.name = '後藤';　//myObject.nameが変更される。エラーは出ない。
console.log(myObject);