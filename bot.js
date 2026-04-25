const TelegramBot = require('node-telegram-bot-api');

// 🔑 TOKEN (өзгерту ұсынылады!)
const bot = new TelegramBot("8450934511:AAFOg_JGiRLl3dMGhBQL0XJHIxGB0ozHqZg", { polling: true });


// /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "🚀 Student+ платформасына қош келдің!\n\n" +
    "Бұл — бағдарламалауды жүйелі түрде үйренуге арналған бот.\n\n" +
    "Төмендегі командаларды жаз:\n\n" +
    "📘 html — HTML\n" +
    "🎨 css — CSS\n" +
    "⚙️ js — JavaScript\n" +
    "💻 dev — программист болу\n" +
    "🚀 student — Student+ туралы\n" +
    "🌐 site — сайт"
  );
});


// хабарламалар
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  // ❗️ /start қайта ұстап кетпес үшін
  if (text === "/start") return;

  if (text.includes("html")) {
    bot.sendMessage(chatId,
      "📘 HTML — веб-сайттың негізі.\n\n" +
      "HTML арқылы:\n" +
      "• мәтін\n" +
      "• сурет\n" +
      "• батырмалар\n" +
      "қосылады.\n\n" +
      "💡 Әрбір программист осыдан бастайды."
    );
  }

  else if (text.includes("css")) {
    bot.sendMessage(chatId,
      "🎨 CSS — сайттың дизайны.\n\n" +
      "CSS арқылы:\n" +
      "• түстер\n" +
      "• стильдер\n" +
      "• орналасу\n" +
      "басқарылады.\n\n" +
      "✨ Сайтты әдемі етеді."
    );
  }

  else if (text.includes("javascript") || text.includes("js")) {
    bot.sendMessage(chatId,
      "⚙️ JavaScript — сайттың логикасы.\n\n" +
      "JS арқылы:\n" +
      "• батырмалар жұмыс істейді\n" +
      "• тексерулер жасалады\n" +
      "• динамика қосылады\n\n" +
      "🔥 Қазіргі сайттардың негізі."
    );
  }

  else if (text.includes("программист")) {
    bot.sendMessage(chatId,
      "💻 Программист болу жолы:\n\n" +
      "1️⃣ HTML\n" +
      "2️⃣ CSS\n" +
      "3️⃣ JavaScript\n" +
      "4️⃣ React\n" +
      "5️⃣ Backend\n\n" +
      "🚀 Біртіндеп үйрен — нәтиже болады!"
    );
  }

  else if (text.includes("student")) {
    bot.sendMessage(chatId,
      "🚀 Student+ — бұл оқу платформасы.\n\n" +
      "Сен:\n" +
      "• қайдан бастау керегін білесің\n" +
      "• жүйелі түрде дамисың\n" +
      "• практика жасайсың\n\n" +
      "💡 Бұл сенің IT-дегі жолың."
    );
  }

  else if (text.includes("сайт") || text.includes("site")) {
    bot.sendMessage(chatId,
      "🌐 Ресми сайт:\nhttps://student-plus-by-myzrabek.netlify.app/"
    );
  }
});


// ✅ Render үшін (МІНДЕТТІ)
const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot is running");
}).listen(process.env.PORT || 3000);