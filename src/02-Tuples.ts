const prices: (number | string)[] = [1000, 2000, "three thousand"];

prices.push(3000);
prices.push("four thousand");

console.log(prices);

let user: [string, number, boolean];

user = ["John", 20, true];

// en este caso, si ponemos un tercer elemento, nos da un error
// user = ["John", 20, true, "admin"];

// si ponemos un tercer elemento, pero es de otro tipo, nos da un error
// user = ["John", 20, "admin"];

const [username, age] = user;

console.log(username, age); 

//en este caso, como la constante username como es una dupla solo toma los dos primeros elementos





