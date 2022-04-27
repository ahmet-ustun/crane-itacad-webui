const input1 = $('div.email form input[name="name"]');
const input2 = $('div.email form input[name="email"]');
const input3 = $('div.email form textarea[name="message"]');

const button = $('div.email form button[type="submit"]');
const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.attr('disabled', true);

$('div.email form').on('change paste keyup', function () {

    const isOkay1 = input1.val().trim() !== '';
    const isOkay2 = input2.val().trim() !== '' && input2.val().match(regex);
    const isOkay3 = input3.val().trim() !== '';

    if (isOkay1 && isOkay2 && isOkay3) {
        button.attr('disabled', false);
    } else {
        button.attr('disabled', true);
    }
});