//Задача 1

let array = [1,2,3,4,5,6,7,8,9,10];
let arrayEven = [];
let arrayOdd = [];

for (i=0; i<array.length; i++) {
    if (array[i]%2 == 0) {
        arrayEven.push(array[i])         
    } else arrayOdd.push(array[i])
}

even = 'Четные:'
odd = 'Нечетные:'

console.log(even);
console.log(arrayEven);
console.log(odd);
console.log(arrayOdd);

//Задача 2

let arr = [];
for (i=0; i<Infinity; i++) {
    let deed = prompt('Введите команду "add, что-то", или "del, что-то", или "stop"');
        let arrayDeed = deed.split(', ');
        let b = arrayDeed[1];
        
        if (arrayDeed[0]=='add') {
            arr.push(b)
        } else if (arrayDeed[0]=='del') {
            for (key=0; key<arr.length; key++) {
                for (let key in arr) {
                    arr[key] == b ? arr.splice (key,1) : ''                
                } 
            } 
        } else if (arrayDeed[0]=='stop') {
            break
        } else {console.log('Неверный текст или неверное действие')}
    
        console.log(arr);
        }    