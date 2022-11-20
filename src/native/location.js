import { RUNTIME } from "../common/config";
import { APP_ENV } from "../common/constants";
import M from "./";

const coordsApadter = ({ latitude, longitude }) => {
  return {
    lat: Number(latitude),
    lng: Number(longitude),
  };
};

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (RUNTIME.TYPE === APP_ENV.BROWSER) {
      console.warn("[getCurrentLocation] function is only for Morpheus App");
      resolve({}); // 넘어가기 또는 기본값 세팅
    } else {
      M.plugin("location").current({
        timeout: 10000,
        maximumAge: 1,
        callback: function ({ status, message, coords }) {
          if (status === "SUCCESS" && coords) {
            // 성공
            resolve(coordsApadter(coords));
          } else {
            // 실패
            reject(new Error("Getting GPS coords is failed"));
          }
        },
      });
    }
  });
};
