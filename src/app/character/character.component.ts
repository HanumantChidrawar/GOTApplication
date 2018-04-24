import { Component, OnInit } from '@angular/core';

//importing files for redirecting from one component to other
import { ActivatedRoute, Router } from '@angular/router';
import { GotService } from '../got.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public singleCharacter: any;
  public defaultValue: string = "None";


  constructor(private _route: ActivatedRoute, private router: Router, private myservice: GotService, private location: Location) { }

  ngOnInit() {


    this._route.params.subscribe(() => {//use this method to reload the same component with different parameter.

      let characterId = this._route.snapshot.paramMap.get('characterId');
      this.singleCharacter = this.myservice.getSingle(2, characterId).subscribe(
        data => {
          this.singleCharacter = data;
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
