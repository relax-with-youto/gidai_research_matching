const express = require('express');
const path = require('path');
const app = express();

// Renderが自動で設定するPORT、なければローカル開発用に3000番を利用
const PORT = process.env.PORT || 3000;

// 'public' フォルダの中にある静的ファイル（HTML, CSS, JS）を配信する設定
app.use(express.static(path.join(__dirname, 'public')));

// サーバーを起動
app.listen(PORT, () => {
    console.log(`サーバーがポート ${PORT} で起動しました。 http://localhost:${PORT}`);
});