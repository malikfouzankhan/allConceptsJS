// Control statements
    // Loop statements
/*
There are 3 types of loops
    1. for
    2. while
    3. do...while
These 2 can pass control as per requirements
    1. break
    2. continue
*/

// for loop
for(let i = 0;i < 10;i++)
{
    console.log(i);
}

// while loop
let j = 0;
while(j < 10)
{
    console.log(j);
    j++;
}

// do...while
let k = 0;
do
{
    console.log(k);
    k++;
}while(k < 10)

// break (used to bring control out of loop)
for(let i = 1;i <= 10;i++)
{
    if(i == 5)
    {
        break;
    }
    console.log(i);
}

// continue (used to skip an iteration of loop)
for(let i = 0;i <= 10;i++)
{
    if(i == 5)
    {
        continue;
    }
    console.log(i);
}