'use strict';

const TARGET = process.env.npm_lifecycle_event;

let env = 'build';

switch (TARGET) {
  case 'test':
    env = 'test';
    break;
  case 'start':
  case 'ios':
  case 'android':
    env = 'development';
}

module.exports = env;
