export let renderAdminNotification = () => {

    document.addEventListener("message", (event =>{

        let notificationAdmin = document.querySelector(".notification-form-admin");
        let notificationTextAdmin = document.getElementById("notification-message-admin");
        
        notificationTextAdmin.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);
        notification.classList.add("active");

        setTimeout(() => {
            notificationAdmin.classList.remove("active");
            notificationAdmin.classList.remove(event.detail.type);
        }, 5000);
    }));
}
