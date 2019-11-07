import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application--its the same as the home id in the index.html page
  'home',
  // loadingFunction
  () => import('./src/home/home.app.js'), //import the main app of React app
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);

registerApplication(
  // Name of our single-spa application--its the same as the home id in the index.html page
  'vueheader',
  // loadingFunction
  () => import('./src/header/header.app.js'), //import the main app of React app
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
)

start();