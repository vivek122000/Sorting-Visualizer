async function selection(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++)
    {
        let min = ele[i];
        ele[i].style.background='blue';
        for(let j = i+1; j < ele.length; j++)
        {
            ele[j].style.background='orange';
            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(min.style.height))
            {
                if(min != ele[i])
                {
                    min.style.background='cyan';
                }
                min = ele[j];
            }
            else
            {
                ele[j].style.background='cyan';
            }
        }
        await waitforme(delay);
        swap(ele[i], min);
        min.style.background='cyan';
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});