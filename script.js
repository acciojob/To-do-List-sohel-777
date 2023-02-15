//your code here
function addToList() {
	//alert("aa");
	var input = document.querySelector("input").value;
	if(input){
		var li=document.createElement("li");
		li.textContent=input;
		document.querySelector("ol").appendChild(li);
		document.querySelector("input").value = "";
	}
}
document.querySelector("button").addEventListener('click', addToList);
