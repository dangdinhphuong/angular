import { Component, OnInit } from '@angular/core';
import {ProductsService} from'../../../../services/products.service';
import{Products} from'../../../.././models/products';
// import { Router } from '@angular/router';
import { FormControl, FormGroup ,Validators} from '@angular/forms';


@Component({
  selector: 'app-moster-list',
  templateUrl: './moster-list.component.html',
  styleUrls: ['./moster-list.component.css']
})
export class MosterListComponent implements OnInit {
  data!: any[];
  cates: Products[] = [];
  constructor(private productsService:ProductsService  ) { }
  
  ngOnInit(): void {
    this.getMenuData();
  }

//---start export data
  getMenuData(){
 
    
    this.productsService.all().subscribe(data => {
      this.cates = data;
      console.log( this.cates);

    });
  }

}
