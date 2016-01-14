# Webpack / React / Redux / Router - Starter
 
Just a base starting point for my React projects.

Uses WebPack and Babel 6 for bundling and building along with Hot Reloading.

WebPack is configured for:
- SASS
- Autoprefixing CSS back 2 versions and for IE 11

- App entry point: src/scripts/app/App.js
- Redux model: src/scripts/stores/AppStore.js
- Router config: src/scripts/config/routes.js

By default, the App will load the config.js file on start up. This external config file may be updated outside of the bundle to set configuration options for the application. 

My Nudoru utility classes are included in the src/scripts/nudoru folder. Some utils developed for Nori are in the src/scripts/nori folder. 

The RxJS module is included also for reactive programming.