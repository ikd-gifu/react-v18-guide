npm run buildでエラーになる
/010_SSR/　/030_SG　にgenerateStaticParams()がないため
学習のため、/srcに一時移動してビルド

"next": "14.1.3"においてはビルド時のNODE_ENVの値が重要
ローカルでは開発環境なのでNODE_ENVはdevelopment
ビルドはproductionで行うので、cross-envライブラリで一時的に変更
https://www.npmjs.com/package/cross-env
（環境変数のNODE_ENVを変更することも可能）
react-guide-material/21_nextjs_app_router/start/package.json
"build": "cross-env NODE_ENV=production next build", //環境変数を変えてコマンドを実行

開発環境にインストール
npm i -D cross-env

ビルド時にJSONサーバーを起動しておく
fetch処理があるため
react-guide-material/21_nextjs_app_router/start/package.json
    "build": "run-p dev:json-server build:next",
    "build:next": "cross-env NODE_ENV=production next build",

ビルドした生成物は/outに配置される
react-guide-material/21_nextjs_app_router/start/out/

ログ
npm run build

> end@0.1.0 build
> cross-env NODE_ENV=production next build

   ▲ Next.js 14.1.3
   - Environments: .env.production

   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types  . ⨯ ESLint must be installed in order to run during builds: npm install --save-dev eslint
 ✓ Linting and checking validity of types    
 ✓ Collecting page data    
 ✓ Generating static pages (10/10) 
 ✓ Collecting build traces    
 ✓ Finalizing page optimization    

Route (app)                              Size     First Load JS
┌ ○ /                                    177 B          91.3 kB
├ ○ /_not-found                          0 B                0 B
├ ○ /020_SG                              177 B          91.3 kB
├ ● /020_SG/[id]                         145 B          84.5 kB
├   ├ /020_SG/1
├   └ /020_SG/2
├ ○ /040_api_routes                      979 B          92.1 kB
├ ○ /050_actions                         817 B            92 kB
└ λ /api/article                         0 B                0 B
+ First Load JS shared by all            84.4 kB
  ├ chunks/69-097b2aa14932a23a.js        29.1 kB
  ├ chunks/fd9d1056-1b06546f2a6b6797.js  53.4 kB
  └ other shared chunks (total)          1.87 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses getStaticProps)
λ  (Dynamic)  server-rendered on demand using Node.js
