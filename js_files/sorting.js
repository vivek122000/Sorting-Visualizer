//Utility function to swap two bars by exchanging their heights
function swap(element1,element2){
    let temp=element1.style.height;
    element1.style.height=element2.style.height;
    element2.style.height=temp;
}

//Disable sorting buttons while a sorting is being performed
function disableSortingBtns(){
    document.getElementsByClassName("bubbleSort")[0].disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

//Enable the sorting buttons after the sorting operation is finished
function enableSortingBtns(){
    document.getElementsByClassName("bubbleSort")[0].disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

//disable the slider to change the size of array during sorting
function disableSizeSlider(){
    document.getElementById("sizeSlider").disabled = true;
}

//Enable the slider to change the size of array after sorting is finished
function enableSizeSlider(){
    document.querySelector("#sizeSlider").disabled = false;
}

//disable the button to generate new array during sorting
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

//enable the button to generate new array after sorting operation is finished
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

//Used in async functions to display animations of sorting,takes input paramenter in miliseconds.
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

//selecting the size slider using dom
let arraySize=document.querySelector('#sizeSlider');

arraySize.addEventListener('input',()=>{
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

//Default input for WaitForMe function
let delay=260;

//Selecting speed slider using dom
let delayElement = document.querySelector('#speedSlider');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

//create an array of random numbers
let array=[];

createNewArray();

//function to create new array and display them as bars(default value 60)
function createNewArray(noOfBars=60){

    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers ranging between 1 to 250
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);
    // select the div with id #bars element
   const bars = document.querySelector("#bars");

   // create multiple element div using loop and adding class 'bar col'
   for (let i = 0; i < noOfBars; i++) {
       const bar = document.createElement("div");
       bar.style.height = `${array[i]*2}px`;
       bar.classList.add('bar');
       bar.classList.add('flex-item');
       bar.classList.add(`barNo${i}`);
       bars.appendChild(bar);
   }
}

// Helper function to delete all the previous bars so that new bars can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding 'click' eventlistener to it
 const newArray=document.getElementsByClassName("newArray")[0];
 newArray.addEventListener("click",function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtns();
    enableSizeSlider();
    createNewArray(arraySize.value);
 });
