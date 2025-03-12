let movies = [
    ["Anora", "The Brutalist", "A Complete Unknown"],
    ["Conclave", "Dune: Part Two", "I'm Still Here"],
    ["Nickel Boys", "The Substance", "Wicked"]
];

console.log(movies[0][0], movies[0][1], movies[0][2], movies[1][0], movies[1][1], movies[1][2], movies[2][0], movies[2][1], movies[2][2], "\n");

for (let row = 0; row <= 2; row++) {
    for (let item = 0; item <= 2; item++) {
        console.log(movies[row][item]);
    };
};
console.log("\n")

let shelf = 1;
for (i = 0; i <=2; i++) {
    console.log(movies[shelf][i]);
};