const express = require("express");
const app = express();
const myRouter = require("./my-router");

// Подключение роутера
app.use("/", myRouter);

// Запуск сервера
const port = 3000;
app.listen(port, () => {
  console.log(`Приложение запущено на порту ${port}`);
});
