import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';
import path from 'path'


export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/js',
            'ziggy': path.resolve('vendor/tightenco/ziggy/dist'),
            'ziggy-vue': '/vendor/tightenco/ziggy/dist/vue.m',
        }
    },
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
