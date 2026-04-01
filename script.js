const form = document.getElementById('loginform');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "leta" && password === "1234") {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            window.location.href = "loginulang.html";
        }
    
});