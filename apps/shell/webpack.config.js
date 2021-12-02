const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@mf-app/shared/data-store',
  '@eprod-ui/shell-menu'
]);

module.exports = {
  output: {
    uniqueName: 'shell',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({

      remotes: {
        gallery: 'gallery@http://localhost:5000/remoteEntry.js',
        ticket: 'ticket@http://localhost:4200/remoteEntry.js',
        billing: 'billing@http://localhost:3001/remoteEntry.js',
        invoicing: 'invoicing@http://localhost:3004/remoteEntry.js'
      },
      shared: {
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '12.2.9',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '12.2.9',
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '12.2.9',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '12.2.9',
        },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
