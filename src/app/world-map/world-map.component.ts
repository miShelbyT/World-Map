import { WorldApiService } from './../world-api.service';
import { CountryInfoComponent } from './../country-info/country-info.component';
import { Component } from '@angular/core';
import { Country } from '../country'

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CountryInfoComponent],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'

})


export class WorldMapComponent {

  constructor(private api: WorldApiService) {}
  color: string = '';
  url: string = "https://api.worldbank.org/v2/country/"
  options: string = "?format=json"
  id: string = ""
  element: any = ""
  clicked = false

  country: Country = {
    name: "",
    id: "",
    capitalCity: "",
    region: "", // region.value
    iso2Code: "",
    incomeLevel: "", //incomeLevel.value
    longitude: "",
    latitude: ""
  };

  getCountry(id: string) {
    this.api.get(`${this.url}${id}${this.options}`)
    .subscribe({
      next: (data: any) => {
        for(let key in this.country) {
          if(key == "incomeLevel" || key == "region") {
            this.country[key as keyof Country] = data[1][0][key].value
          }
          else {
            this.country[key as keyof Country] = data[1][0][key]
          }
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  hoverFn(event: any) {
    if(event.target.id && event.target.id !== this.id) {
      this.id = event.target.id
      this.getCountry(event.target.id)
    }
  }

  disclaimerFunc(event: any) {
    this.clicked = !this.clicked
  }




}
