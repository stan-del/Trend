
var msg=document.createElement('h5');
let boxes=document.querySelector('.boxes');
let form=document.querySelector('#form');
let itemList=document.querySelector('#itemList');
let input=document.querySelector('.text');

document.querySelector('#btn').addEventListener('click',onclick);
function onclick(e){
boxes.className='hide-on-small-only'
itemList.style.display='grid'

}

form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();



    
 let li=document.createElement('li');
 li.textContent=input.value;

 li.className='collection-item avatar'
 li.appendChild(document.createElement('i')).className='material-icons blue circle'
let div=document.createElement('div');
div.className='secondary-content btn red'
div.appendChild(document.createTextNode('X'));
li.appendChild(div);

itemList.appendChild(li);

let count=[1,2,3];

if(input.value==='' || li>count.length){
msg.textContent='Please Enter all Fields!'
msg.className='red white-text'
msg.style.margin='auto'
msg.style.padding='1rem'
itemList.insertBefore(msg, form);
setTimeout(() => {
  msg.remove();  
}, 2000);
li.remove();


}
else{

    msg.textContent='Successfully Added'
    msg.className='green white-text'
    msg.style.margin='auto'
    msg.style.padding='1rem'
    itemList.insertBefore(msg, form);
    setTimeout(() => {
      msg.remove();  
    }, 2000);
    input.value=''


}


div.addEventListener('click', button);
function button(e){
    msg.textContent='Successfully removed'
    msg.className='green white-text'
    msg.style.margin='auto'
    msg.style.padding='1rem'
    itemList.insertBefore(msg, form);
    setTimeout(() => {
      msg.remove();  
    }, 2000);

li.remove();

}




}




  