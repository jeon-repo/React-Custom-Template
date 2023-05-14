import AppContext from 'app/AppContext';
import routes from 'app/config/routesConfig';
import store, { persistor } from 'app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AntdTheme from 'app/layout/AntdTheme';

const withAppProviders = (Component) => (props) => {
  const WrapperComponent = () => (
    <AppContext.Provider
      value={{
        routes,
      }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AntdTheme>
            <Component {...props} />
          </AntdTheme>
        </PersistGate>
      </Provider>
    </AppContext.Provider>
  );

  return WrapperComponent;
};

export default withAppProviders;
