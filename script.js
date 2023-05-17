function volume_sphere() {
    //Write your code here
  let r = document.getElementById("radius");
	return r*r;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
