/** @type {import('next').NextConfig} */
const nextConfig = {
  // API Routesを使うときはstatic exportを使わない
  // API Routes 側の request.formData を使う処理と衝突して 500 エラー
  // output: 'export', // 静的書き出しモード（SG/SSG寄り）
  trailingSlash: true // URLの末尾に/をつける
};

export default nextConfig;
