export let renderTabsLanguage = () => {

    let tabContainer = document.querySelector(".tabs-language");
    let tabs = document.querySelectorAll(".title-language");
    let contents = document.querySelectorAll(".language-contents");
    let save = document.querySelector(".img-save")

    if(tabContainer) {

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

        // Notification
        save.addEventListener("click", () => {

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));
        })

    }
}