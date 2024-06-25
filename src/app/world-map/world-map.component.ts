import { CountryInfoComponent } from './../country-info/country-info.component';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { Country } from '../country'

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CountryInfoComponent],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'

})


export class WorldMapComponent {
  color = '';
  url = "https://api.worldbank.org/v2/country/"
  options = "?format=json"

  @ContentChildren("img") myVals!: QueryList<any>; 

  hoverFn(event: any) {
    console.log("hi")
  }

  // country: Country = {name, }
  // review directives https://learn.zybooks.com/zybook/WGUD280v1/chapter/5/section/11

  // add code to my-app for practice


  constructor() {}

  

  ngOnInit(): void {

    console.log(this.myVals)
  }
  

}
