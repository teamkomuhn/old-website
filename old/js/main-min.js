function decode(e){return e.replace(/[a-zA-Z]/g,(function(e){return String.fromCharCode((e<="Z"?90:122)>=(e=e.charCodeAt(0)+13)?e:e-26)}))}function openMailer(e){var r=decode("grnz@xbzhua.pb"),t=decode("znvygb:grnz@xbzhua.pb");e.setAttribute("href",t),e.setAttribute("onclick",""),e.firstChild.nodeValue=r}