import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 8991,
    // 是否开启 https
    https: false,
    proxy: {
      "/api": {
        // 后台地址
        target: "http://172.31.3.123:6020/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
