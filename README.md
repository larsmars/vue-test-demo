# vue-test-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Test setup:

1. Create folders tests/unit og tests/results

// Test library for Vue.js
2. npm install --save-dev @vue/test-utils

// Unit-jest plugin for vue-cli
3. npm install --save-dev @vue/cli-plugin-unit-jest

// Babel jest transpiler
4. npm install --save-dev babel-jest

// Jest reporter for xml files
5. npm install --save-dev jest-junit

6. Add script: "unit": "vue-cli-service test:unit --coverage" @ package.json

7. Write unit tests @: tests/unit/calculations.js

8. Write snapshot tests @: tests/unit/views.spec.js

9. Create jest.setup.js @ /tests

10. Create jest.config.js @ /

11. Run unit tests: npm run unit
