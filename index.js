const title1Node = document.querySelector('.js-title-1');
const title2Node = document.querySelector('.js-title-2');
const textNode = document.querySelector('.js-text');
const textApiNode = document.querySelector('.js-textApi');
const btnNode = document.querySelector('.js-button');
const containerNode = document.querySelector('.js-container');

let newText = 'Take a walk';

btnNode.addEventListener('click', function(){
    changeTitle();
    changeBcgr();
    getActivity ();
    changeText();
});

function changeTitle() {
    title1Node.classList.remove('visible');
    title2Node.classList.add('visible');
}

function changeBcgr() {
    containerNode.classList.add('container_2');
}


function getActivity () {
fetch('http://www.boredapi.com/api/activity/')
    .then(data => data.json())
    .then((res) => {  
    newText = res.activity;
})}

function changeText() {
    textNode.classList.add('hide');
    textApiNode.innerText = newText;
}
