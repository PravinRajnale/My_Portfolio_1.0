const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // ... other configuration
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'images' }, // Adjust paths as needed
      ],
    }),
  ],
};
