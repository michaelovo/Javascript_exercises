    // Todo list using objects and function

    let myTodo = {
        day: 'Monday',
        booksToRead: 0,
        booksRead :0,
    }

    // books to read
    let booksUnread = function(todo, read){
        todo.booksToRead = todo.booksToRead + read
    }


    // books read
    let readBooks = function(todo, read){
        todo.booksRead = todo.booksRead + read
    }
    // reset day
    let resetday = function(todo){
        todo.booksToRead = 0
        todo.booksRead = 0
    }

    // get day activities summary
    let daySummary = function(todo){
       let booksLeftUnread = todo.booksToRead - todo.booksRead 

       return `You have ${booksLeftUnread} books left unread on ${todo.day}`
    }

    // invoke functions
    booksUnread(myTodo, 4)
    booksUnread(myTodo, 3)
    readBooks(myTodo,2)
    readBooks(myTodo,1)


    console.log(myTodo);    
    console.log("\n" + daySummary(myTodo))


