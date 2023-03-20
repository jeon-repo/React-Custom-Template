import { lazy } from 'react';

const Main = lazy(() => import('./index'));

// path '' 값으로 설정하면 기본 도메인을 메인으로 설정 가능
const MainConfig = [
  {
    path: '/main',
    element: <Main />,
  },
];

export default MainConfig;
