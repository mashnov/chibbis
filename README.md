# Chibbis
[DEMO](https://mashnov.github.io/chibbis/)

### Npm dev commands
> - `npm run dev` - run it for development.  
> - `npm run lint` - check your code for codeStyle.  
> - `npm run test` - run all test with coverage generate.  
---
> - `npm run lint -- --fix` fix linter problem.  
> - `npm run test -- --coverage=false` all test without coverage generate.  

### Npm deploy command
> - `git pull`
> - `npm install`
> - `npm run build`
---
> - `npm --favicon=true run build` - build with favicon.  

### Components
> - Use file name only in `PascalCase`.  
> - Use file name as a `componentName`.  
> - Use componentName in `kebab-case` as root className.  
> - Use `self-closing tags` if you don't pass content.  
> - Don't use `mixins`. Use `helpers`.  
> - Don't use `extension` for import *.vue and *.js files.  
> - Don't use `props` as Array. Always `describe` it.  

### Svg in components
> - Compress file with Svgomg  
> - Move it to src/assets/svg  
> - Import IconName from 'assets/svg/IconName'  
> - Use it as a < IconName />  
> - Use `fill="currentColor"` in svg path.
> - Use color in styles for set svg `color`.

### Styles
> - Use `variables.scss` to set @media, color and font properties.  
> - Use `animations.scss` to define names for vue transitions.  
> - Use `keyframes.scss` to set @keyframes for vue transitions.  
> - Use only `scoped` styles.  
> - Use only `scss` style lang.  

### Breakpoints
| Variable      | Class name    | Size    |
| ------------- |:-------------:| -------:|
| $screen-xs    | .col          | <320px  |
| $screen-sm    | .col-sm       | ≥576px  |
| $screen-md    | .col-md       | ≥768px  |
| $screen-lg    | .col-lg       | ≥992px  |
| $screen-xl    | .col-xl       | ≥1200px |

### Vuex
> - Don't use Vuex without `types` from store/types.js.  
> - Don't use unnamed Vuex modules always add `moduleName`.  
> - Don't use mapState - always write `getters`.  
> - Don't use mapMutations - always call `actions`.  
> - Don't use `requests in Vuex actions`. Move it to separate service.  

### Modal
> - Use vuex `MODAL` module.  
> - Use action `SHOW_MODAL` with { component and position } parameters to show modal.  
> - Use action `HIDE_MODAL` to hide modal.  
> - Use `bootstrap` classes to set modal size.

### Global preloader
> - Use vuex `PRELOADER` module.  
> - Use `SHOW_PRELOADER` action with id in parameters to show preloader.  
> - Use `HIDE_PRELOADER` action with id in parameters to hide preloader.  
> - Preloader is visible until an `array` of ids in store is not empty.  

### Tests
> - Don't use `snapshot` for test.  
> - Use a `component folder` for tests.  
> - Use `*.spec.js` from test names. 
> - Use `*.mock.js` from mock data. 
> - Use `moxios` for mock api response.  
> - if you have errors in terminal call `npm i -D handlebars@4.5.0`

### Commit and push
> - Don't commit without writing `test` for all new components.  
> - Don't commit without passing `eslint` tests.  
> - Don't push without `passing all tests`.  

### Links
> - [Vue](https://vuejs.org/)  
> - [Vuex](https://vuex.vuejs.org/)  
> - [Vue Router](https://router.vuejs.org/)  
> - [Jest](https://jestjs.io/)  
> - [Numeral](http://numeraljs.com/)  
> - [Lodash](https://lodash.com/)  
> - [Luxon](https://moment.github.io/luxon/)  
> - [Cookie](https://learn.javascript.ru/cookie)
> - [Axios](https://github.com/axios/axios/)  
> - [Moxios](https://github.com/axios/moxios/)  
> - [Svgomg](https://jakearchibald.github.io/svgomg/)  
> - [Bootstrap 4 Grid](https://getbootstrap.com/docs/4.0/layout/grid/)
> - [VueDevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)  
