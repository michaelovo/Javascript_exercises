    // using arrays([]) and Template literal(``)
    const superHeroes =['Jay JAy','Papilo','Sunday oliseh','Framk lampard']

     console.log(superHeroes);
     console.log(superHeroes[1]);
    console.log(superHeroes[superHeroes.length-1]); //last item on the array

    console.log(`we have ${superHeroes.length} heroes`);
    
    
    
    const numbers=['one','two','three','four','five','six']

    numbers[1]='Nigeria';
    console.log(numbers);


    start
    numbers.shift();// displays items from [1]
    console.log(`Shifted array(): ${numbers}\n`);

    numbers.unshift("james")
    console.log(`Unshifted array(): ${numbers}`);//insert from position[0]


    //middle
    numbers.splice(2,1,"nija");// from position [2] delete one item and insert 'nija'
    console.log(numbers);



    //end
    console.log("The element to be deleted is " +numbers.pop());
    numbers.push('seven');
    console.log(numbers);