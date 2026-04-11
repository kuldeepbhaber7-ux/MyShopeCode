// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//       allowedHosts: 'all',  
//     proxy: {
//       '/api': 'http://localhost:3000'
//     }
//   }
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // 👈 ye bhi important hai
    allowedHosts: [
      'paxton-tearier-overplainly.ngrok-free.dev'
    ],
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})

