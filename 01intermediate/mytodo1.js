    // A simple to do list

    const myTodo =[]
    myTodo.push('Get Indomie')
    myTodo.push('Light the gas')
    myTodo.push('Get water and pot on the gas')
    myTodo.push('Slice the veg and other nececessary items')

    myTodo.forEach(function(todo, index){
        //console.log(`How to prep my indomie no : ${index+1} ---${todo}`)
    })


    //using for to display todo list in reverse order
    console.log("How to prep my indomie\n");
    
    for (let index = myTodo.length-1; index >=0; index--) {
        //const element = array[index];
       console.log("No " + (index+1) + " : " + myTodo[index]);        
       
    }