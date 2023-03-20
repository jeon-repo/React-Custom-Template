import ErrorConfig from "app/pages/error/errorConfig";
import MainConfig from "app/pages/main/mainConfig";
import SubConfig from "app/pages/sub/subConfig";
import { Navigate } from "react-router-dom";
import Utils from "utils/common/utils";
import settingsConfig from "./settingsConfig";

// 페이지 라우터 추가
const routeConfigs = [...MainConfig, ...SubConfig, ...ErrorConfig];

// 참고, path, element, auth 필수값
const routes = [
  ...Utils.defaultAuthConfig(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to={settingsConfig.mainRedirectUrl} replace />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <p>loading...</p>,
  },
  {
    path: '*',
    element: <Navigate to='/404' replace />,
  },
];

export default routes;
