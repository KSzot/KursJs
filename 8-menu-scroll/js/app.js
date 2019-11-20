document.addEventListener("DOMContentLoaded",function()
{
    //Przelaczanie klasy -> switch class
    const element = document.querySelectorAll(".nav-link");
    
    for(const ele of element)
    {
        ele.addEventListener("click",function(e)
        {
            e.preventDefault();
            const current = document.querySelector(".nav-el-active");
            current.classList.remove("nav-el-active");
            this.classList.add("nav-el-active");
            const href = this.getAttribute("href");
            const targetEl = document.getElementById(href.substr(1));
            //console.log(targetEl);
            //let tmp1 = document.querySelector(tmp);
            //console.log(tmp1);
            targetEl.scrollIntoView({behavior: "smooth"});
        });
    }

});