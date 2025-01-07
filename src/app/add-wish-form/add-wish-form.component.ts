import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})

export class AddWishFormComponent implements OnInit {
  @Output() addWish = new EventEmitter<WishItem>(); //truyen du lieu cho su kien addWish

  constructor() { }

  ngOnInit(): void { }

  newWishText = '';

  addNewWish() {
    //this.items.push(new WishItem(this.newWishText)); //add new wish to items
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
