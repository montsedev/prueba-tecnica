import path from 'node:path';
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@apis': path.resolve( __dirname, 'src/apis' ),
      '@components': path.resolve( __dirname, 'src/components' ),
      '@constants': path.resolve( __dirname, 'src/constants' ),
      '@layouts': path.resolve( __dirname, 'src/layouts' ),
      '@pages': path.resolve( __dirname, 'src/pages' ),
      '@hook': path.resolve( __dirname, 'src/hook' ),
      '@routes': path.resolve( __dirname, 'src/routes' ),
    }
  }
})
