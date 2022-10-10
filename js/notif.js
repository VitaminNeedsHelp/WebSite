const button = document.querySelector("#button");

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notif = new Notification("Hello", {
                body: "This is a notification",
                data: {hello: "world"},
            })

            notif.addEventListener("close", e => {
                console.log(e);
            })
        }
    })
})