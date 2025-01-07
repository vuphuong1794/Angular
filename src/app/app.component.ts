import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

const filter = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, CommonModule, WishListComponent, AddWishFormComponent],
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular', true),
    new WishItem('To learn TypeScript'),
    new WishItem('To become a software Engineer'),
  ];
  title = 'WishList';

  listFilter: any = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filter[this.listFilter]);
  }

}
