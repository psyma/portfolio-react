import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/portfolio-react/", // to run in docker change it into "./portfolio-react/"
    server: {
        watch: {
            usePolling: true
        }
    }
})
