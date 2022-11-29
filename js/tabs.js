export let renderTabs = () => {

    let tabs = document.querySelectorAll(".tabs,.tabs-admin")
    let contents = document.querySelectorAll(".tab-contents,.tab-contents-admin")

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(tab => {
                tab.classList.remove("active")
            });

            tab.classList.add("active")

            contents.forEach(content => {

                if(tab.dataset.tab == content.dataset.tab) {
                    content.classList.add("active")
                }
                else{
                    content.classList.remove("active")
                }
            });
        });

    });
}