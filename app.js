var app = angular.module("shoppingCart", []);

app.controller("shopCtrl", function ($scope) {
    $scope.products = [
        {
            name: "Apple Pie", 
            desc: "Decadent apple pie", 
            price: 2.5, 
            thumb: "applepie.jpeg",
            qty: 1
        }, 
        {
            name: 'Blackberry Smoothie',
            desc: 'Luscious Blackberry Smoothie',
            price: 2.49,
            thumb: 'blackberrysmoothie.jpeg',
            qty: 1
        },
        {
            name: 'Jungle Juice',
            desc: 'Healthy Jungle Juice',
            price: .29,
            thumb: 'junglejuice.jpeg',
            qty: 1
        },
        {
            name: 'Tequila',
            desc: 'Mexican Tequila',
            price: 59.99,
            thumb: 'tequila.jpeg',
            qty: 1
        }
    ];
    
    $scope.cart = [
      {
          name: 'Tequila',
          qty: 1,
          price: 59.99
      }  
    ];
    
    $scope.addToCart = function (product) {
        $scope.cart.push({
            name: product.name, 
            qty: product.qty, 
            price: product.price * product.qty
        });
    };
    
    $scope.subTotal = function () {
        var total = 0;
        $scope.cart.forEach(function (item) {
            total += item.price;
        });
        return total;
    };
    
    
});