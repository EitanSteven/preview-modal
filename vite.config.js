import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: './src/index.js',  // Entry point
            name: 'preview-modal',
            fileName: (format) => `preview-modal.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'], // React y React DOM should be peer dependencies
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});
