var wd = require('macaca-wd');
require('./wd_extend_byid')(wd);
const domain = require('domain');
const d = domain.create();
const config_info = require('./config.json');

//配置wd服务端口及地址
var remoteConfig = {
  host: 'localhost',
  port: process.env.MACACA_SERVER_PORT || 3456
};

const driver = wd.promiseChainRemote(remoteConfig);
 
//通过domain来监控异常  
d.on('error',(err) =>{
   driver.errorRecord(err);
})

d.run(()=>{


    //测试场景及用例

    
    describe('bindo-pos testcases', function() {
      this.timeout(30 * 60 * 1000);

       driver.configureHttp({
        timeout: 600 * 1000
       });
       //选择设备及对应的App进行安装
        before(function() {
            console.log("======Install the lastest App======")
            return driver
              .init({ 
                platformName: config_info.TestAppInfo.platform,
                udid:process.env.UDID || config_info.TestAppInfo.device_udid , 
                reuse:3,  //0:启动并安装  ;1:卸载重装；2.覆盖重装；3.不重装App
                // bundleId:'com.bindo.bindo-pos-dev'
                app:config_info.TestAppInfo.app_path,
                proxyPort:process.env.PROXYPORT || config_info.TestAppInfo.proxyport
                   
              })
            
          });

        //退出会话
        after(function() {
            console.log("======quit======")
            return driver
              //.sleep(1000)
              .quit();
          });


      //进行登陆操作
      it('#0 should login success', function() {
              
         try{
          console.log("============= start testing======")
          var  time  = new Date().getTime()
          var filename = config_info.imageInfopath + '/login' + time +'.png'

          //点击Alert接受按钮
          console.log("============= accept alert and login======");
          return driver
                .sleep(6000)
                // .acceptAlert()
                // .waitForElementById('id_signinButton')
                // .click()
                // .sleep(3000)
                // .appLogin(config_info.UserInfo.username,config_info.UserInfo.password)
                // .takeScreenshot()
                // .saveScreenshot(filename);
          console.log("---login success!takeScreenhost is ok!")       

         }catch(err)
         {
          
          return driver
                 .errorRecord(err)

         }
           
      });

      //选择商店
      it('#1 select the store',function(){
        try{
        console.log('--------access the retail store ---!');
        return driver
              // .waitForElementsById('id_storeEntry')
              // .then(arr=>{
              //    // arr[0].click() 
              //    arr[3].click()
              // })
              .sleep(3*60*1000);
              
        }catch(err)
        {
          return driver
                 .errorRecord(err)

        }
        
      });
        
      
         
              // 创建商品
            it('#2 create the products',function(){
              
                 
              try{

              return driver
                     .openMemoryProfiler()           
                     .elementById('id_nav_side_bar_btn_20x20.png')
                     .click()
                     .elementsById('id_BPSidebarCell')  //id_itemTextLabel,后续扩展可能存在问题
                     .then(arr => {
                      arr[0].click()
                      })                 
                     .sleep(300)

                    // var products = config_info.products;                    
                    // return driver
                    // //        // .addProductsForRetail(products[0].name,products[0].alias,products[0].desc)
                    //        // .addProductsForRetail(products[1].name,products[1].alias,products[1].desc)
                    //        // .addProductsForRetail(products[2].name,products[2].alias,products[2].desc)
                    //        .addProductsForRestaurant(products[3].name,products[3].alias,products[3].desc)   
                    //        .addProductsForRestaurant(products[4].name,products[4].alias,products[4].desc)
                    //        .addProductsForRestaurant(products[5].name,products[5].alias,products[5].desc)
                         

                }catch(err){
                      return driver
                             .errorRecord(err)
                }
                    
            });
       
       
         var loopNum=1;
        
       while(loopNum <= config_info.loopNum){ 
            // 进行下单操作
            it('#3 order in register page---'+ loopNum +' times',function(){
              console.log('------order ------!!!');
              try{
                 
                 return driver
                        .orderDishForRestaurant(3)
                        
              }
              catch(err)
              {
               return driver
                      .errorRecord(err)

              }
              
            });
            // 增加charge
            it('#4 add the charge Num---'+ loopNum +' times',function(){
                  try{
                     return driver
                            .addCharge()
                  }catch(err){
                      return driver
                             .errorRecord(err)
                  }
                  
            })

            // 进行结账操作
            it('#5 pay the order with cash---'+ loopNum +' times',function(){
              try{
                return driver
                      .orderPay()
              }catch(err){
                return driver
                      .errorRecord(err)
              }   
            });

            //进行清台操作
            // it('#6 clear　Table　--第'+ loopNum +'次执行',function(){
            //   try{
            //     return driver
            //         .clearTable()

            //         // .sleep(1000)

            //   }catch(err){
            //     return driver
            //           .errorRecord(err)
            //   }   
            // });
            //进行对账操作(for retail version)
            // it('#6 check the Sales--第'+ loopNum +'次执行',function(){
            //   try{
            //      return driver
            //             .checkSales("ok")
            //   }
            //   catch(err)
            //   {
            //      return driver
            //             .errorRecord(err)
            //   }
            // });
            
            //进行对账操作(for restaurant version)
            // it('#6 check the Invoices--第'+ loopNum +'次执行',function(){
            //   try{
            //      return driver
            //             .checkInvoices("ok")
            //   }
            //   catch(err)
            //   {
            //      return driver
            //             .errorRecord(err)
            //   }
            // });

            loopNum++;
      }
     
      });
})
