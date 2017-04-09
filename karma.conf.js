// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      './www/bundle.test.js',
    ],
    exclude: [
    ],
    client: {
        args:  config.tests ? [config.tests] : ['all'],
    },
    preprocessors: {},
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
  });
};
