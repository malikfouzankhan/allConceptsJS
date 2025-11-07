// Recursion in JS
    // A function calls itself multiple times to divide the bigger problem into smaller ones and solve them using the base case.

function fact(n)
{
    if(n == 0 || n == 1)
    {
        return 1;
    }
    return n * fact(n-1)
}