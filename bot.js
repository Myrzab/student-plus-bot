const TelegramBot = require('node-telegram-bot-api');

// 🔑 TOKEN (өзгерту ұсынылады!)
const bot = new TelegramBot("TOKEN", { polling: true });


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

  // ❗️ қорғаныс (кейде text болмайды)
  if (!msg.text) return;

  const text = msg.text.toLowerCase();

  if (text === "html") {
    bot.sendMessage(
      chatId,
      "📘 HTML — веб-сайттың негізі.\n\n" +
      "HTML арқылы:\n" +
      "• мәтін\n" +
      "• сурет\n" +
      "• батырмалар\n\n" +
      "💡 Барлығы осыдан басталады."
    );
  }

  else if (text === "css") {
    bot.sendMessage(
      chatId,
      "🎨 CSS — дизайн.\n\n" +
      "• түстер\n" +
      "• стиль\n" +
      "• layout\n\n" +
      "✨ Сайтты әдемі етеді."
    );
  }

  else if (text === "js") {
    bot.sendMessage(
      chatId,
      "⚙️ JavaScript — логика.\n\n" +
      "• кнопкалар\n" +
      "• тексеру\n" +
      "• динамика\n\n" +
      "🔥 Негізгі технология."
    );
  }

  else if (text === "dev") {
    bot.sendMessage(
      chatId,
      "💻 Программист болу жолы:\n\n" +
      "1. HTML\n" +
      "2. CSS\n" +
      "3. JavaScript\n" +
      "4. React\n" +
      "5. Backend\n\n" +
      "🚀 Біртіндеп үйрен!"
    );
  }

  else if (text === "student") {
    bot.sendMessage(
      chatId,
      "🚀 Student+ платформасы\n\n" +
      "• дұрыс бағыт\n" +
      "• жүйелі оқу\n" +
      "• практика\n\n" +
      "💡 Сенің IT жолың!"
    );
  }

  else if (text === "site") {
    bot.sendMessage(
      chatId,
      "🌐 https://senin-saityn.kz"
    );
  }
});


// ✅ Render үшін (МІНДЕТТІ)
const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot is running");
}).listen(process.env.PORT || 3000);