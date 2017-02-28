var wd = require('macaca-wd');
require('./wd_extend')(wd);

//配置wd服务端口及地址
var remoteConfig = {
  host: 'localhost',
  port: 3456
};

var path ='./image'

//测试场景及用例
const driver = wd.promiseChainRemote(remoteConfig);
const config_info = require('./config.json');
describe('bindo-pos testcases', function() {
  this.timeout(10 * 60 * 1000);

  
  driver.configureHttp({
    timeout: 600 * 1000
  });
  //选择设备及对应的App进行安装
  before(function() {
    console.log("============= in before")
    return driver
      .init({
        //deviceName:'Duke',
        platformName: config_info.TestAppInfo.platform,
        udid:config_info.TestAppInfo.device_udid, 
        app:config_info.TestAppInfo.app_path 
      });
    
  });

  after(function() {
    console.log("============= in after")
    return driver
      .sleep(1000)
      .quit();
  });

  it('#0 should login success', function() {
      console.log("============= start testing")

      //点击Alert接受按钮
      console.log("=============  wait alert");
      return driver
      .acceptAlert()
      .waitForElementByXPath('//XCUIElementTypeButton[1]')
      .click()
      .sleep(3000)
      .appLogin(config_info.UserInfo.username,config_info.UserInfo.password)
      .takeScreenshot();         
  });

  //选择商店
  it('#1 select the store',function(){
    console.log('--------retail store ---!');
    return driver
          //.waitForElementByName('QA Testing')
          .waitForElementByXPath('//XCUIElementTypeOther[3]/XCUIElementTypeButton[1]')
          .click()
          .sleep(23*1000);
  });
  //创建商品
  it('#2 create the products',function(){
    console.log('===== in inventroy page');
   
    
    //-----循环添加菜品
    // var addProducts = function(name, alias, desc) {
    //     return driver
    //          .addProducts(name, alias, desc); 

    // }
    var products = config_info.products;
    
    // return driver
    // //        //.currentContext()
    //        .addProducts(products[0].name,products[0].alias,products[0].desc)
    //        .then( products =>function(index) {
    //          console.log("hello")
    //          this
    //           .addProducts(products[index].name,products[index].alias,products[index].desc) 
    //            // ／console.log("hello")
    //        })
      return driver
           .addProducts(products[0].name,products[0].alias,products[0].desc)
           .addProducts(products[1].name,products[1].alias,products[1].desc)
           .addProducts(products[2].name,products[2].alias,products[2].desc)
    
    // products.map(function(p) { 
    //  return addProducts(p.name,p.alias,p.desc)
    // //       addProducts(p.name,p.alias,p.desc);
    // //         // .then(
    // //         //   console.log("value is "+p.name+"-"+p.alias+"-"+ p.desc)      
    // //         // )             
    //  })
    
  });
   //进行下单操作
  it('#3 order in register page',function(){
    console.log('--------order ---!');
    // return driver
          //.orderDish();
    //       .sleep(2000)
    //       .takeScreenshot();
  });

});
