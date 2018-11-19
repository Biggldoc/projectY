    const zipCode = document.querySelector('.zip_code_input');
    const userState = document.querySelector('.user_state');
    const zipcodeValidator = /^[0-9]+$/;
    const defaultThemeSwitch = document.getElementsByClassName('theme_selector__switch')[0];
    const cyberThemeSwitch = document.getElementsByClassName('theme_selector__switch')[1];
    const darkThemeSwitch = document.getElementsByClassName('theme_selector__switch')[2];
    const cyberTheme = 'css/cyberpunk.css';
    const defaultTheme = 'css/styles.css';
    const darkRedTheme = 'css/darkred.css';
    const secretPromoLabel = document.querySelector('label[for="promocode"]');
    const signUpBtn = document.getElementsByClassName('signup_btn')[0];
    const promoInput = document.querySelector('input[name="user_promocode"]');
    const secretPromoCode = 'FATCAT';
    let mainStyles = document.getElementsByClassName('main_styles')[0];

    // PROMOCODE
    secretPromoLabel.addEventListener('click', () => {
      window.location.assign('promo_puzzle.html');
    });

    signUpBtn.addEventListener('click', function(e) {
      if (promoInput.value.toUpperCase() === secretPromoCode &&
        promoInput.value.length === secretPromoCode.length) {
        e.preventDefault();
        window.location.assign('youwin.html');
      }
    });

    // THEME-CHANGER
    defaultThemeSwitch.addEventListener('click', function() {
      mainStyles.href = defaultTheme;
    });
    cyberThemeSwitch.addEventListener('click', function() {
      mainStyles.href = cyberTheme;
    });

    darkThemeSwitch.addEventListener('click', function() {
      mainStyles.href = darkRedTheme;
    });
    // ZIPCODE VALIDATOR
    zipCode.addEventListener('keyup', function() {
      if (!zipcodeValidator.test(zipCode.value)) {
        zipCode.value = zipCode.value.substring(0, zipCode.value.length - 1);
      }
    });
    zipCode.addEventListener('keydown', function() {
      if (!zipcodeValidator.test(zipCode.value)) {
        zipCode.value = zipCode.value.substring(0, zipCode.value.length - 1);
      }
    });
    // COLOR-GIVER FOR STATE-SELECT
    userState.addEventListener('click', () => {
      if (userState.value.length > 0) {
        userState.style.color = "#000";
      }
    });