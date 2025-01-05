import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';


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
  imports: [FormsModule, CommonModule, WishListComponent],
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular', true),
    new WishItem('To learn TypeScript'),
    new WishItem('To become a software Engineer'),
  ];
  title = 'WishList';

  newWishText = '';
  listFilter: any = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filter[this.listFilter]);
  }

  addWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}
