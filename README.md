```sh
sudo npm install webpack-cli -g

npm install --save-dev webpack ||  npm install --save webpack
```
---
Если при открытии index.html в браузере вы получаете синтаксическую ошибку в середине уменьшенного JavaScript , установите development mode и npx webpack снова запустите . Это связано с запуском npx webpack последней версии Node.js (v12.5 +) вместо версии LTS .

```sh
webpack --mode=development
```
---
При желании можно запустить любой файл конфигурации webpack

```sh
npx webpack --config webpack.config.js
```
по дефолту команда ```webpack``` запускает webpack.config.js

---
