document.addEventListener("DOMContentLoaded", function()
{
	let counter = 1;
	const addBtn = document.querySelector("#add");
	const mainList = document.querySelector(".list");
	addBtn.addEventListener("click", function()
	{
		counter = addNewDiv(counter);
	});
	mainList.addEventListener("click", function(e)
	{
		deleteDiv(e);
		cloneDiv(e);
	});
});

function cloneDiv(e)
{
	if(e.target.classList.contains("clone"))
	{
		let ele = e.target.parentNode;
		let tmp = ele.cloneNode(true);
		ele.parentNode.appendChild(tmp);
	}
}

function deleteDiv(e)
{
	if(e.target.classList.contains("delete"))
	{
		let ele = e.target.parentNode;
		ele.parentNode.removeChild(ele);
	}
}

	function addNewDiv(tmp)
	{
	tmp++;
	const list = document.querySelector(".list");
	const el = document.createElement("div");
	el.classList.add("element");
	const divHeader = document.createElement("h3");
	divHeader.classList.add("element-title");
	divHeader.innerText = "Element numer ";
	const divHeaderSpan = document.createElement("span");
	divHeaderSpan.innerText = tmp;
	
	divHeader.appendChild(divHeaderSpan);
	
	const divButtonClo = document.createElement("button");
	divButtonClo.classList.add("clone");
	divButtonClo.innerText = "Clone";
	
	const divButtonDel = document.createElement("button");
	divButtonDel.classList.add("delete");
	divButtonDel.innerText = "Delete";
	
	el.appendChild(divHeader);
	el.appendChild(divButtonClo);
	el.appendChild(divButtonDel);
	
	list.appendChild(el);
	return tmp;
}