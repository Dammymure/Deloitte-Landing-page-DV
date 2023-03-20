const trigger = document.querySelector(".services");
const content = document.querySelector(".drop-down-container")
const innerContent = document.querySelector(".drop-downs")

// to drop down content
trigger.addEventListener('mouseover', function(){

    content.classList.toggle('show')
});
trigger.addEventListener('mouseout', function(){

    content.classList.remove('show')
});

// to hover within content
innerContent.addEventListener('mouseenter', function(){

    content.classList.add('show')
});
innerContent.addEventListener('mouseleave', function(){

    content.classList.remove('show')
});


// DROP 2
const triggerInd = document.querySelector(".industries");
const contentInd = document.querySelector(".drop-down-container-2")
const innerContentTwo = document.querySelector(".drop-downs-2")

triggerInd.addEventListener('mouseover', function(){
    // const visibility = content.getAttribute("data-visible")

    // console.log(visibility)
    contentInd.classList.toggle('show')
});
triggerInd.addEventListener('mouseout', function(){
    // const visibility = content.getAttribute("data-visible")

    // console.log(visibility)
    contentInd.classList.remove('show')
});

// to hover within content

innerContentTwo.addEventListener('mouseenter', function(){

    contentInd.classList.add('show')
});
innerContentTwo.addEventListener('mouseleave', function(){

    contentInd.classList.remove('show')
});



// Drop 3
const triggerInst = document.querySelector(".insights");
const contentInst = document.querySelector(".drop-down-container-3")
const innerContentThree = document.querySelector(".drop-downs-3")

triggerInst.addEventListener('mouseover', function(){
    // const visibility = content.getAttribute("data-visible")

    // console.log(visibility)
    contentInst.classList.toggle('show')
});
triggerInst.addEventListener('mouseout', function(){
    // const visibility = content.getAttribute("data-visible")

    // console.log(visibility)
    contentInst.classList.remove('show')
});

// to hover within content

innerContentThree.addEventListener('mouseenter', function(){

    contentInst.classList.add('show')
});
innerContentThree.addEventListener('mouseleave', function(){

    contentInst.classList.remove('show')
});




const triggerCar = document.querySelector(".career");
const contentCar = document.querySelector(".drop-down-container-4")
const innerContentFour = document.querySelector(".drop-downs-4")

triggerCar.addEventListener('mouseover', function(){
    // const visibility = content.getAttribute("data-visible")

    // console.log(visibility)
    contentCar.classList.toggle('show')
});
triggerCar.addEventListener('mouseout', function(){
    // const visibility = content.getAttribute("data-visible")

    // console.log(visibility)
    contentCar.classList.remove('show')
});

// to hover within content

innerContentFour.addEventListener('mouseenter', function(){

    contentCar.classList.add('show')
});
innerContentFour.addEventListener('mouseleave', function(){

    contentCar.classList.remove('show')
});
// const trigger = document.querySelector(".services");
// const content = document.querySelector(".drop-down-container")

// content.addEventListener('mouseenter', function(){
//     // const visibility = content.getAttribute("data-visible")

//     // console.log(visibility)
//     content.classList.toggle('show')
// });
// content.addEventListener('mouseleave', function(){
//     // const visibility = content.getAttribute("data-visible")

//     // console.log(visibility)
//     content.classList.remove('show')
// });