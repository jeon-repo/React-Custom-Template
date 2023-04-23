import AppContext from 'app/AppContext';
import defineConfig from 'app/config/defineConfig';
import settingsConfig from 'app/config/settingsConfig';
import withRouter from 'app/util/withRouter';
import { Component } from 'react';
import { matchRoutes } from 'react-router-dom';
import Utils from 'utils/common/utils';

const { isAuthMode } = defineConfig;
let mainRedirectUrl = null;

class Authorization extends Component {
  constructor(props, context) {
    super(props);
    const { routes } = context;
    this.state = {
      accessGranted: true,
      routes,
    };
    this.defaultMainRedirectUrl = props.mainRedirectUrl || '/';
  }

  componentDidMount() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted;
  }

  componentDidUpdate() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { location, userRole } = props;
    const { pathname } = location;

    const matchedRoutes = matchRoutes(state.routes, pathname);

    const matched = matchedRoutes ? matchedRoutes[0] : false;
    return {
      accessGranted: matched ? Utils.hasPermission(matched.route.auth, userRole) : true,
    };
  }

  redirectRoute() {
    const { location, userRole } = this.props;
    const { pathname } = location;
    const redirectUrl = mainRedirectUrl || this.defaultMainRedirectUrl;

    if (isAuthMode) {
      /*
        User is guest
        Redirect to Login Page
      */
      if (!userRole || userRole.length === 0) {
        setTimeout(() => this.props.navigate(settingsConfig.outRedirectUrl), 0);
        mainRedirectUrl = pathname;
      } else {
        /*
        User is member
        User must be on unAuthorized page or just logged in
        Redirect to dashboard or mainRedirectUrl
        */
        setTimeout(() => this.props.navigate(redirectUrl), 0);
        mainRedirectUrl = this.defaultMainRedirectUrl;
      }
    } else {
      this.props.navigate(settingsConfig.mainRedirectUrl);
      mainRedirectUrl = pathname;
    }
  }

  render() {
    // console.info('Fuse Authorization rendered', this.state.accessGranted);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return this.state.accessGranted ? <>{this.props.children}</> : null;
  }
}

Authorization.contextType = AppContext;

export default withRouter(Authorization);
