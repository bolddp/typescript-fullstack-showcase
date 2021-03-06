import { Config } from 'tsoa';

const config: Config = {
  entryFile: 'src/api/app.ts',
  noImplicitAdditionalProperties: 'throw-on-extras',
  controllerPathGlobs: ['src/api/controllers/**/*Controller.ts'],
  spec: {
    outputDirectory: 'dist/api',
    specVersion: 3,
    securityDefinitions: {
      jwt: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'JWT token that is obtained by using the /auth/login endpoint',
      },
    },
  },
  routes: {
    routesDir: './src/api',
    authenticationModule: './src/api/authentication.ts',
  },
};

export default JSON.stringify(config);
