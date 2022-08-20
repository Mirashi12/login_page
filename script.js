function pass() {
    let password = document.getElementById('password').value;
    let confirm_pw = document.getElementById('confirm_pw').value;
    let button = document.getElementById('submit');
    if (password === confirm_pw && button.hasAttribute('disabled') == true) {
        if (password.length > 0 && confirm_pw.length > 0) {
            button.removeAttribute('disabled');
        }
        unset_error_msg();
    } else if (password !== confirm_pw && button.hasAttribute('disabled') == false) {
        button.setAttribute('disabled', '');       
    } else if (password !== confirm_pw) {
        set_error_msg();
    }
};

function set_error_msg() {
    let div_msg = document.getElementById('error_msg');
    if (div_msg.textContent == '') {
        let error_msg = document.createTextNode('* The passwords do not match');
        div_msg.appendChild(error_msg);
    } 
}


function unset_error_msg() {
    let div_msg = document.getElementById('error_msg');
    div_msg.textContent = '';
}