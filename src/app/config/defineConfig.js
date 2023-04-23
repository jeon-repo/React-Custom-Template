const isServer = process.env.REACT_APP_MODE === "production";

const defineConfig = {
    isAuthMode: process.env.REACT_APP_AUTH_MODE === 'on'
};

export default defineConfig;
