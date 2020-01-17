    // using object, method, function and this keyword to create a to do list

    let myTodo = {
        day: 'Monday',
        booksToRead: 0,
        booksRead :0,

        // books to read
        booksUnread: function(todo){
            this.booksToRead = this.booksToRead + todo
        },

        // books read
        readBooks: function(todo){
            this.booksRead = this.booksRead + todo
        },
        // reset day
        resetday: function(){
            this.booksToRead = 0
            this.booksRead = 0
        },

        // get day activities summary
        daySummary: function(){
            let booksLeftUnread = this.booksToRead - this.booksRead 
            return `You have ${booksLeftUnread} books left unread on ${this.day}`
        },

    }

    // invoke the functions/method
    myTodo.booksUnread(5)
    myTodo.readBooks(2)
    console.log(myTodo.daySummary());
    
