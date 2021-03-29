let array1 = [12, 14, 32, 6, 2, 9, 8]

let array1Joined = array1.join(' + ')


function addAnotherList(array) {
    let index = 0
    let ul = document.getElementById("list");
    for (i = 0; i < array.length; i++) {
        let li = document.createElement("li");
        let children = ul.children.length + 1;
        li.setAttribute("id", "element" + children)
        li.appendChild(document.createTextNode(array1[i]));
        ul.appendChild(li)
    }
}
addAnotherList(array1)

let sum = 0;
function sumArray(array) {
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
let sumOfArray = sumArray(array1)


let olListOne = document.getElementsByTagName("p")[0]
olListOne.innerHTML = `This is the array, and how we get the numbers by adding them together: ${array1Joined} = ${sumOfArray} `;


let printSumOf = document.querySelectorAll("p")[1];
printSumOf.innerText = `So, the sum of the numbers in the array is ${sumOfArray}`















