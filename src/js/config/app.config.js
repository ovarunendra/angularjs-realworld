function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  /*
    If you don't want hashbang routing, uncomment this line.
  */
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;