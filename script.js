//your JS code here. If required.
document.addEventListener("DOMContentLoaded", ()=>{
	let body = document.body;
	if (body.childNodes.length !== 1) {
		// const para = document.createElement("p");
		// para.innerText = "DOM load success";
		document.write("DOM load success");
	}
})