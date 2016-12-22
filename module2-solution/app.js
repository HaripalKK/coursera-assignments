(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.itemsToBuy = [{ name: "cookies", quantity: 10 },{ name: "cakes", quantity: 2 },{ name: "icecream packs", quantity: 5 },{ name: "chips", quantity: 3 },{ name: "soda drinks", quantity: 2 }];

  toBuy.buyItem = function (item) {
    toBuy.itemsToBuy.splice(toBuy.itemsToBuy.indexOf(item),1);
    ShoppingListCheckOffService.buyItem(item)
  }
};

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;

  boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
  var service = this;
  var boughtItems = [];

  service.buyItem = function (item) {
  boughtItems.push(item);
  };

   service.getBoughtItems = function () {
    return boughtItems;
  };
};

})()
