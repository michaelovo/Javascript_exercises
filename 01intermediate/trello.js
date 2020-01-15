    // using forEach/for loops

    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] 


    // using forEach to display array values
    days.forEach(function(day,index){
       console.log(`${day} is day ${index+1}`)
    })

    // normal for loop
    for (let index = 0; index < months.length; index++) {
        const element = months[index];
        
    }
    // using revert for loop
    for (let index = months.length-1; index >=0; index--) {
        //const element = months[index];
       console.log(months[index]);        
    }