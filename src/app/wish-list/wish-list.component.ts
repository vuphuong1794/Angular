import { Component, Input, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
  standalone: true,
  imports: [CommonModule],
})

export class WishListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() wishes: WishItem[] = [];

  toggle(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
