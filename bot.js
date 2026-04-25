const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("8450934511:AAFOg_JGiRLl3dMGhBQL0XJHIxGB0ozHqZg", { polling: true });

// /start команда
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId,
`🎓 Student+ ботына қош келдің!

Бағдарламалауды үйренгің келе ме?  
Сұрақтардың бірін таңда 👇`,
    {
      reply_markup: {
        keyboard: [
          ["📘 HTML деген не?", "🎨 CSS не үшін керек?"],
          ["⚙️ JavaScript не істейді?"],
          ["💻 Қалай программист болам?"],
          ["🚀 Student+ деген не?"],
          ["🌐 Сайтқа өту"]
        ],
        resize_keyboard: true
      }
    }
  );
});

// Негізгі логика
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // HTML
  if (text === "📘 HTML деген не?") {
    bot.sendMessage(chatId,
`📘 HTML деген не?

HTML — сайттың қаңқасы.

Яғни барлық сайттар ең алдымен HTML арқылы жасалады:
• текст  
• сурет  
• кнопка  

💡 Егер программист болғың келсе — осыдан бастайсың.`
    );
  }

  // CSS
  else if (text === "🎨 CSS не үшін керек?") {
    bot.sendMessage(chatId,
`🎨 CSS не үшін керек?

CSS — сайттың дизайнын жасайды.

HTML — қаңқа болса, CSS — оның сыртқы көрінісі:
🔵 түстер  
📏 өлшем  
✨ анимация  

💡 CSS болмаса сайт өте қарапайым көрінеді.`
    );
  }

  // JS
  else if (text === "⚙️ JavaScript не істейді?") {
    bot.sendMessage(chatId,
`⚙️ JavaScript не істейді?

JavaScript — сайтқа “жан” береді.

Ол арқылы:
✔️ кнопкалар жұмыс істейді  
✔️ форма тексеріледі  
✔️ динамика пайда болады  

💡 Қазіргі барлық сайттар JavaScript қолданады.`
    );
  }

  // қалай программист болу
  else if (text === "💻 Қалай программист болам?") {
    bot.sendMessage(chatId,
`💻 Қалай программист болам?

Дұрыс жол:

1️⃣ HTML  
2️⃣ CSS  
3️⃣ JavaScript  
4️⃣ React  
5️⃣ Backend  

❗ Қате: бірден күрделі нәрсеге өту  
✅ Дұрыс: біртіндеп үйрену  

🚀 Student+ осы жолды жеңілдетеді`
    );
  }

  // student+
  else if (text === "🚀 Student+ деген не?") {
    bot.sendMessage(chatId,
`🚀 Student+ деген не?

Student+ — бағдарламалауды оңай әрі жүйелі үйрететін платформа.

Мұнда сен:
✔️ Қайдан бастау керегін түсінесің  
✔️ Қадам-қадаммен үйренесің  
✔️ Практика жасайсың  

📦 Бағдарлама:

🔓 Тегін:
• HTML  
• CSS  
• JavaScript  

🔒 Student:
• SQL  
• React  

🔴 Pro:
• Backend (Node.js, API)

💡 Бұл жай курс емес — бұл сенің дамуың.`
    );
  }

  // сайт
  else if (text === "🌐 Сайтқа өту") {
    bot.sendMessage(chatId,
`🌐 Сайтқа өту:

https://senin-saityn.kz

💡 Мұнда толық оқу платформасы бар 🚀`
    );
  }
});

const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot is running 🚀");
}).listen(process.env.PORT || 3000);