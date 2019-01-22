(function () {
    'use strict';

    angular
        .module('myApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider

            .state('home', {
                name: 'home',
                url: '/home',
                template: 'Home'
            })

            .state('one', {
                name: 'one',
                url: '/one',
                templateUrl: 'app/views/one.html'
            })

            .state('two', {
                name: 'two',
                url: '/two',
                template: 'Two'
            })          

            // .state('home', {
            //     url: '/home',
            //     views: {
            //         '': {
            //             templateUrl: 'home/home.html'
            //         },
            //         'carousel@home': {
            //             templateUrl: 'home/home-one.html'
            //         },
            //         'services@home': {
            //             templateUrl: 'home/home-two.html'
            //         },
            //         'testimonial@home': {
            //             templateUrl: 'home/home-three.html'
            //         }
            //     }
            // })

    }
})();