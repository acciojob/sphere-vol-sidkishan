function volume_sphere() {
    //Write your code here
  let r = document.getElementById("radius").value;
	let vol  = (4/3) * Math.PI * r*r*r;
	document.getElementById("volume").value = vol;
	return vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
