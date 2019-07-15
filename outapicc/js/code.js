var today = new Date();
var hourNow = today.getHours();
var greeting1;
var greeting2;

if (hourNow > 18) {
    greeting1 = 'Dear Customers Good evening!';
    greeting2 = 'We are now close';
} else if (hourNow > 12) {
    greeting1 = 'Dear Customers Good afternoon!';
    greeting2 = 'Come and have your order we are closing at 17:30';
} else if (hourNow > 0) {
    greeting1 = 'Dear Customers Good morning!';
    greeting2 = 'We open at 08h00 hurry while stock last';
    if (hourNow > 8) {
        greeting2 = 'We are Open Now!!!';
    }

} else {
    greeting1 = 'Welcome!';
}

document.write('<h3>' + greeting1 + ' </h3>');
document.write('<h3>' + greeting2 + ' </h3>');