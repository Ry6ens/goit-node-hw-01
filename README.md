# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
![Screenshot](./assets/screen1.png)

# Получаем контакт по id

node index.js --action get --id 5
![Screenshot](./assets/screen2.png)

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![Screenshot](./assets/screen3.png)

# Удаляем контакт

node index.js --action remove --id=3
![Screenshot](./assets/screen4.png)
