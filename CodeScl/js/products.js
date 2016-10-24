/**
 * Created by Ritesh on 10/23/2016.
 */
(function(){
    var app = angular.module('store-products',[]);


    app.controller('ReviewControler',function(){
        this.review={};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review={};

        }
    });


    app.directive('productTitle',function(){
        return{
            restrict:'E',
            templateUrl:'product-title.html'
        }
    });

    app.directive('productPanel',function(){
        return{
            restrict: 'E',
            templateUrl: 'product-panel.html',
            controller:function(){
                this.tab = 1;

                this.setTab = function(tabVal){
                    this.tab = tabVal;
                }
                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panel'
        }
    });


})();
