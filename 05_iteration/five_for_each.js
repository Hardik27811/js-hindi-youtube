// for rach

const num=[1,2,3,4,5]
num.forEach(function(item){
    // console.log(item);
    /*
1
2
3
4
5
    */
    
})

num.forEach((key)=>{
// console.log(key);
/*
1
2
3
4
5
*/
})

function printMe(item){
    console.log(item);
}
/*
1
2
3
4
5
*/
num.forEach(printMe)


// objects inside an array

const coding=[
    {
        name:'joker',
        role:'comedy'
    },
     {
        name:'king',
        role:'rule'
    },
     {
        name:'queen',
        role:'serving'
    }
]
coding.forEach((item)=>{
    console.log(item,item.name, item.role);
/*
{ name: 'joker', role: 'comedy' } joker comedy
{ name: 'king', role: 'rule' } king rule
{ name: 'queen', role: 'serving' } queen serving
*/
    
})