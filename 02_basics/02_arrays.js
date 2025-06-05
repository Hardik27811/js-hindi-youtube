const marvelHeroes=["thor","spiderman","hulk"]

const dcHeroes=["batman","flash","superman"]



//++push (non-primitive storage)

//marvelHeroes.push(dcHeroes)

//console.log(marvelHeroes); //[ 'thor', 'spiderman', 'hulk', [ 'batman', 'flash', 'superman' ] ]

//console.log(marvelHeroes[3][0]); //batman



//++concat (primitive storage)

const allHeroes=marvelHeroes.concat(dcHeroes)

//console.log(allHeroes); //[ 'thor', 'spiderman', 'hulk', 'batman', 'flash', 'superman' ]


//+++spread

const allnheros=[...marvelHeroes,...dcHeroes]
//console.log(allnheros); //[ 'thor', 'spiderman', 'hulk', 'batman', 'flash', 'superman' ]

//++flat

const arr1=[1,2,3,[4,5,6],7,[2,3,[4,5,6]]]
const narr1=arr1.flat(Infinity)
//console.log(narr1); //[1,2,3,4,5,6,7,2,3,4,5,6]


//
// console.log(Array.isArray("Hardik")); //false
// console.log(Array.from("hardik")); //[ 'h', 'a', 'r', 'd', 'i', 'k' ]
// console.log(Array.from({name: "Hardik"})); //[]. empty cos need to specify key or value

//
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]
const fscore=[...score1,...score2,...score3]
console.log(fscore);//TypeError: score1 is not iterable













