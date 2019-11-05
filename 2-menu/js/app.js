/*document.addEventListener("DOMContentLoaded", function()
{
	document.querySelectorAll(".nav-el").forEach((el) =>
	{
		el.addEventListener("click",function()
		{
			removeClass();
			this.classList.add("nav-el-active");
		});
	});
});

function removeClass()
{
	document.querySelectorAll(".nav-el-active").forEach((el) =>
	{
		el.classList.remove("nav-el-active");
	});
};*/

document.addEventListener("DOMContentLoaded", function()
{
    //let headers = document.querySelector(".nav");
    let active = document.querySelectorAll(".nav-el");
    for(let i = 0; i< active.length; i++)
    {
        active[i].addEventListener("click", function()
        {
            let current = document.querySelectorAll(".nav-el-active");
            current[0].classList.remove("nav-el-active");
            this.classList.add("nav-el-active");
        });
    }
})