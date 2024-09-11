import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['public/css/style.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        port: 5173, // Default port
    },
});

