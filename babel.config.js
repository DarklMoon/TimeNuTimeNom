module.exports = function (api) {
  const pak = require('./package.json');

  api.cache(true);
  return {
    // presets: ['babel-preset-expo'],
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],

        }
      ],
      'react-native-reanimated/plugin' // PUT IT HERE
    ]
  };
};