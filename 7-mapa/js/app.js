document.addEventListener("DOMContentLoaded", function()
{

    const container = document.querySelector(".map");
    //1. add markers to map -> dodaje markery na mapie
    for(const city of cities)
    {
        const marker = document.createElement("a");
        marker.href = city.href;
        marker.classList.add("map-marker");
        marker.dataset.name = city.name;
        marker.dataset.population = city.population;
        marker.style.left = city.map_x + "px";
        marker.style.top = city.map_y + "px";
        marker.innerText = city.name;
        container.appendChild(marker);
    }
    //2. add Tooltip -> dodaje tooltip
    const tooltip = document.createElement("div");
    tooltip.classList.add("map-tooltip");
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);

    //3. catch markers -> zlap markery
    const markers = document.querySelectorAll(".map-marker");
    for (const marker of markers)
    {
        marker.addEventListener("mouseover", function(e)
        {
            tooltip.innerHTML = `
                <h2>${this.dataset.name}</h2>
                <div>Population: <strong>${this.dataset.population}</strong></div>
            `;
            tooltip.style.left = e.pageX + 30 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
            tooltip.style.display = ""; //jak ustawiamy złą wartość to weźmie to co w stylach
        });
    
    marker.addEventListener("mousemove",function(e)
    {
        tooltip.style.left = e.pageX + 30 + 'px';
        tooltip.style.top = e.pageY - 30 + 'px';
    });
    marker.addEventListener("mouseout",function()
    {
        tooltip.innerHTML = "";
        tooltip.style.display ="none";
    });
    }

    

});