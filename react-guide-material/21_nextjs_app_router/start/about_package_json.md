react-guide-material/21_nextjs_app_router/start/package.json

  "scripts": {
    "dev": "run-p dev:*", // p: parallel　同時にdev:のコマンドを全て実行する
    "dev:json-server": "npx json-server -w ./mock/db.json -p 4030",
    "dev:next": "next dev -p 4020", // 4020ポートで起動する
    "build": "next build",
    "start": "next start -p 4020",
    "build-start": "run-s build start", // s: 直列で実行する build後にstartを実行する
    "lint": "next lint"
  },

  "devDependencies": {
    "npm-run-all": "^4.1.5" // run-pに必要なパッケージ
  },
