(function() {
    "use strict";
    var app = angular.module("ct.ui.router.extras.examples.dsr", ['ui.bootstrap.modal', 'ui.bootstrap.tpls', 'ct.ui.router.extras.examples', 'ct.ui.router.extras.statevis']);
    var app = angular.module("ct.ui.router.extras.examples.sticky", ['ui.bootstrap.modal', 'ui.bootstrap.tpls',
        'ct.ui.router.extras.examples',
        'ct.ui.router.extras.sticky', 'ct.ui.router.extras.dsr', 'ct.ui.router.extras.previous', 'ct.ui.router.extras.statevis'
    ]);


    app.config(function($stateProvider, $stickyStateProvider, $urlRouterProvider) {
        $stickyStateProvider.enableDebug(true);
        var states = [];
        // Modal states
        states.push({
            name: 'modal1',
            url: '/modal1',
            controller: 'timerCtrl',
            template: '<div ui-view></div>', // Not sure why this template works with $modal.open
            onEnter: showModal
        });
        states.push({
            name: 'modal1.foo',
            url: '/foo',
            controller: 'timerCtrl',
            templateUrl: '../partials/foo.html'
        });

        // Root of main app states
        states.push({
            name: 'top',
            url: '/',
            views: {
                'instructions': {
                    controller: 'timerCtrl',
                    templateUrl: 'instructions.html'
                },
                'top': {
                    controller: 'tabCtrl',
                    templateUrl: 'top.html'
                }
            },
            deepStateRedirect: {
                default: "top.people"
            },
            sticky: true
        });

        // Personnel tab
        states.push({
            name: 'top.people',
            url: 'people',
            views: {
                'peopletab': {
                    controller: 'peopleCtrl',
                    templateUrl: '../partials/people.html'
                }
            },
            deepStateRedirect: {
                default: "top.people.managerlist"
            }
        });
        states.push({
            name: 'top.people.managerlist',
            url: '/managers',
            controller: 'managerCtrl',
            templateUrl: '../partials/managers.html'
        });
        states.push({
            name: 'top.people.manager',
            url: '/manager/:mid',
            controller: 'managerCtrl',
            templateUrl: '../partials/manager.html'
        });
        states.push({
            name: 'top.people.manager.emplist',
            url: '/emps',
            controller: 'empCtrl',
            templateUrl: '../partials/emps.html'
        });
        states.push({
            name: 'top.people.manager.emp',
            url: '/emp/:eid',
            controller: 'empCtrl',
            templateUrl: '../partials/emp.html'
        });

        // Inventory tab
        states.push({
            name: 'top.inv',
            url: 'inv',
            views: {
                'invtab': {
                    controller: 'invCtrl',
                    templateUrl: '../partials/inv.html'
                }
            },
            deepStateRedirect: {
                default: "top.inv.storelist"
            }
        });
        states.push({
            name: 'top.inv.storelist',
            url: '/stores',
            controller: 'storeCtrl',
            templateUrl: '../partials/stores.html'
        });
        states.push({
            name: 'top.inv.store',
            url: '/store/:sid',
            controller: 'storeCtrl',
            templateUrl: '../partials/store.html'
        });
        states.push({
            name: 'top.inv.store.productlist',
            url: '/products',
            controller: 'productCtrl',
            templateUrl: '../partials/products.html'
        });
        states.push({
            name: 'top.inv.store.product',
            url: '/product/:pid',
            controller: 'productCtrl',
            templateUrl: '../partials/product.html'
        });

        // Customer tab
        states.push({
            name: 'top.cust',
            url: 'cust',
            views: {
                'custtab': {
                    controller: 'custCtrl',
                    templateUrl: '../partials/cust.html'
                }
            },
            deepStateRedirect: {
                default: "top.cust.customerlist"
            }
        });
        states.push({
            name: 'top.cust.customerlist',
            url: '/customers',
            controller: 'customerCtrl',
            templateUrl: '../partials/customers.html'
        });
        states.push({
            name: 'top.cust.customer',
            url: '/customer/:cid',
            controller: 'customerCtrl',
            templateUrl: '../partials/customer.html'
        });
        states.push({
            name: 'top.cust.customer.orderlist',
            url: '/orders',
            controller: 'orderCtrl',
            templateUrl: '../partials/orders.html'
        });
        states.push({
            name: 'top.cust.customer.order',
            url: '/order/:oid',
            controller: 'orderCtrl',
            templateUrl: '../partials/order.html'
        });


        angular.forEach(states, function(state) {
            $stateProvider.state(state);
        });
        $urlRouterProvider.otherwise("/");

        function showModal($modal, $previousState) {
            $previousState.memo("modalInvoker"); // remember the previous state with memoName "modalInvoker"

            $modal.open({
                templateUrl: 'modal1.html',
                backdrop: 'static',
                controller: function($modalInstance, $scope) {
                    var isopen = true;
                    $modalInstance.result.finally(function() {
                        isopen = false;
                        $previousState.go("modalInvoker"); // return to previous state
                    });
                    $scope.close = function() {
                        $modalInstance.dismiss('close');
                    };
                    $scope.$on("$stateChangeStart", function(evt, toState) {
                        if (!toState.$$state().includes['modal1']) {
                            $modalInstance.dismiss('close');
                        }
                    });
                }
            })
        }
    });

    app.run(function($rootScope, $state, $window, $timeout, $previousState) {
        $rootScope.$state = $state;

        // This code applies a default background state for the modal
        $rootScope.$on("$stateChangeStart", function(evt, toState, toParams, fromState) {
            // Is initial transition and is going to modal1.*?
            if (fromState.name === '' && /modal1.*/.exec(toState.name)) {
                evt.preventDefault(); // cancel initial transition

                // go to top.people.managerlist, then go to modal1.whatever
                $state.go("top.people.managerlist", null, {
                    location: false
                }).then(function() {
                    $state.go(toState, toParams);
                });
            }
        });

        $rootScope.$on("$stateChangeSuccess", function() {
            $timeout(function() {
                $window.ga('send', 'pageview', $window.location.pathname + $window.location.hash);
            });
        });
    });
})();
