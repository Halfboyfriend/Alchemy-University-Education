function factorial(n) {
    fac = 1;
    res = 0;
    for (let i = 1; i <= n; i++){
        fac = fac * i;
        res += fac;
        console.log(i);
    }

    console.log(fac);
}

// factorial(5)
function scream(n) {
    word = ''
    for (let i = 0; i < n ; i++){
        if (i % 2 == 0) {
            word += 'a';
        }
        else {
            word += 'A';
        }
    }
    console.log(word)

}

// scream(10)

function topDouble(value, top) {
    while(value < top) {
        value *= 2;
    }
    return value / 2;
}


// console.log(topDouble(2, 100))

function maxSum(num) {
    answer = 0;
    
    for (let i = 1; i <= num; i++){
        answer = answer + i;
    }
    return answer;
}
// console.log(maxSum(5))

function isLeap(year) {
    if (year % 4 === 0 ) {
        if ( year % 100 === 0){
            
            if (year % 400 === 0) {
                return 'Leap year.';
            }
            else{
                return 'Not leap year.';
            }
          
        }
        else {
            return 'Leap year.';
        }
        
    }
    else {
        return 'Not leap year.';
    }
}

// console.log(isLeap(2400));
// console.log(isLeap(1989));

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }


function fibonacci(n) {
    var fibo = [];

    if (n === 1 || n === 0){
        fibo = [0];
    }
    else if (n === 2){
        fibo = [0, 1];
    }

    else {
        fibo = [0, 1];

        for (let i = 2; i < n; i++) {
            fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
        }
    }

    return fibo;
}
// console.log(fibonacci(50))



function splitAtX(string) {
    const index = string.indexOf('x')
    const firstHalf = string.slice(0, index)
    const secondHalf = string.slice(index+1)
    // console.log(secondHalf);
    // console.log(firstHalf);
    if (firstHalf.length > secondHalf.length) {
        return firstHalf;
    }
    else if (secondHalf.length > firstHalf.length) {
        return secondHalf;
    }
   
}

// console.log(splitAtX("Happyxdays"));

function addOne(array) {
   
    for (let i = 0; i < array.length; i++){
        array[i]++;
    }
    return array;
   
}

// console.log(addOne([1,2,3]));

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];

function numberOfPizzas(orders) {
    total = 0;
    for (let i = 0; i < orders.length; i++){
        total += orders[i]['pizzas']
    }
    return total;
}


// const totalPizzas = numberOfPizzas(orders);
// console.log( totalPizzas );

function halfValue(numbers) {
    var value = [];
    for (let i = 0; i < numbers.length; i++){
        value.push(Math.round(numbers[i] / 2));
    }
    return value;
}

// console.log(halfValue([2,4,6,8]))

function countC(str) {
    count = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() === 'c'){
            count += 1
        }
        
    }
    return count;
    
}

// console.log(countC('Come pick me somec cakes'))


function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++){
            if (str[i].toLowerCase() ===  vowels[j]) {
                count += 1
            }
        }

    }
    return count;


}

// console.log(countVowels('Hello world'))

function reverse(string) {
    var str = '';
    for (let i = string.length - 1; i >= 0; i--){
        str += string[i];
    }

    return str;
   
}


// console.log(reverse("cat"))

function sumTogether(arr1, arr2) {
    const sumArr = [];
    for (let i = 0; i < arr1.length; i++){
        sumArr.push(arr1[i] + arr2[i]);
    }
    return sumArr;

}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

// console.log(sumTogether(arr1, arr2));

function countElements(elements) {
    let dict = {};

    for (let i = 0; i < elements.length; i++){
        if(!dict[elements[i]]) {
            dict[elements[i]] = 1;
        } else {
            dict[elements[i]] += 1;
        }
    }
    return dict;

}

const elements = ["e", "k", "e", "z", "i", "z"];
// console.log(countElements(elements)); // returns {e: 2, k: 1, z: 2, i: 1}


function playerHandScore(hand) {
    let count = 0;
    for (let i = 0; i < hand.length; i++){
        if (hand[i] === 'K'){
            count += 4;
        }
        else if (hand[i] === 'Q') {
            count += 3;
        }
        else {
            count += 2;
        }
    }

    return count;

}

// console.log( playerHandScore("KQQ") ); 