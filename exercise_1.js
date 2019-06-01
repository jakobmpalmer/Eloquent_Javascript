// 1. Minimum
console.log("helloWorld");

//function min(numOne, numTwo)
function min()
{
    var numOne = document.getElementById("numOneField").value;
    var numTwo = document.getElementById("numTwoField").value;
    var smallestNum = numOne < numTwo ? numOne : numTwo;
    return smallestNum;
}


// 2.  Recursion
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

// 3. Bean Counting