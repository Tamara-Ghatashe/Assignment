const axios = require('axios');

describe('Test', () => {
  const exheight = 171;
  const exweight = 68;
  const exBloodType = 'O+';
  const mobileNumber=962798365448;
  const password = 123123;
  let  mobileType;

  it('Login to the app', async () => {
    await $('~JO').click();
    await driver.pause(5000);
    const isDisplayed = await $('~iosPermissionHeaderP1').isDisplayed();
    if (isDisplayed) {
      await $('~we_accept_subscribe_now').click();
    }

    if (isDisplayed === true) {
      mobileType = 'ios';
    } else {
      mobileType = 'android';
    }

    await $('~registerBtnText').click();
    await $('~SignIn').click();
    await $('~email_login_user_txt').setValue(mobileNumber);
    await $('~registerText_1').click();
    await driver.pause(5000);
    await $('~email_login_pass_txt').setValue(password);
    await $('~registerText_1').click();
    await $('~btn_loginBtnCTA').click();
    await expect($('~welcomeUserName')).toBeDisplayed();
  });

  it('Edit PHR Record Information', async () => {
    await $('~tabbaritem_4').click();
    await $('~ic_report').click();
    await $('~ic_medical_card').click();

    if (mobileType === 'android') {
      await $('~height_txt').setValue(exheight);
      await $('~weight_txt').setValue(exweight);
    } else if (mobileType === 'ios') {
      await $('~height_txt').setValue(0);
      await $('~weight_txt').setValue(0);
    }
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
        const response = await axios.get('API_URL', {
          headers: {
            'Authorization': 'BEARER_TOKEN'
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
