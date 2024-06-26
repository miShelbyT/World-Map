import { Country } from './../country';
import { WorldMapComponent } from './../world-map/world-map.component';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [WorldMapComponent],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent {
  
constructor(){}
@Input() country: Country = {
    name: "",
    capitalCity: "",
    region: "", // region.value
    iso2Code: "",
    incomeLevel: "", //incomeLevel.value
    longitude: "",
    latitude: ""
};

objectEntries(obj: {}) {
  return Object.entries(obj);
}


  
  

}
