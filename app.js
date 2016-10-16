(function () {
    'use stricted';

    angular.module('ShoppingListCheckOffApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(shoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = shoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function(itemIndex) {
            shoppingListCheckOffService.buyItem(itemIndex);
        };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(shoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = shoppingListCheckOffService.getAlreadyBoughtItmes();
    }
    
    function ShoppingListCheckOffService() {
        
        var toBuyItems = [
            {name:"cookie", quantity:10}, 
            {name: "apple", quantity: 5},
            {name: "coke", quantity: "3 bottles"},
            {name: "pizza", quantity: "5 boxes"},
            {name: "pokemon cards", quantity: "500 boxes"}];

        var alreadyBoughtItems = [];

        var service = this;

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getAlreadyBoughtItmes = function() {
            return alreadyBoughtItems;
        }

        service.buyItem = function(itemIndex) {
            alreadyBoughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        }
    }
    
    
})();