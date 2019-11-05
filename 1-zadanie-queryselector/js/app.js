//Zad1
let zad1 = document.querySelectorAll(".first-attempt");
for(let i=0; i<zad1.length;i++)
{
    zad1[i].classList.add("active");
}

//Zad2
let zad2 = document.querySelectorAll(".el:not(.first-attempt):not(.last-attempt):not(.st1):not(.del):not(.hijack):not(.hack)")
for(let j=0; j<zad2.length;j++)
{
	zad2[j].setAttribute("data-el-active","");
}
//Zad3
let zad3 = document.querySelectorAll(".el.hack")
zad3.forEach((x) => {	
	x.setAttribute("title","hacking");
});

//Zad4
let zad4 = document.querySelectorAll(".hijack")
zad4.forEach((el) => {
	el.removeAttribute("title");
});

//Zad 5
let zad5 = document.querySelectorAll(".st1.st2");
zad5.forEach((el) =>{

	el.style.color = "red";
	el.style.fontSize = "15px";
});

//Zad6
let zad6 = document.querySelectorAll(".del");

for(let i = 0; i< zad6.length; i++)
{
    zad6[i].setAttribute("data-hack-active","");
    zad6[i].removeAttribute("data-hack-inactive");
}
//Zad 7
let zad7 = document.querySelectorAll(".last-attempt");
zad7.forEach((el) => 
{
	el.style.visibility = "hidden";
});