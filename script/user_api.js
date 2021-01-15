function signUPApi(user)
{
    $.ajax({
        method:"POST",
        url: 'user/account',
        async:false,
        data: user,
        success: successCallback = (response)=>{
            console.log(response)
           
        },
        error: errorCallback = (response) =>{
            console.log("error")
        }

    });

    //location.reload();
}

function getAllUser(){
    let USER = []
    $.ajax({
       type:'GET',
       url:'/user/account',
       async: false,
       success:  getUser  =(response) =>{        
        
                                 USER = JSON.parse(response)
                                                                
                                },
        error:failureCall => {
                console.log('failureCall');
            } 

    })
    return USER
}


function signInApi(email)
{
    var logInuser=[]
    $.ajax({
        method:"GET",
        url: 'user/account/'+email,
        async:false,
        success:  getUser  =(response) =>{        
        
            logInuser = JSON.parse(response)
                                           
           },
        error:failureCall => {
        console.log('failureCall');
        } 

    });
    return logInuser;

    //location.reload();
}


function userLandingPageGenarate(userType){
    $.ajax({
        method:"GET",
        url: 'user/account/render/'+userType,
             
        success: successCallback = (response)=>{
            console.log('response')
           
        },
        error: errorCallback = (response) =>{
            console.log("error")
        }

    });
}


//........................
function chnagePAge()
{

    //console.log("test api: "+JSON.stringify(user))
    $.ajax({
        method:"GET",
        url: '/change',
        async:false,
        success: successCallback = (response)=>{
            console.log("success")
           
        },
        error: errorCallback = (response) =>{
            console.log("error")
        }

    });

   
}