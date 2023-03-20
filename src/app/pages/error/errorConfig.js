import { lazy } from 'react';

const Error404Page = lazy(() => import('./Error404Page'));

// path '' 값으로 설정하면 기본 도메인을 메인으로 설정 가능
const ErrorConfig = [
  {
    path: '/404',
    element: <Error404Page />,
  },
];

export default ErrorConfig;
