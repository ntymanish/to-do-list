// creating 'close' button and appending it to each list item 
var mylist= document.getElementsByTagName('li');
for(var i=0; i<mylist.length; i++){
    var span= document.createElement('span');
    var text= document.createTextNode('\u00D7');
    span.appendChild(text);
    span.className='close';
    mylist[i].appendChild(span);
}
// click on a close button to hide the current list item
var close= document.getElementsByClassName('close');
for(var i=0; i<close.length; i++){
  close[i].addEventListener('click', function(){
    var div= this.parentElement;
    console.log(div)
    div.style.display='none';
  })
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newelement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myul").appendChild(li);
    }
    document.getElementById("myinput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
