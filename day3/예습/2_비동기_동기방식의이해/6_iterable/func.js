const wrap  = document.getElementById('title');
let str = wrap.innerText;

console.log(str);
let className = 0;
wrap.innerText = '';
for(let i of str){
	className++;
	let newSpan = document.createElement('span');
	newSpan.innerText = i;
	newSpan.classList.add('str'+className);
	wrap.appendChild(newSpan);
}