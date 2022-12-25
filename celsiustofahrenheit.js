console.clear();

let input = prompt("Celsius: ");

let result = celsiusToFahrenheit(input);

console.log(result);

function celsiusToFahrenheit(x){
    return x * (9 / 5) + 32;

}
