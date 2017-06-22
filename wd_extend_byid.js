'use strict';
var config_info = require('./config.json');
const assert = require('assert');
var randomStr = require('randomstring')
var path = config_info.imageInfopath;
var chargeNum =0;
var tableNum ;
module.exports = (wd) => {
    wd.addPromiseChainMethod('appLogin', function(username, password) {
        return this
            .elementById('id_loginField')
            .clear()
            .sendKeys(username)
            .elementById('id_passwordField')
            .clear()
            .sendKeys(password)
            .sleep(1000)
            .sendKeys('\n')
            .elementById('id_loginButton')
            .click()
            
            }
    );
    wd.addPromiseChainMethod('addCharge',function(){
         var time  = new Date().getTime();
         var filename = path + '/addCharge'+ time +'.png';
         chargeNum++;
        return this
               .elementById('id_gear_btn_20x20')
               .click()
               //.elementById('id_addChargeButton') 
               //.click()
               .elementById('id_AddItemTableViewCell')
               .click()
               .elementById('id_hide_pad_100x75')
               .click()
               .elementById('id_chargeNameField')
               .sendKeys(chargeNum)
               .takeScreenshot()
               .saveScreenshot(filename)
               .elementById('id_Done')
               .click()
      }      
    );
  

    wd.addPromiseChainMethod('addProductsForRetail',function(product_name,product_alias,product_description,product_amount=null,product_price=null){
         var time  = new Date().getTime();
         var filename = path + '/addProductsForRetail'+ time +'.png'
        return this
               .elementById('id_nav_side_bar_btn_20x20.png')
               .click()               
               .elementsById('id_BPSidebarCell')
               .then(arr=>{
                  arr[7].click()
               })
               .sleep(1000)              
               .elementById('id_blue_plus_20x20.png')
               .click()
               .elementById('id_enterInfoManuallyButton')
               .click()
               // .sleep(500)
               // .elementById('id_Overview')
               // .click()
               .elementById('id_nameField')
               //.waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeTextView[1]')
               .clear()
               .sendKeys(product_name)
               .elementById('id_kitchenAliasField')
               .sendKeys(product_alias)
               .elementById('id_field')
               .sendKeys(product_description)
               .waitForElementByName('Hide keyboard')
               .click()
               .elementById('id_qtyField')
               .click()
               .elementById('id_quantityTextField')
               .click()
               .sleep(200)
               .elementById('id_3_100x75')
               .click()
               .elementById('id_0_100x75')
               .click()
               //.sendKeys('10')
               .elementById('id_Done')
               .click()
               .elementsById('id_field')
               .then(arr =>{
                   arr[1].click()
               })
               .sleep(200)
               .elementById('id_3_100x75')
               .click()
               .elementById('id_00_220x75')
               .click()
               .elementById('id_0_100x75')
               .click()
               .elementById('id_Done')
               .click()
               .elementsById('id_switchButton')
               .then(arr => {
                    arr[1].click()
               })
               .sleep(50)
               .takeScreenshot()
               .saveScreenshot(filename)
               .elementById('id_Save')
               .click()
               .sleep(5*1000)
               
      }
    );
    wd.addPromiseChainMethod('addProductsForRestaurant',function(product_name,product_alias,product_description,product_amount=null,product_price=null){
         var time  = new Date().getTime();
         var filename = path + '/addProductsForRestaurant'+ time +'.png';
         var title  = randomStr.generate({
                      length:5,
                      charset:'bindolabs'
         });
        return this
               .elementById('id_nav_side_bar_btn_20x20.png')
               .click()
               .elementsById('id_BPSidebarCell')
               .then(arr =>{
                  arr[4].click()
               }
                )
               .sleep(1000)              
               .elementById('id_blue_plus_20x20.png')
               .click()
               .elementById('id_enterInfoManuallyButton')
               .click()
               // .sleep(500)
               // .elementById('id_Overview')
               // .click()
               .elementById('id_nameField')
               //.waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeTextView[1]')
               .clear()
               .sendKeys(product_name)
               .elementById('id_kitchenAliasField')
               .sendKeys(product_alias)
               .elementById('id_field')
               .sendKeys(product_description)
               .waitForElementByName('Hide keyboard')
               .click()
               .elementById('id_qtyField')
               .click()
               .elementById('id_quantityTextField')
               .click()
               .sleep(200)
               .elementById('id_3_100x75')
               .click()
               .elementById('id_0_100x75')
               .click()
               //.sendKeys('10')
               .elementById('id_Done')
               .click()
               .elementsById('id_field')
               .then(arr =>{
                   arr[1].click()
               })
               .sleep(200)
               .elementById('id_3_100x75')
               .click()
               .elementById('id_00_220x75')
               .click()
               .elementById('id_0_100x75')
               .click()
               .elementById('id_Done')
               .click()
               // .elementById('id_deptField')
               // .click()
               // .elementByName('Add')
               // .click()
               // .elementById('id_departmentNameField')
               // .sendKeys(title)
               // .elementByName('Hide keyboard')
               // .click()
               // .elementByName('id_Save')
               // .click()
               // .sleep(3000)
               // console.log('the *********is '+('id_'+title))
               // .elementById(('id_'+title))
               // .click()
               .elementById('id_categoryField')               
               .sendKeys(title)
               .elementByName('Hide keyboard')
               .click()
               .takeScreenshot()
               .saveScreenshot(filename)
               .elementById('id_Save')
               .click()
               .sleep(5*1000)
               
      }
    );
    
    wd.addPromiseChainMethod('orderDishForRetail',function(order_num,order_dish=null,order_amount=null){
         var time  = new Date().getTime();
         var filename = path + '/orderDishForRetail'+ time +'.png'
        return this
               .elementById('id_nav_side_bar_btn_20x20.png')
               .click() 
               .waitForElementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeTable[1]/XCUIElementTypeCell[1]')
               .click()               
               .sleep(300)
               .waitForElementByName('Favorite Tab 1')
               .click()
               .elementById('id_listingToggleButton')
               .click()
               .elementsById('id_productNameLabel')
               .then(arr=>{
                   arr[0].click()
               })
               .elementsById('id_productNameLabel')
               .then(arr=>{
                   arr[1].click()
               })
               .elementsById('id_productNameLabel')
               .then(arr=>{
                   arr[2].click()
               })
               .takeScreenshot()
               .saveScreenshot(filename)
      }
    );

    wd.addPromiseChainMethod('orderDishForRestaurant',function(order_num,order_dish=null,order_amount=null){
         var time  = new Date().getTime();
         var filename = path + '/orderDishForRestaurant'+ time +'.png';
         var No = Math.floor(Math.random()*21);
         tableNum = 'id_'+ No +'';
         console.log('TableNum is :'+No);
        return this
               // .elementById('id_nav_side_bar_btn_20x20.png')
               // .click()
               // .elementsById('id_BPSidebarCell')  //id_itemTextLabel,后续扩展可能存在问题
               // .then(arr => {
               //     arr[0].click()
               //  })                 
               // .sleep(300)
               .checkTablestatus()
               .elementById(tableNum)
               .click()
               // 
               // this is list-view order
               /*
               .elementById('id_list-view')
               .click()
               .elementsById('id_productNameLabel')
               .then(arr=>{
                   arr[0].click()
                   arr[1].click()
                   arr[2].click()
               })
               */
               .elementsById('id_newContentView')
               .then(arr=>{
                   arr[0].click()
                   arr[1].click()
                   arr[2].click()
               })
               .takeScreenshot()
               .saveScreenshot(filename)
               
      }
    );

    wd.addPromiseChainMethod('orderPay',function(payment ='cash'){
         var time  = new Date().getTime();
         var filename = path + '/orderPay'+ time +'.png'             
         var filename2= path + '/orderPay'+ time +'_2.png'
         var file_table = path +'/TableStatus'+ time +'.png';
        return this
               //.elementById('id_printSpecialReceiptButton')
               .elementById('id_Print Check')
               .click()
               .sleep(2000)
               .checkTablestatus()
               .elementById(tableNum)
               .click()
               //.elementById('id_Charge $0.0')
               .elementById('id_Charge (null)')
               //.elementById('id_paynowButton')
               .click()
               .sleep(1000)
               .takeScreenshot()
               .saveScreenshot(filename)
               .elementById('id_cashTenderButton')
               .click()
               .sleep(1000)
               .takeScreenshot()               
               .saveScreenshot(filename2)
               .elementById('id_skipButton')
               .click()
               // .sleep(3000)
      }
    );
    wd.addPromiseChainMethod('checkTablestatus',function(){
        var time  = new Date().getTime();
        var file_table = path +'/TableStatus'+ time +'.png';
        return this
               .takeScreenshot()
               .saveScreenshot(file_table)
    })

     wd.addPromiseChainMethod('clearTable',function(){
         
        return this
               .elementById('id_1')
               .click()
               .elementById('id_paynowButton')
               .click()
      }
    );

    wd.addPromiseChainMethod('checkSales',function(checkSalesInfo){
         var time  = new Date().getTime();
         var filename = path + '/checkSales'+ time +'.png'

         return this
                .elementById('id_nav_side_bar_btn_20x20.png')
                .click() 
                .elementsById('id_BPSidebarCell')  //id_itemTextLabel,后续扩展可能存在问题
                .then(arr => {
                   arr[12].click()
                })
                .sleep(10000)
                // // .waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeTable[1]/XCUIElementTypeCell[1]')
                // // .click()
                // .waitForElementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeTable[1]/XCUIElementTypeCell[1]')
                // .click()
                .waitForElementsById('id_dateLabel')
                .then(arr=>{
                     arr[0].click()
                })
                .sleep(1000)
                .takeScreenshot()
                .saveScreenshot(filename)
                .sleep(3000)
                .elementById('id_totalItemsValueLabel')                
                .text()
                .then(text => {
                  console.log(`The order total Item is:${text},expected value is ${config_info.checkorderInfo.orderItemsnum}`);
                  assert.equal(text,config_info.checkorderInfo.orderItemsnum,"the order totalItems is not right! please check")
                })
                .elementById('id_subTotalValue')
                .text()
                .then(text => {
                  console.log(`The order sub-total is:${text}`);
                  assert.equal(text,config_info.checkorderInfo.ordersubtotal,"the order sub-total is not right! please check")
                })
                .elementById('id_discountValue')
                .text()
                .then(text => {
                  console.log(`The order discount is:${text}`);
                  assert.equal(text,config_info.checkorderInfo.orderdiscout,"the order discount is not right! please check")
                })
                .elementById('id_taxValue')
                .text()
                .then(text => {
                  console.log(`The order tax&service charge is:${text}`);
                  assert.equal(text,config_info.checkorderInfo.ordertax,"the order tax&service is not right! please check")
                })
                .elementById('id_totalValue')
                .text()
                .then(text => {
                  console.log(`The order total is:${text}`);
                  assert.equal(text,config_info.checkorderInfo.ordertotal,"the order totalItems is not right! please check")
                })
                
      }
    );
    
    wd.addPromiseChainMethod('checkInvoices',function(checkSalesInfo){
         var time  = new Date().getTime();
         var filename = path + '/checkInvoices'+ time +'.png'
         var orderID='2';
         return this
                .elementById('id_nav_side_bar_btn_20x20.png')
                .click() 
                .elementsById('id_BPSidebarCell')  
                .then(arr => {
                   arr[14].click()
                })
                .sleep(15*1000)
                // .waitForElementsById('id_typeLabel')
                // .then(arr=>{
                //      arr[0].click()
                // })
                .elementsById('id_numberLabel')
                .then(arr=>{
                   return arr[0]
                }) 
                .text()
                .then( text =>{
                  orderID = text;
                  console.log(`The order id is ${text}`)
                  console.log(orderID)
                })
                .elementById('id_searchField')
                .sendKeys(orderID)
                .sleep(2000)
                .elementByName('Hide keyboard')
                .click()
                .sleep(1000)
                .takeScreenshot()
                .saveScreenshot(filename)
                .sleep(1000)
                .elementById('id_totalItemsValueLabel')                
                .text()
                .then(text => {
                  console.log(`The order total Item is:${text},expected value is ${config_info.checkorderInfo.orderItemsnum}`);
                  assert.equal(text,config_info.checkorderInfo.orderItemsnum,"the order totalItems is not right! please check")

                })
                .elementById('id_subTotalValue')
                .text()
                .then(text => {
                  console.log(`The order sub-total is:${text}`);
                  assert.equal(text,config_info.checkorderInfo.ordersubtotal,"the order sub-total is not right! please check")
                })
                .elementById('id_discountValue')
                .text()
                .then(text => {
                  console.log(`The order discount is:${text}`);
                  assert.equal(text,config_info.checkorderInfo.orderdiscout,"the order discount is not right! please check")
                })
                .elementById('id_taxValue')
                .text()
                .then(text => {
                  console.log(`The order tax&service charge is:${text}`);
                  assert.equal(text,config_info.checkorderInfo.ordertax,"the order tax&service is not right! please check")
                })
                .elementById('id_totalValue')
                .text()
                .then(text => {
                  console.log(`The order total is:${text}`);
                  assert.equal(text,config_info.checkorderInfo.ordertotal,"the order totalItems is not right! please check")
                })
      }
    );

    wd.addPromiseChainMethod('openMemoryProfiler',function(){
         var time  = new Date().getTime();
         var filename = path + '/openMemoryProfiler'+ time +'.png'
      return this
             .sleep(5000)
             //.elementById('id_avatarView')
             .touch('press',{x:300,y:30})  
             .sleep(5000)
             .takeScreenshot()
             .saveScreenshot(filename)       
    })

    wd.addPromiseChainMethod('errorRecord',function(err){
      console.error("error info is ",err);
      var time  = new Date().getTime()
      var filename = path + '/errorRecord'+ time +'.png'
      
      return  this
              .takeScreenshot()
              .saveScreenshot(filename)

      /*  
       
       
       function base64_decode(base64str,file){
          var  fs= require('fs');
          var bitmap = new Buffer(base64str,'base64');
          fs.writeFileSync(file,bitmap);
          console.log('writefile is ok!')
       }
       return this
              .takeScreenshot()
              .then(base64Str =>{
                 base64_decode(base64Str,filename)
              })
      */
     }
    );

}
