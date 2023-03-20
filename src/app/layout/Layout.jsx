import AppContext from 'app/AppContext';
import DialogLayout from 'app/shared-components/dialog/DialogLayout';
import { Suspense, useContext } from 'react';
import { useRoutes } from 'react-router-dom';

function Layout(props) {
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  return (
    <div>
      <DialogLayout />
      <Suspense fallback={<p>loading...</p>}>{useRoutes(routes)}</Suspense>
      {props.children}
    </div>
  );
}

export default Layout;
