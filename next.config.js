const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      webpack: (config) => {
        config.watchOptions = {
          aggregateTimeout: 200,
          poll: 1000,
          ignored: /node_modules/,
        };
        return config;
      },
    };
  }

  return {
    /* config options for all phases except development here */
    assetPrefix: "/editor",
    experimental: {
      outputStandalone: true,
    },
  };
};
