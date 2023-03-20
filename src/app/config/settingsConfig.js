import authRoles from 'app/auth/authRoles';

const settingsConfig = {
  // 기본 url
  mainRedirectUrl: '/main',
  // 권한 없는 경우 보내는 url
  outRedirectUrl: '/404',
  // 모든 라우터 기본 권한
  defaultAuth: authRoles.admin,
};

export default settingsConfig;
