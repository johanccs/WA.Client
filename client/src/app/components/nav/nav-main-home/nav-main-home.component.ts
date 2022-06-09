import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Helpers/dataService';


@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main-home.component.html',
  styleUrls: ['./nav-main-home.component.scss']
})
export class NavMainHomeComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router) { }

  brand: string = "WebAfrica Employee Manager"
  displayBadge: boolean = false; 
  val: number;
  cartItems: any[] = [];

  ngOnInit(): void
  {
    this.dataService.onDataChange((value) =>
    {
      this.val = value;
      this.displayBadge = this.val > 0;
    });
  }

  gotoCart(){
    this.router.navigate(['cart'], {
      state: {param: this.cartItems}
    });
  }
}
