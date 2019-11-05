document.addEventListener("DOMContentLoaded", function()
{
	let main = document.querySelectorAll(".car");

	for(let i =0,len = main.length; i < len; i++)
	{
		main[i].querySelector(".car-toggle-detail").addEventListener("click", function()
		{
			if(main[i].querySelector(".car-toggle-detail").innerText === "POKAŻ DETALE")
			{	
				showCars(main[i]);
			}else
			{
				hiddenCars(main[i]);
			}
		});
	};
});

function showCars(tmp)
{
	tmp.querySelector(".car-detail").style.display = "flex";
	tmp.classList.add("car-show-detail");
	tmp.querySelector(".car-toggle-detail").innerText = "SCHOWAJ DETALE";
	
};
function hiddenCars(tmp)
{
	tmp.querySelector(".car-detail").style.display = "none";
	tmp.classList.remove("car-show-detail");
	tmp.querySelector(".car-toggle-detail").innerText = "POKAŻ DETALE";
};

