# React-Custom-Templete

<img src="https://img.shields.io/badge/Author-jeon--repo-blue"> <img src="https://img.shields.io/badge/License-MIT-brightgreen">

---
### Branch Type
by default redux, redux-persist, and redux-toolkit are applied.
1. master : a branch where the UI library is not applied (only tailwindcss is applied)

### Configuration (.env)
- PORT : port settings
- REACT_APP_PWA : if the option is enabled, service worker registers are used
- REACT_APP_VERSION : used in the index.html file
- REACT_APP_MODE : the mode to set at development run or production build
- REACT_APP_WEBSITE_TITLE : set website title
- REACT_APP_AUTH_MODE : whether to use website access rights

### Directories
```
src
-app
  --auth : used when adding authentication function
    ---AuthContext.jsx   : where authentication logic will be used
    ---Authorization.jsx : handling access rights
    ---authRoles.js      : authentication authority separation
  --config
    ---defineConfig.js   : define that require a distinction of values according to the execution mode
    ---routesConfig.js   : define routing
    ---settingsConfig.js : define redirect URL, basic permissions
    ---themeConfig.js    : define of project theme
  --layout
    ---Layout.jsx : project layout
  --pages : screen unit classification
    ---main : main screen
        ----index.jsx     : main screen UI
        ----mainConfig.js : define routing per screen
    ---sub  : sub screen
        ----store
          -----index.js
          -----subSlice.js : a slice file that is dynamically reduced in sub screens
        ----index.jsx
        ----subConfig.js
  --shared-components : shard-components
  --store
    ---index.js          : store, redux-persist define
    ---rememeberSlice.js : redux slice file
    ---rootReducer.js    : define root reducer, config redux-persist
    ---userSlice.js      : the default user's redux slice file
    ---withReducer.js    : dynamic reducer
  --test : test code
-styles : global css
-utils  : modules function
  --common  : common function
    ---utils.js : template utils
  --service : api
```

### Authors
© 2023 jeon-repo <<jano.jeon@gmail.com>>
### License
Base-React-Templete is [MIT licensed](https://github.com/jeon-repo/Base-React-Template/blob/master/license.md).