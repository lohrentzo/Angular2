System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.shoppingListItems = [
                        { name: "Milk" },
                        { name: "Sugar" },
                        { name: "Bread" },
                    ];
                    this.selectedItem = { name: "" };
                }
                ShoppingListComponent.prototype.onItemClicked = function (shoppingListItem) {
                    this.selectedItem = shoppingListItem;
                };
                ShoppingListComponent.prototype.onAddItem = function (newItem) {
                    this.shoppingListItems.push({ name: newItem.value });
                };
                ShoppingListComponent.prototype.onDeleteItem = function () {
                    var index = this.shoppingListItems.indexOf(this.selectedItem);
                    this.shoppingListItems.splice(index, 1);
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: "shopping-list",
                        templateUrl: "../dev/shopping-list.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7b0JBQ1csc0JBQWlCLEdBQUc7d0JBQ3ZCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQzt3QkFDZCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7d0JBQ2YsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO3FCQUNkLENBQUM7b0JBRUMsaUJBQVksR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFXckMsQ0FBQztnQkFWRyw2Q0FBYSxHQUFiLFVBQWMsZ0JBQWdCO29CQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO2dCQUN6QyxDQUFDO2dCQUNELHlDQUFTLEdBQVQsVUFBVSxPQUFPO29CQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBQ0QsNENBQVksR0FBWjtvQkFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBdEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRywyQkFBMkI7cUJBRTVDLENBQUM7O3lDQUFBO2dCQW1CRiw0QkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQseURBa0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2hvcHBpbmctbGlzdFwiLFxuICAgIHRlbXBsYXRlVXJsIDogXCIuLi9kZXYvc2hvcHBpbmctbGlzdC5odG1sXCJcbiAgICAvL3RlbXBsYXRlOiBgICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCB7XG4gICAgcHVibGljIHNob3BwaW5nTGlzdEl0ZW1zID0gW1xuICAgICAgICB7bmFtZTogXCJNaWxrXCJ9LFxuICAgICAgICB7bmFtZTogXCJTdWdhclwifSxcbiAgICAgICAge25hbWU6IFwiQnJlYWRcIn0sXG4gICAgICAgIF07XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtID0ge25hbWU6IFwiXCJ9O1xuICAgIG9uSXRlbUNsaWNrZWQoc2hvcHBpbmdMaXN0SXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHNob3BwaW5nTGlzdEl0ZW07XG4gICAgfVxuICAgIG9uQWRkSXRlbShuZXdJdGVtKSB7XG4gICAgICAgIHRoaXMuc2hvcHBpbmdMaXN0SXRlbXMucHVzaCh7bmFtZTogbmV3SXRlbS52YWx1ZX0pO1xuICAgIH1cbiAgICBvbkRlbGV0ZUl0ZW0oKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc2hvcHBpbmdMaXN0SXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIHRoaXMuc2hvcHBpbmdMaXN0SXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
