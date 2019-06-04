console.log("helloWorld");

// 1. Minimum
/*Expected Input: Two integer numbers
Expected Output: the smaller of two integer values
Expected Behavior: compare the two integer values and return 
the smaller of the two using a ternary expression */
//function min(numOne, numTwo)
function min()
{
    var numOne = document.getElementById("numOneField").value;
    var numTwo = document.getElementById("numTwoField").value;
    var smallestNum = numOne < numTwo ? numOne : numTwo;
    return smallestNum;
}


// 2.  Recursion
/*Expected Input: 
Expected Output:
Expected Behavior: */
//function isEven(num)
function isEven()
{
    var num = document.getElementById("numOneField").value;
    var check = num % 2;
    if(check == 0)
    {
        result = true;
    } else if (check == 1)
    {
        result = false;
    }

    return result;
}

/*Expected Input: 
Expected Output:
Expected Behavior: */
function isEvenRecursive()
{


}

// 3. Bean Counting
/*Expected Input: A string to have its b values counted.
Expected Output: A number value expressing how many bs are in the given string.
Expected Behavior: This function searches the string evaluating the 
frequency that capital B appears in our given string.*/
function countBs(str) 
{
var count = 0;
    for(var i = 0; i < str.length; i++)
    {
        (str.charAt(i) == 'B') ? count++ : null;
    }
return count;
}
/*Expected Input: A string to search and a character to search for.
Expected Output: a number value of how many times our character appeared
in the given string.
Expected Behavior: This function searches the string evaluating the character
in question with a ternary expression. */
function countChar(str, chr)
{
var count = 0;
    for(var i = 0; i < str.length; i++)
    {
        (str.charAt(i) == chr) ? count++ : count = count; 
    }
return count;

}

/*Expected Input: A string to search.
Expected Output: The number of capital bs in the given string.
Expected Behavior: This function searches the given string using the
previously defined countChar function. */
function countBsTwo(str)
{
var myBs = countChar(str, 'B');
return myBs;
}