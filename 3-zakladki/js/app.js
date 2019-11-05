document.addEventListener("DOMContentLoaded", function()
{
	document.querySelectorAll(".tab-el").forEach((el) => // el jest wskazuje 0-2 na class
	{
		el.addEventListener("click", function()
		{
			
			removeClass();
			this.classList.add("tab-el-active");
			let tmp = this.querySelectorAll("a");
			let tmp1 = tmp[0].getAttribute('href');
			tmp1 = tmp1.substring(1);
			document.getElementById(tmp1).classList.add("tab-content-active");
		});
	});
});
function removeClass()
{
	document.querySelectorAll(".tab-el-active").forEach((el) =>
	{
			el.classList.remove("tab-el-active");
			let tmp = el.querySelectorAll("a");
			let tmp1 = tmp[0].getAttribute('href');
			tmp1 = tmp1.substring(1);
			//console.log(tmp);
			document.getElementById(tmp1).classList.remove("tab-content-active");
	});
};
