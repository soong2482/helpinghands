import { APP_ENV, OS_ENV } from "./constants";
const initRunTimeEnv = () => {
  let OS;
  const userAgent = window.navigator.userAgent;
  const TYPE = /morpheus/i.test(userAgent) ? APP_ENV.APP : APP_ENV.BROWSER;
  if (/android/i.test(userAgent)) {
    OS = OS_ENV.ANDROID;
  } else if (/ipad|iphone|ipod/i.test(userAgent) && !window.MSStream) {
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    OS = OS_ENV.IOS;
  } else {
    OS = OS_ENV.UNKOWN;
  }
  return {
    TYPE,
    OS,
  };
};

export const RUNTIME = initRunTimeEnv();
