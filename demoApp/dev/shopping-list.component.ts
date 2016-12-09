import {Component} from "angular2/core";

@Component({
    selector: "shopping-list",
    templateUrl : "../dev/shopping-list.html"
    //template: `    `,
})
export class ShoppingListComponent {
    public shoppingListItems = [
        {name: "Milk"},
        {name: "Sugar"},
        {name: "Bread"},
        ];

    public selectedItem = {name: ""};
    onItemClicked(shoppingListItem) {
        this.selectedItem = shoppingListItem;
    }
    onAddItem(newItem) {
        this.shoppingListItems.push({name: newItem.value});
    }
    onDeleteItem() {
        let index = this.shoppingListItems.indexOf(this.selectedItem);
        this.shoppingListItems.splice(index, 1);
    }
}