import { Component, OnInit } from '@angular/core';

//importing files for redirecting from one component to other
import { ActivatedRoute, Router } from '@angular/router';

//importing the service
import { GotService } from '../got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public allCharacters: any[] = [];
  public defaultValue: string = "None";
  public filterName:any ={ name: ''};
  public sortOrder:boolean = false;


  constructor(private myService: GotService) { }

  ngOnInit() {
    for (let i = 1; i < 45; i++) {
      let temp = this.myService.myGet(2, i).subscribe(
        data => {
          temp = data;
          this.allCharacters = this.allCharacters.concat(temp);
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
