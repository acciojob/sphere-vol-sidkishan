function volume_sphere() {
    //Write your code here
  let r = document.getElementById("radius");
	let vol  = r*r;
	document.getElementById("volume").innerText() = vol;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
