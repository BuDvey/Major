var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');


var conn = mysql.createConnection({
    host : 'w.rdc.sae.sina.com.cn',
    user : '0l50l3oo00',
    password : 'jxyz2ij2h4mxhwiw0k05h3lj35jz2ww03h044ihm',
    database : 'app_papicpot'
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/src'));


app.post('/post', (req,res) =>{
    console.log(body);

    var querystring = "insert into form1(name,gender,school,major,grade,academy,studentnumber,phone,QQ,School,Major,blur,offerhelp,wantgender) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var queryarray = [req.body.name, req.body.gender, req.body.school,req.body.grade,req.body.academy,req.body.studentnumber, req.body.phone, req.body.QQ, req.body['School[]'], req.body['Major[]'], req.body.blur, req.body.offerhelp, req.body['wantgender[]'], req.body.photo];

    conn.query(querystring, queryarray, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(result);
          res.send('1000');
          res.end();
            // res.sendFile(__dirname + '/web/load.html');
        }
    });
});

console.log("listening 5050...");
app.listen(5050);

//发送数据
var School={School:['s1','s3','s5']};
var Major={Major:['s2','s4','s6']};
var YourSchool={YourSchool:['YourSchool']};
var YourMajor={YourMajor:['YourMajor']};
var gender='gender';
var studentnumber= 'studentnumber';
var  phone='phone';
var  QQ='QQ';
var  academy='academy';
var  blur='blur';
var  offerhelp='blur';
var  wantgender='wantgender';
function test(name,gender,YourSchool,YourMajor,studentnumber,phone,QQ,academy,School,Major,blur,offerhelp,wantgender){
  $.ajax({
  type: "POST",
  url:"https://pairsys-1584407349297.appspot.com/submit",
  data:{
      name: '',
      gender: '',
      YourSchool:'[]',
      YourMajor:'[]',
      studentnumber: '',
      phone: '',
      QQ: '',
      academy:'',
      School:'[]',
      Major:'[]',
      blur:true,
      offerhelp:true,
      wantgender:'',
      },
      datatype:"json",
      success: function(msg){
         console("ok")
      }
  });
}

//实时预览图片
function showImg(input) {
  var file = input.files[0];
  var reader = new FileReader()
  // 图片读取成功回调函数
  reader.onload = function(e) {
      document.getElementById('upload').src=e.target.result
  }
  reader.readAsDataURL(file)
}

 //模糊匹配的弹窗
 function display_alert()
 {
 alert("开启模糊匹配会为参与者匹配到该专业所属学院下的相似专业，适用于对于自己想去专业不够清晰明确只想去某个学院的参与者和希望提高匹配率的参与者")
 }
 function display_alert1()
 {
 alert("恭喜！报名成功")
 }

  