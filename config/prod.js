module.exports = {
  env: {
    NODE_ENV: '"production"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    /**
     * WebpackChain 插件配置
     * @docs https://github.com/neutrinojs/webpack-chain
     */
    webpackChain(chain) {
      // 更改 mode
      // chain.mode("development");
      chain.mode("development");

      chain.optimization.minimize(false);

      chain.devtool("source-map");
    },
  },
};
