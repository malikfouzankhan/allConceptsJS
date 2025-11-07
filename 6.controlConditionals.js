// Control Statements
    // Conditional Statements
/*
There are several types of control conditional statements
    1. simple if
    2. if...else
    3. if...else if...else
    4. switch
*/

// simple if
    if(21 > 18)
    {
        console.log("VOTE");
    }

// if...else
    if(10 > 15)
    {
        console.log("NO");
    }
    else{
        console.log("YES");
    }

// if...else if...else
    let a = 24
    if(a > 21)
    {
        console.log("NICE");
    }
    else if(a > 18)
    {
        console.log("GOOD");
    }
    else
    {
        console.log("BAD");
    }

// switch
    let exp = 1;
    switch(exp)
    {
        case 1 : console.log("1st case");
                break;
        case 2 : console.log("2nd case");
                break;
        default : console.log("invalid case");
    }