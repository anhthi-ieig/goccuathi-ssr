/**
 * App
 */

export const Config = Object.freeze({
  API_SERVICES_URL: process.env.API_SERVICES_URL,
});

export enum GlobalRoutes {
  HOME = '/',
  SIGN_IN = '/sign-in',
  DASHBOARD = '/dashboard',
}
