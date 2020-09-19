import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent implements OnInit {

  productcart:FormGroup
  total:number



  constructor(private dataservice:ProductdataService,private router:Router ,  private activatedroute:ActivatedRoute) { }

  order(val){
   this.total=val.target.value * this.product.productPrice
  }

  product:any;
  id:number;
  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"]
      this.dataservice.getDataById(this.id).subscribe((data)=>{
        this.product = data;

        this.productcart = new FormGroup({
          quantity: new FormControl("")
        })
      })
    })
  }
}
