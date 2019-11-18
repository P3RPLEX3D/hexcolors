
document.getElementById('demo').addEventListener('click', mybtn);
function mybtn() {
	
let x = '#';
let y = Math.floor(Math.random() * 800000) + 100000;
	let z = x + y;
	document.getElementById('demo').style.backgroundColor = z;
	document.getElementById('demo').innerHTML = z;
console.log(z)
	
}
