import { lazy } from 'react';

const Sub = lazy(() => import('./index'));

const SubConfig = [
  {
    path: '/sub',
    element: <Sub />,
  },
];

export default SubConfig;
