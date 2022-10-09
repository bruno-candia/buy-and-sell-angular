import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../types'

interface ListingDataFormProps {
  buttonText: string,
  currentName: string,
}

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText!: string;
  @Input() currentName: string | undefined = '';
  @Input() currentDescription: string | undefined = '';
  @Input() currentPrice: number | null | undefined = null;

  name: string | undefined = ''
  description: string | undefined = ''
  price: number | null | undefined = null

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
  ) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
   this.onSubmit.emit({
    id: null,
    name: this.name,
    description: this.description,
    price: Number(this.price)
   })
  }

}
