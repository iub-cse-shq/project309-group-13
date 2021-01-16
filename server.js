var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
const fs = require('fs')
var myCss = {
    style : fs.readFileSync('public/styleE.css','utf8')
};
var myCss2 = {
    style : fs.readFileSync('public/inUp.css','utf8')
};

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var sever = http.Server(app)
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var dbURL = 'mongodb://localhost:27017/project'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', function (error) {
    console.log(error)
})
//app.use(express.static('model'))

app.use(express.static('public'))
var User = require('./model/user.model.js')
var Product = require('./model/product.model.js')
const path = require('path')
const HTML_DIR = path.join(__dirname)
app.use(express.static(HTML_DIR))



app.get('/', function (request, response) {
   // setTimeout('', 5000);
    response.render('signInUp.ejs',{ myCss: myCss2})
    console.log("index")
    // var direct = path.join(__dirname,'client/signInUp.html')
    // response.sendFile(direct)
})
app.get('/change', function (request, response) {
    console.log("change ")
    //change page to user type
    response.sendFile(__dirname+'/client/signInUp.html')
})


app.get('/user/account', function (request, response) {
    User.find({}, function(err,data){
        if(err){
            return response.status(400).json({
                error:'data is missing'
            })
        }
        console.log("get test")
        return response.status(200).json(JSON.stringify(data))
    })
})


app.get('/user/account/:email', function (request, response) {
    User.findOne({email:request.params.email}, function(err,data){
        if(err){
            return response.status(400).json({
                error:'data is missing'
            })
        }
     
        return response.status(200).json(JSON.stringify(data))
    })
})

/*app.get('/user/account/render', function (request, response) {
    User.find({}, function (err, data) {
        console.log(data)
        response.render('article.ejs',{
            article:data
        })
    })
    //console.log('pageName')
  //  var pageName = request.params.userType+"Dashboard.ejs";
    //console.log(pageName)
    // response.render('sellerDashboard.ejs', {
    //     product: {
    //         name:"kathl",
    //         price:"1200",
    //         description: "errrrrrrr",
    //         quantity: "120"           
           
    //     }
    //   })


    
//     Product.find({}, function (err, data) {        
//         response.render('article.ejs', {
//             article: data
//           })
        
//        console.log('pageName')
    
// })
})

// app.get('/user/account/render/:userType', function (request, response) {
//     Article.findById(request.params.id, function (err, data) {
//       response.render('article.ejs', {
//         article: data
//       })
//     })
//    })

// app.get('/signup', function (request, response) {
//     //var direct = path.join(__dirname,'client/signInUp.html')
//     console.log("test")
//     response.sendFile(__dirname+"/client/sellerDashboard.html")
// })
*/
app.get('/account/render/change', function (request, response) {
    
    console.log("get test")
   // Product.find({}, function (err, data) {
        
       // console.log("adel: "+ __dirname)
     response.render('sellerDashboard.ejs',{ myCss: myCss})
     
     // console.log("saif: "+ __dirname)
   // })
   })


app.post('/user/account', function (request, response) {
    NewUser = User(request.body)
    console.log("server account test")
    NewUser.save(function (err, data) {
        if (err) {

            return response.status(400).json({ error: "add request fails" })
        }

        return response.status(200).json({
            message: "successfully added"
        })

    })
})

sever.listen(process.env.PORT || 3000)
process.env.IP || 'localhost', function () {
    console.log("surver running")
}