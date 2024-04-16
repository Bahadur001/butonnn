function batten() {
    const newcontent = document.getElementById('newcontent');
   const colors =  ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'cyan', 'magenta', 'lime', 'pink'];

const randomcolor = colors[Math.floor(Math.random() * colors.length)];
const newbatten = document.createElement('button');

newbatten.textContent = "Message 1";
newbatten.style.backgroundColor = randomcolor;
newbatten.className = 'button';
newbatten.onclick = function() {
    newcontent.removeChild(newbatten);

};
newcontent.appendChild(newbatten);
setTimeout(function() {
    newcontent.removeChild(newbatten);
}, 3000);


}