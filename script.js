//your JS code here. If required.
document.addEventListener("domVontentLoaded", ()=>{
	const para = document.createElement("p");
	para.innerText = "DOM load success";
	document.body.appendChild(para);
})