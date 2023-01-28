import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { book } from '../data-type';
import { ViewService } from '../service/view.service';


@Component({
  selector: 'app-bookview-details',
  templateUrl: './bookview-details.component.html',
  styleUrls: ['./bookview-details.component.css']
})
export class BookviewDetailsComponent implements OnInit{

  bookData:undefined|book;
 constructor (private route:ActivatedRoute , private product:ViewService) { }
  
  
  
  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('_id');
    console.warn(productId); 
    productId && this.product.getbook(productId).subscribe((res)=>{
      console.warn(res);
      this.bookData=res;
    })
  }

}
