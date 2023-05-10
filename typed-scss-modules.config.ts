export const config = {
  watch: true,
  logLevel: 'error',
  ignoreInitial: true,
  includePaths: ['src/styles'],
  additionalData: `
    @import "variables";
    @import "mixin";
  `,
};
