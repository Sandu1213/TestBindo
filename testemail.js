 function sendMailMessage(from,to,subject,html,files,textfile,imagefile){
        var nodemailer = require('nodemailer');
        // var smtpTransport = require('nodemailer-smtp-transport');

        // //163邮件服务配置
        // var transport = nodemailer.createTransport(smtpTransport({
        //   host: "smtp.163.com", // 主机
        //   secureConnection: true, // 使用 SSL
        //   port: 465, // SMTP 端口
        //   auth: {
        //     user: "XXX", // 账号
        //     pass: "XXX" // 授权码
        //   }
        // }));

        //mailgun邮件服务配置
        var mailgun = require('nodemailer-mailgun-transport')
        var auth = {
             
             auth:{
                api_key:'key-b1ebfb84934e7140000dfa41d27e9184',
                domain:'bindo.com'
             }
        }
        
        var transport = nodemailer.createTransport(mailgun(auth));
        

        // 设置邮件内容
        var mailOptions = {
          from: from, 
          to: to,
          subject: subject, 
          // text:html,
          html: html,
          attachments:[  
            {  
              filename : 'mochawesome.html',  
              path: files  
            },  
            {  
              filename : 'assert.zip',  
              path: textfile 
            }
            // },
            // {  
            //   filename : 'screenimage.zip',  
            //   path: imagefile 
            // }   
          ]  
        }
         
        // 发送邮件
        transport.sendMail(mailOptions, function(error, response) {
          if (error) {
            console.error(error);
          } else {
            console.log(response);
          }
          transport.close(); // 如果没用，关闭连接池
        });

  }



module.exports = sendMailMessage;


