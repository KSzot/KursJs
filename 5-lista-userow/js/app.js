document.addEventListener("DOMContentLoaded", function()
{
	let hoverBtn = document.querySelector("#name");
	let hoverBtnPhone = document.querySelector("#phone");
	
	hoverBtnPhone.addEventListener("mousemove", function(e)
	{
		let that = this;
		mouseMoveDetec(that, e);
		hoverBtnPhone.setAttribute("title", "Fill this field. Only numbers");
	});
	
	hoverBtn.addEventListener('mousemove', function(e) {
		let that = this;
		mouseMoveDetec(that, e);
		hoverBtn.setAttribute("title","Fill this field. Only letters.");
	});

});

function mouseMoveDetec(that, e)
{
	const rect = that.getBoundingClientRect();
    const x = e.pageX - (rect.left + window.scrollX);
    const y = e.pageY - (rect.top + window.scrollY);
}