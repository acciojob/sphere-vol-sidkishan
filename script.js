function volume_sphere() {
    //Write your code here
  let r = document.getElementById("radius").value;
	let vol  = r*r;
	document.getElementById("volume").value =vol;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
