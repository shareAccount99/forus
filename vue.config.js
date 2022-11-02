module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-pro-sidebar/" : "/",
  chainWebpack: (config) => {
    //	process.env.NODE_ENV === 'production' ? config.externals(['@vue/composition-api']):{};
  },
  css: {
    extract: false,
  },
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://3.39.223.65:8080",
      },
    },
  },
};
