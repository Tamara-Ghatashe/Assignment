const axios = require('axios');


describe('Test', () => {
    const exheight=171;
    const exweight=68;
    const exBloodType = 'O+';




    it('Login to the app', async () => {
        await $('~JO').click();
        await driver.pause(5000);
        await $('~we_accept_subscribe_now').click();

        //await $('~EN').click();
        //await $('~JO').click();

        await driver.pause(5000);
        await $('~registerBtnText').click();

        await $('~SignIn').click();
        await $('~email_login_user_txt').setValue("962798365448");

        await $('~email_login_pass_txt').setValue("123123");
        await $('~email_login_pass_txt').setValue("123123");



        await $('~registerText_1').click();
        await $('~emailLoginActionBtn').click();

        await expect($('~welcomeUserName')).toBeDisplayed();
        await driver.pause(5000);

    });


    it('Edit PHR Record Information', async () => {


        //await $('~ic_profile_skin').click();
        await $('//XCUIElementTypeOther[@name="userImageBtn"]/XCUIElementTypeOther/XCUIElementTypeImage').click();

        await $('~ic_report Phr ic_arrowLeftSmall').click();
        await $('~phr_profile_personalInfo').click();
        await $('~height_txt').setValue(0);

        await $('~weight_txt').setValue(0);
        await $('~blood_type_txt').click();
        await driver.pause(5000);

        await $('~blood_type_txt').click();
        await $('~alert_action_3').click();
        await $('~btn_profile_save_btn').click();
        await $('~alert_action_0').click();
    });

    it('Validate PHR Data', async () => {
        async function getUser() {
            try {
                const response = await axios.get('https://api-stg.altibb.com/active/v1/phrs/29313626', {
                    headers: {
                        'Authorization': 'Bearer oYKqtcwsnenbEO_vmsdMkxF1KeRc71WR'
                    }
                });

                const data = response.data;
                const { height, weight, blood_type } = data;

                console.log('Height:', height);
                console.log('Weight:', weight);
                console.log('BloodType:', blood_type);
                if (exweight === weight && exheight === height && exBloodType === blood_type) {
                    console.log('Validation passed');
                } else {
                    console.error('Validation failed');
                }
            } catch (error) {
                console.error('Error during validation:', error);
            }
        }
        // Call the function to perform the validation
        await getUser();
    });
});
