angular.module('pokemon', ['ui.router'])

angular.module('pokemon').config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home',{
        url: '/',
        templateUrl: './app2/views/home.html'
        // template: '<h2>Home</h2>'
    })
    $stateProvider.state('characters',{
        url: '/characters',
        templateUrl: './app2/views/characters.html',
        controller: 'charactersCtrl'
        // template: '<h2>Characters</h2>'
    })
    $stateProvider.state('character', {
        url: '/characters/:id',
        templateUrl: '../app2/views/character.html',
        controller: 'characterCtrl'
    })
    $urlRouterProvider.otherwise('/')
})