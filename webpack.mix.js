const mix = require('laravel-mix');

mix.ts('src/isVisible.ts', 'dist').webpackConfig({
    module: {
        rules: [
            {
                enforce: 'pre',
                loader: 'eslint-loader',
                test: /\.(ts|js)?$/
            }
        ]
    }
});
