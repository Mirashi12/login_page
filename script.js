function pass() {
    let password = document.getElementById('password').value;
    let confirm_pw = document.getElementById('confirm_pw').value;
    let button = document.getElementById('submit');
    if (password === confirm_pw && button.hasAttribute('disabled') == true) {
        if (password.length > 0 && confirm_pw.length > 0) {
            button.removeAttribute('disabled');
        }
    } else if (password !== confirm_pw && button.hasAttribute('disabled') == false) {
        button.setAttribute('disabled', '');
    }
};