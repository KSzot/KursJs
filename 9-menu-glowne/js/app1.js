document.addEventListener('DOMContentLoaded', function() {

    function expandElementTransitionEnd() {
        //this === LI któremu poniżej dodałem event transitionend
        this.removeEventListener("transitionend", expandElementTransitionEnd)
        const link = this.querySelector('a');
        console.log(this.getAttribute('href'))

        const btn = document.createElement('button');
        btn.classList.add('close');
        btn.innerText = "Zamknij";
        this.appendChild(btn);

        btn.addEventListener("click", function() {
            for (const el of li) {
                el.classList.remove('expand')
                el.classList.remove('collapsed')
            }
            this.remove();
        })
    }

    const menu = document.querySelector("#menu");
    menu.classList.add('menu');

    const links = menu.querySelectorAll('a');
    const li = menu.querySelectorAll('li');

    for (const el of li) {
        el.addEventListener("mouseenter", function() {
            console.log(this);
            for (const el of li) {
                el.classList.remove("active");
            }
            this.classList.add("active");
        });
    }

    for (const el of links) {
        el.addEventListener("click", function(e) {
            e.preventDefault();
            for (const el of li) {
                el.classList.add("collapsed");
            }
            this.parentElement.classList.remove('collapsed');
            this.parentElement.classList.add("expand");
            this.parentElement.addEventListener("transitionend", expandElementTransitionEnd);

        });
    }

});
