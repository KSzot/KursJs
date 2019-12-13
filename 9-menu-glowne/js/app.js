document.addEventListener("DOMContentLoaded", function()
{
    const menu = document.querySelector("#menu");
    menu.classList.add("menu");

    const elemLi = document.querySelectorAll("li");
    const elemA = document.querySelectorAll("a");
    for(const el of elemLi)
    {
        el.addEventListener("mouseover",function(e)
        {   
            for(const elem of elemLi)
            {
                elem.classList.remove("active");
            }
            this.classList.add("active");
        });
    }
    for(const el of elemA)
    {
        el.addEventListener("click",function(e)
        {
            e.preventDefault();
            for(const elem of elemLi)
            {
                elem.classList.add("collapsed");
            }
            this.parentElement.classList.remove('collapsed');
           this.parentElement.classList.add("expand");
           this.parentElement.addEventListener("transitionend", expandElementTransitionEnd);
        });
    }
    function expandElementTransitionEnd()
    {
        this.removeEventListener("transitionend", expandElementTransitionEnd);
        const btn = document.createElement("button");
        btn.classList.add("close");
        btn.innerText = "Zamknij";
        this.appendChild(btn);

        btn.addEventListener("click",function()
        {
            for(const elem of elemLi)
            {
                elem.classList.remove("expand");
                elem.classList.remove("collapsed");
            }
            this.remove();
        });
    }
});
