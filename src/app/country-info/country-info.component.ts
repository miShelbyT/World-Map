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


// temporary workaround on key conversion for rendering
convertKey(k: any) {
  let temp = <string>k
  const regex = /[A-Z]/
  // if(temp.match(regex)) {
  //   let idx: number = temp.indexOf(temp.match(regex)[0])
  //   return `${temp.substring(0, idx)} ${temp.substring(idx)}`.toUpperCase()
  // } 
  return temp.toUpperCase()
}


emoji = '👈'
emojiDown = '👇'

}
