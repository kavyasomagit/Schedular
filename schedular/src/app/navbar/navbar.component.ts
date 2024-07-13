import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Output('searchValue') searchValue =  new EventEmitter<any>()
  @Input('ipftodo') ipftodo: any;
  // value = ''
  ngOnInit() {
  }
}
