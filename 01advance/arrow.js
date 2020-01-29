// const sayHello = function(name){
//     return `Hello ${name} !`
// }
// console.log(sayHello('Sammy'));


//const sayHello = (name) => `Hello ${name} !`

//console.log(sayHello('Sammy'));

const todos = [
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

// using arrow and filter function to return object based on condition
const tinsDone = todos.filter((todo) => todo.isDone == false)

console.log(todos.title(tinsDone));
