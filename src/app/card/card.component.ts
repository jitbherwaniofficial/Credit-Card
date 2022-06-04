import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() firstName!:string
  @Input() CardNumber!:string
  @Input() Expiration!:string
  constructor() { }

  ngOnInit(): void {
  }

}
