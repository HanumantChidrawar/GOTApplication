import { Component, OnInit } from '@angular/core';
//importing files for redirecting from one component to other
import { ActivatedRoute, Router } from '@angular/router';
import { GotService } from '../got.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  public singleHouse: any;
  public defaultValue: string = "None";

  constructor(private _route: ActivatedRoute, private router: Router, private myservice: GotService, private location: Location) { }

  ngOnInit() {
    this._route.params.subscribe(() => {
      let houseId = this._route.snapshot.paramMap.get('houseId');
      this.singleHouse = this.myservice.getSingle(0, houseId).subscribe(
        data => {
          this.singleHouse = data;
        },
        error => {
          console.log("Some Error Occured");
          console.log(error.errorMessage);
        }
      )
    });
  }

  //goBack Method
  public goBack(): any {
    this.location.back();
  }

}
