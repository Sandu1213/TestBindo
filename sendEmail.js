
var sendEmail = require('./testemail');
const config_info = require('./config.json');

var fs = require('fs');
var context = fs.readFileSync(config_info.emailconfigInfo.html,'utf8')
if(context.indexOf("Error") != -1)
{
  var subject = '<B>[Failed] test result is failed!please check! </B>';
  sendEmail(config_info.emailconfigInfo.from,config_info.emailconfigInfo.to,subject, context)
  console.log("test result is failed")
}
else
{  
  var subject = '<B>[Success] all testcases is pass!please check!</B> ';
  sendEmail(config_info.emailconfigInfo.from,config_info.emailconfigInfo.to,subject, context)
  console.log("test result is ok")
}



