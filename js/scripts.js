// Allows for basic obfuscation of email by character substitution on website. When user
// clicks email link, incorrect characters are replaced.

function replaceEmail() {
    var emailSub = document.getElementById('mail').getAttribute('href');
    emailSub = emailSub.replace("@@", ".");
    document.getElementById('mail').href = emailSub;
}


// Calls skippr
$(document).ready(function(){
    $('#slides').skippr({
        speed: 1500,
        autoPlay: true,
        autoPlayDuration: 3000
    });
});