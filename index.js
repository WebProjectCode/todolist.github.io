var data = document.getElementById('textcontent');
var btn = document.getElementById('btn');
var content = document.getElementById('content');
btn.addEventListener('click', function(){
    var para = document.createElement('p');
    content.appendChild(para);
    para.classList.add('style');
    para.innerText = data.value;
    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener('dblclick', function(){
        content.removeChild(para);
    })
});