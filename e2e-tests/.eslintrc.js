/* eslint-disable @typescript-eslint/no-var-requires */

const sharedConfig = require('../commons/config/eslint-shared-backend')

module.exports = {
  ...sharedConfig,
  extends: [
    ...sharedConfig.extends,
    'plugin:json/recommended'
  ],
  ignorePatterns: [
    ...sharedConfig.ignorePatterns,
    'node_modules/',
    'playwright-report/'
  ],
  rules: {
    ...sharedConfig.rules,
    // Disable because in the playwright config they use a lot new RegExp()
    'prefer-regex-literals': 'off',
    'max-len': ['error', { code: 120 }]
  }
}
