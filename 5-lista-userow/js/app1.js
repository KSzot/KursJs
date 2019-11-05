/*
Przy wysyłce formularza dodaj do listy nowego użytkownika. Niech formularz nie przeładowuje strony.

Postaraj się nie podpinać zdarzenia click dla button:submit, a podpiąć się pod zdarzenie submit dla formularza.

Po kliknięciu na przycisk usuwania (kosz na śmieci) usuń danego użytkownika z listy
*/

document.addEventListener("DOMContentLoaded", function()
{
	const addBtn = document.querySelector(".form .btn"); 
	const list = document.querySelector(".user-list");
	addBtn.addEventListener("click", checkValue);	
	list.addEventListener("click", function(e)
	{
		if(e.target.classList.contains("user-delete"))
		{
			let ele = e.target.parentElement;
			ele.parentElement.removeChild(ele);
		}
	});
	
	
	/*[...document.getElementsByClassName("btn user-delete")].forEach(function(el)
	{
		el.addEventListener("click", function(e)
		{
			let ele = e.target.parentElement;
			ele.parentElement.removeChild(ele);
		});
	});
	*/
	
	/*document.querySelectorAll(".btn.user-delete").forEach(function(el)
	{
		el.addEventListener("click", destroyButton);
	});
	*/
});

function checkValue(e)
{
	e.preventDefault();
	//Add value from users
	const addName = document.getElementById("name").value; 
	const addPhone = document.getElementById("phone").value; 
	if(onlyLetters(addName) && onlyNumbers(addPhone) && addPhone.length == "9") // check value 
	{
		addUser(addName,addPhone);
	}
	else
	{
		alert("Nie wprowadzono danych!! Imie tylko litery, nr telefonu tylko liczby.");
	}
	clearValue();
}
function clearValue(nameValue,phoneValue) // Clear input value
{
	document.getElementById("name").value = "";
	document.getElementById("phone").value = "";
}
function onlyNumbers( str ) { // Regular Expression check Numbers
    let rgularExp = /^[0-9]+$/;
    let expMatch = rgularExp.test(str);

    return expMatch;
}
function onlyLetters( str ) { // Regular Exression check Letters
    let rgularExp = /^[a-zA-Z\s]*$/;
    let expMatch = rgularExp.test(str);

    return expMatch;
}

function addUser(addName, addPhone)
{
		addPhone = addPhone.replace(/(\d{3})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
		//creating form user in html DOM and adding classes
		const container = document.querySelector(".user-list");
		const createEleLi = document.createElement("li");
		createEleLi.classList.add("user");
		const createUserDiv = document.createElement("div");
		createUserDiv.classList.add("user-data");
		const createUserDivName = document.createElement("div");
		createUserDivName.classList.add("user-name");
		const createUserDivPhone = document.createElement("div");
		createUserDivPhone.classList.add("user-phone");
		const createUserButton = document.createElement("button");
		createUserButton.classList.add("btn");
		createUserButton.classList.add("user-delete");
		//Add value to div
		createUserDivName.appendChild(document.createTextNode(addName));
		createUserDivPhone.appendChild(document.createTextNode(addPhone));
		createUserDiv.appendChild(createUserDivName);
		createUserDiv.appendChild(createUserDivPhone);
		createEleLi.appendChild(createUserDiv);
		createEleLi.appendChild(createUserButton);
		container.appendChild(createEleLi);
}
function destroyButton()
{
	let ele = this.parentElement;
	ele.parentElement.removeChild(ele);
}
