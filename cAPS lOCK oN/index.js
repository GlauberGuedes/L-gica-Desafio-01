let nomeCorrigido = "";
    
if(input === input.toUpperCase()) {
    nomeCorrigido = input.toLowerCase();
} else if (input.slice(1) === input.slice(1).toUpperCase() && input[0] === input[0].toLowerCase()) {
    nomeCorrigido = input[0].toUpperCase() + input.slice(1).toLowerCase();
} else {
    nomeCorrigido = input;
}
console.log(nomeCorrigido);