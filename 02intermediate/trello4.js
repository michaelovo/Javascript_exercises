//Searching from arrays of objects

const myTodo = [
    "Buy rice",
    "Code",
    "Photoshop",
    "Listen to Music",
    "Play football"
];

//console.log(myTodo.indexOf('Code'));
//console.log(myTodo[myTodo.indexOf('Code')]);

// arrays with objects

const newTodo = [
    {
        title: 'Write codes',
        isDone: false,
    }
    , {
        title: 'Photoshop',
        isDone: false,
    }, {
        title: 'Play football',
        isDone: true,
    }
]

// const index = newTodo.findIndex(function(todo, index){
//     return todo.title === 'Photoshop'
// })
// console.log(index);


// method 1: how to redurn index of array object
// const findTodo = function(newTodo, title){
//     const index = newTodo.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return newTodo[index];
// }
// let result = findTodo(newTodo,'PhoToshop')
// console.log(result);


// method 2: how to redurn index of array object
const findTodo = function(newTodo, title){
    const index = newTodo.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return index;
}
let result = findTodo(newTodo,'PhoToshop')
console.log(result);



