//console.log("test script")
function creatAccount() {
    console.log("test script")
    var name = $("#upName").val()
    var email = $("#upEmail").val()
    var password = $("#upPassword").val()
    var confirmPassword = $("#upConfirmPassword").val()
    console.log(name + "," + password)
    if (password === confirmPassword) {
        console.log("pass if")
        var user = {
            name: $("#upName").val(),
            email: $("#upEmail").val(),
            password: $("#upPassword").val(),
            userType: $("#upUserType").val(),

        }
        //signUPApi(user);
        console.log("chnaged")
        let allUSER = getAllUser();
        console.log(allUSER)
        if (allUSER) {
            var flag = false;
            allUSER.forEach(element => {
                if (element.email === user.email) {
                    flag = true
                }

            });
            if (flag == false) {
                signUPApi(user);
            }


        }
        else {
            console.log("else ")
            signUPApi(user);
        }



    }
}


function signInButtonOnclick() {

    email = $("#inEmail").val()
    var user = signInApi(email)
    password = $("#inPassword").val()
    userType = $("#inUserType").val()

    if (user.password === password && user.userType === userType) {
        //alert("login success " + user._id)
        userLandingPageGenarate(userType.toLowerCase())
    }



}

