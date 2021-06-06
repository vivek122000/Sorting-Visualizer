async function merge(ele,low,mid,high){
    const n1=mid-low+1;
    const n2=high-mid;
    let left=new Array(n1);
    let right=new Array(n2);
    for(let i=0;i<n1;i++)
    {
        await waitforme(delay);
        left[i]=ele[low+i].style.height;
        ele[low+i].style.background='orange';
    }
    for(let i=0;i<n2;i++)
    {
        await waitforme(delay);
        right[i]=ele[mid+i+1].style.height;
        ele[mid+i+1].style.background='yellow';
    }
    await waitforme(delay);
    let i=0,j=0,k=low;
    while(i<n1 && j<n2){
        await waitforme(delay);
        if((n1+n2)===ele.length)
        {
            ele[k].style.background='green';
        }
        else
        {
            ele[k].style.background='lightgreen';
        }
        if(parseInt(left[i])<=parseInt(right[j]))
        {
            ele[k].style.height=left[i];
            i++;
            k++;
        }
        else
        {
            ele[k].style.height=right[j];
            k++;
            j++;
        }
    }

    while(i<n1)
    {
        await waitforme(delay);
        if((n1+n2)===ele.length)
        {
            ele[k].style.background='green';
        }
        else
        {
            ele[k].style.background='lightgreen';
        }
        ele[k].style.height=left[i];
        k++;
        i++;
    }
    while(j<n2)
    {
        await waitforme(delay);
        if((n1+n2) === ele.length)
        {
            ele[k].style.background='green';
        }
        else
        {
            ele[k].style.background='lightgreen';
        }
        ele[k].style.height=right[j];
        k++;
        j++;
    }
}

async function mergeSort(ele,low,high)
{
    if(low<high)
    {
        const mid=low+Math.floor((high-low)/2);
        await mergeSort(ele,low,mid);
        await mergeSort(ele,mid+1,high);
        await merge(ele,low,mid,high);
    }
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let low = 0;
    let high = parseInt(ele.length) - 1;
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, low, high);
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});

