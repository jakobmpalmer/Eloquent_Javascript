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
/*Expected Input: A string to have its b values
Expected Output: a 
Expected Behavior: */
function countBs(str) 
{
var count = 0;
    for(var i = 0; i < str.length; i++)
    {
        count = (str.charAt(i) == 'B') ? count++ : count = count;
    }
return count;
}
/*Expected Input: 
Expected Behavior:
Expected Output:
*/
function countChar(str, chr)
{
var count = 0;
    for(var i = 0; i < str.length; i++)
    {
        count = (str.charAt(i) == chr) ? count = count++ : count = count;
    }
return count;

}

/*Expected Input: 
Expected Behavior:
Expected Output:
*/
function countBsTwo(str)
{
var myBs = countChar(str, 'B');
return myBs;
}