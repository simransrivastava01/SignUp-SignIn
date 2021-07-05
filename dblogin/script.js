function login(ev) {
    ev.preventDefault();
    var email = ev.target["txt_umail"].value;
    var pwd = ev.target["txt_upass"].value;

    var email = ev.target["txt_umail"].value;
    var pwd = ev.target["txt_upass"].value;

    var pwdRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var errors = [];
    if (!email) {
        alert("Please enter your user email id");
    } else if (!emailRegex.test(email)) {
        alert("Invalid email");
    }
    if (!pwd) {
        alert("Please enter Password");
    } else if (!pwdRegex.test(pwd)) {
        alert("Invalid password");
    }

    if (errors.length) {
        console.log(errors)
        return;
    }
    if (!errors.length) {
        $.ajax({
            url: "login.php",
            type: "post",
            data: { txt_umail: email, txt_upass: pwd },
            success: function (response) {
                if (response == 'logged in') {
                    alert("Logged in Successfully")
                    window.location = "home.php";
                } else {
                    alert("Invalid Password/ Username")
                }
            },
            errors: function (response) {
                console.log(response)
                alert("Some error occured")
            }
        });
    }
}

function signup(ev) {
    ev.preventDefault();

    var email = ev.target["txt_umail"].value;
    var pwd = ev.target["txt_upass"].value;
    var uname = ev.target["txt_uname"].value;

    var pwdRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var usernameRegex = /^[A-Za-z]+$/;
    var emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var errors = [];
    if (!email) {
        errors.push("Please enter your user email id");
    } else if (!emailRegex.test(email)) {
        errors.push("Invalid email");
        alert("Invalid email");
    }
    if (!pwd) {
        alert("Please enter Password");
    } else if (!pwdRegex.test(pwd)) {
        alert("Invalid password");
    }
    if (!uname) {
        alert("Please enter username");
    } else if (!usernameRegex.test(uname)) {
        alert("Invalid username");
    }

    if (errors.length) {
        console.log(errors)
        return;
    }
    debugger
    if (!errors.length) {
        $.ajax({
            url: "Sign-Up.php",
            type: "post",
            data: { txt_umail: email, txt_upass: pwd, txt_uname: uname },
            success: function (response) {
                if (response == 'registered') {
                    alert("Registered Successfully")
                    window.location = "index.html";
                } else {
                    alert("Invalid Password/ Username or User Already exist")
                }
            },
            errors: function (response) {
                console.log(response)
                alert("Some error occured")
            }
        });
    }
}
