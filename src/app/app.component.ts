import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  items: WishItem[] = [
    // new WishItem('To learn Angular', true),
    // new WishItem('To learn TypeScript'),
  ];
  title = 'WishList';
}
