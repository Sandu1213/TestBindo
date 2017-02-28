'use strict';
//var wd = require('macaca-wd');
module.exports = (wd) => {
    wd.addPromiseChainMethod('appLogin', function(username, password) {
        return this
            .waitForElementByXPath('//XCUIElementTypeTextField[1]')
            .clear()
            .sendKeys(username)
            .waitForElementByXPath('//XCUIElementTypeSecureTextField[1]')
            .clear()
            .sendKeys(password)
            .sleep(1000)
            .sendKeys('\n')
            .waitForElementByName('Sign In')
            .click()
            .sleep(5000);
            }
    );

    wd.addPromiseChainMethod('addProducts',function(product_name,product_alias,product_description,product_amount,product_price){
         var starttime = new Date().getTime();
        return this
               .waitForElementByXPath('//XCUIElementTypeOther[2]/XCUIElementTypeButton[1]')
               .click()
               //.waitForElementByName('Inventory')
               .waitForElementByXPath('//XCUIElementTypeTable[1]/XCUIElementTypeCell[5]/XCUIElementTypeStaticText[1]')
               .click()
               .waitForElementByName('blue plus 20x20')
               //.waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeButton[1]')
               .click()
               .waitForElementByName('Enter info manually')
               //.waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeButton[1]')  
               .click()
               .sleep(2000)
               //.waitForElementByName('Overview')
               .waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeButton[1]')
               .click()
               .waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeTextView[1]')
               .clear()
               .sendKeys(product_name)
               .waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeTextView[2]')
               .sendKeys(product_alias)
               .waitForElementByXPath('///XCUIElementTypeOther[2]/XCUIElementTypeTextView[1]')
               .sendKeys(product_description)
               .waitForElementByName('Hide keyboard')
               .click()
               .waitForElementByXPath('//XCUIElementTypeTextField[2]')
               .click()
               // .waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeTextField[1]')
               // .click()
               // .sendKeys(product_amount)
               .waitForElementByXPath('//XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeButton[2]')
               .click()
               .waitForElementByXPath('//XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeButton[2]')
               .click()
               // // .waitForElementByXPath('//XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeTextField[1]')
               // .click()
               // .sendKeys(product_amount)  //设置菜品数量             
               .waitForElementByName('Done')
               //.waitForElementByXPath('//XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeButton[2]')           
               .click()
               // .sleep(2000)
               .waitForElementByXPath('//XCUIElementTypeOther[4]/XCUIElementTypeTextField[1]')
               .click()
               .waitForElementByXPath('//XCUIElementTypeOther[4]/XCUIElementTypeOther[1]/XCUIElementTypeButton[3]')
               .click()
               .waitForElementByXPath('//XCUIElementTypeOther[4]/XCUIElementTypeOther[1]/XCUIElementTypeButton[12]')
               .click()
               .waitForElementByXPath('//XCUIElementTypeOther[4]/XCUIElementTypeOther[1]/XCUIElementTypeButton[13]')
               .click()
               // .then(
               //     // this.XCUIElementTypeTextField.typeText(product_price)                   
               //  )
               //.sendKeys(product_price)  //设置菜品价格
               .waitForElementByXPath('//XCUIElementTypeOther[4]/XCUIElementTypeOther[1]/XCUIElementTypeButton[14]')
               .click()
               // .waitForElementByXPath('/XCUIElementTypeOther[4]/XCUIElementTypeOther[1]/XCUIElementTypeButton[14]')
               //.click()
               .waitForElementByXPath('//XCUIElementTypeOther[6]/XCUIElementTypeButton[1]')
               .click()
               .waitForElementByName('Save')
               //.waitForElementByXPath('//XCUIElementTypeOther[2]/XCUIElementTypeButton[1]')
               .click()
               .takeScreenshot()
               .then(
                console.log("addproduct exec time is :",new Date().getTime() - starttime, "ms")
                )           
               .sleep(7*1000);

            }
    );
    
    wd.addPromiseChainMethod('orderDish',function(order_num,order_amount){
        return this
               .waitForElementByXPath('//XCUIElementTypeOther[2]/XCUIElementTypeButton[1]')
               .click()
               .waitForElementByXPath('//XCUIElementTypeTable[1]/XCUIElementTypeCell[3]/XCUIElementTypeStaticText[1]')
               .click()
               
     }
    );

    wd.addPromiseChainMethod('orderDish',function(order_num,order_amount){
        return this
               .waitForElementByXPath('//XCUIElementTypeOther[2]/XCUIElementTypeButton[1]')
               .click()
               .waitForElementByXPath('//XCUIElementTypeTable[1]/XCUIElementTypeCell[3]/XCUIElementTypeStaticText[1]')
               .click()
               
     }
    );
}
