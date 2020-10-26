// Created by Asilbek Normuminov, in 26.10.2020
// Sum of object values (salaries).

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}


function sumSalaries(salaries) {

    var arrayOfSalaries = Object.values(salaries);
    var x;
    var summa = 0;
    for(x of arrayOfSalaries) {
        var i = 0;
        var summa = summa + x;
        i++;
     }
     return summa;
    
}

alert(sumSalaries(salaries)); // 650
