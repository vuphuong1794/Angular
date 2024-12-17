import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AppComponent {
  items: WishItem[] = [
    // new WishItem('To learn Angular', true),
    // new WishItem('To learn TypeScript'),
    // new WishItem('To become a software Engineer'),
  ];
  title = 'WishList';

  newWishText='';
  
  addWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText='';
  }

  toggle(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
