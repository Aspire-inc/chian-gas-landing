
require('dotenv').config();

module.exports = {
  apps: [
    {
      name: `Chian_Gas_Landing_${process.argv[5]}`,
      // exec_mode: 'cluster',
      instances: 1, // Or 'max'
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      watch: true,
      env_development: {
        APP_ENV: 'Development',
        PORT: '8000',
      },
      env_production: {
        APP_ENV: 'Production',
        PORT: 3000,
      }
    },
  ],
};
