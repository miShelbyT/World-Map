import { CountryInfoComponent } from './../country-info/country-info.component';
import { Component, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('world') world!: ElementRef;

  hoverFn(event: any) {
    console.log("hi")
  }

  // country: Country = {name, }
  // review directives https://learn.zybooks.com/zybook/WGUD280v1/chapter/5/section/11


  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.world.nativeElement)
  }
  

}
