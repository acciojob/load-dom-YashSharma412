//your JS code here. If required.
document.addEventListener("DOMContentLoaded", ()=>{
	let body = document.body;
	if (body.chilNodes.length === 0) {
		const para = document.createElement("p");
		para.innerText = "DOM load success";
		document.body.appendChild(para);
	}
})