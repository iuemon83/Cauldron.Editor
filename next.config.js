const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

module.exports = (phase, { defaultConfig }) => {
  const c = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/about",
          permanent: true,
        },
      ];
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...d,
      ...{
        /* development only config options here */
        webpack: (config) => {
          config.watchOptions = {
            aggregateTimeout: 200,
            poll: 1000,
            ignored: /node_modules/,
          };
          return config;
        },
      },
    };
  }

  return {
    ...d,
    ...{
      /* config options for all phases except development here */
      assetPrefix: urlPrefix,
      experimental: {
        outputStandalone: true,
      },
      publicRuntimeConfig: {
        basePath: urlPrefix,
      },
    },
  };
};
