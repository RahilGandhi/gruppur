import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: "0.0.0.0",  // Ensures accessibility
    port: 3001,        // Matches your setup
    strictPort: true,  // Prevents port conflicts
    hmr: {
      clientPort: 3001, // Ensures WebSocket connects correctly
      path: "/ws",      // Alternative WebSocket path if needed
    },
  }
})
