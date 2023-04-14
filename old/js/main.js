// Protect Email Addresses
// https://www.ionos.com/digitalguide/e-mail/e-mail-security/protecting-your-email-address-how-to-do-it/

function decode(a) {
    return a.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) 
                                ? c : c - 26);
        })
}; 
function openMailer(element) {
    var em = decode("grnz@xbzhua.pb");
    var y = decode("znvygb:grnz@xbzhua.pb");
    element.setAttribute("href", y);
    element.setAttribute("onclick", "");
    element.firstChild.nodeValue = em;
};