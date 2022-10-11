window.addEventListener('load', () => {

    const button = document.querySelector('.glow-on-hover');

    button.addEventListener("click", () => {
        Notification.requestPermission().then(perm => {
            if (perm === "granted") {
                const notification = new Notification("Welcome, IT WORKED", {
                    body: Math.random(),
                    data: { hello: "world" },
                    icon: "/img/favicon.png",
                    
                });

                notification.addEventListener("show", e => {
                    console.log(e);
                });
            }
        });
    });
    let notification
    let interval
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            const leaveDate = new Date()
            interval = setInterval(() => {
                notification = new Notification("Come back please", {
                    body: `You have been gone for ${Math.round((new Date() - leaveDate) / 1000)} seconds`,
                    tag: "Come Back"
                })
            }, 100);
        } else {
            if (interval) clearInterval(interval)
            if (notification) notification.close()
        }
    });
});
