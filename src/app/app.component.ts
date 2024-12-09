import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular', true),
    new WishItem('To learn TypeScript'),
    new WishItem('To become a software Engineer'),
  ];
  title = 'WishList';

  toggle(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
