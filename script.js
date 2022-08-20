function pass() {
    let password = document.getElementById('password').value;
    let confirm_pw = document.getElementById('confirm_pw').value;
    let button = document.getElementById('submit');
    if (password === confirm_pw && button.hasAttribute('disabled') == true) {
        button.removeAttribute('disabled');

    } else if (password !== confirm_pw && button.hasAttribute('disabled') == false) {
        button.setAttribute('disabled', '');
    }
};

//The validation does not work if the user enters something and deleted both fields: empty = empty so it unlocks the button, need to trigger if the fields are not empty