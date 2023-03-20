import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvier } from './auth/AuthContext';
import Authorization from './auth/Authorization';
import settingsConfig from './config/settingsConfig';
import Layout from './layout/Layout';
import { getUserAuth } from './store/userSlice';
import withAppProviders from './util/withAppProviders';

function App() {
  const userAuth = useSelector(getUserAuth);

  return (
    <AuthProvier>
      <BrowserRouter>
        <Authorization userRole={userAuth} mainRedirectUrl={settingsConfig.mainRedirectUrl}>
          <Layout />
        </Authorization>
      </BrowserRouter>
    </AuthProvier>
  );
}

export default withAppProviders(App)();
