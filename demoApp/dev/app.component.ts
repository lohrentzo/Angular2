import {Component} from 'angular2/core';
import {ShoppingListComponent} from "./shopping-list.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>This is a shopping list App</h1>
        <shopping-list></shopping-list>
    `,
    directives: [ShoppingListComponent]
})
export class AppComponent {

}
