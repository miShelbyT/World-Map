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
    id: "",
    capitalCity: "",
    region: "", // region.value
    iso2Code: "",
    incomeLevel: "", //incomeLevel.value
    longitude: "",
    latitude: ""
};

keys = Object.keys(this.country) as(keyof typeof this.country)[];

convertKey(k: any) {
  let temp = <string>k
  const result = temp.replace(/([a-z])([A-Z])/g, '$1 $2');
  return result.toUpperCase().trim();
}


point = '👈'
pointUp = '👆'

}
