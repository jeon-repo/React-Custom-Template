import AppContext from 'app/AppContext';
import routes from 'app/config/routesConfig';
import store, { persistor } from 'app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const withAppProviders = (Component) => (props) => {
  const WrapperComponent = () => (
    <AppContext.Provider
      value={{
        routes,
      }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    </AppContext.Provider>
  );

  return WrapperComponent;
};

export default withAppProviders;
