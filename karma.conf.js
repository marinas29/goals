const webpackConfig = require('./webpack.config.js')

module.exports = config => {
    config.set({
        frameworks: ['mocha'],
        files: [ 'test/**/*.spec.js' ],
        webpack: webpackConfig,
        reporters: ['spec', 'coverage'],
        browsers: ['Chrome'],
        preprocessors: { '**/*.spec.js': ['webpack', 'sourcemap'] },
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' }
            ]
        }
    })
}
