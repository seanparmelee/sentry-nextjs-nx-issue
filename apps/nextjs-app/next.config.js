//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

/**
 * @type {Partial<import('@sentry/nextjs').SentryWebpackPluginOptions>}
 **/
const sentryWebpackPluginOptions = {
  dryRun: true,
  silent: true,
};

/**
 * @type {import('@sentry/nextjs/types/config/types').UserSentryOptions}
 **/
const sentryConfig = {
  hideSourceMaps: true,
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  (config) => withSentryConfig(config, sentryWebpackPluginOptions, sentryConfig),
];

module.exports = composePlugins(...plugins)(nextConfig);
