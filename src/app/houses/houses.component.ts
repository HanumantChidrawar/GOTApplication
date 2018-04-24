import { Component, OnInit } from '@angular/core';

//importing files for redirecting from one component to other
import { ActivatedRoute, Router } from '@angular/router';

//importing the service
import { GotService } from '../got.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  public allHouses: any[] = [];
  public defaultValue: string = "None";
  public sortOrder:boolean = false;
  public filterName:any ={ name: ''};

  constructor(private myService: GotService) { }

  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      let temp = this.myService.myGet(0, i).subscribe(
        data => {
          temp = data;
          // console.log(data);
          this.allHouses = this.allHouses.concat(temp);
          //console.log(this.allHouses);
        },
        error => {
          console.log("Some Error Occured");
          console.log(error.errorMessage);
        }
      );
    }
  }

  public changeOrder(){
    this.sortOrder = !this.sortOrder;
  }

}
