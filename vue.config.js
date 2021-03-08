const FileListPlugin = require('./plugins/FileListPlugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new FileListPlugin({
        filename: '_filelist.md',
      }),
    ],
  },
};
