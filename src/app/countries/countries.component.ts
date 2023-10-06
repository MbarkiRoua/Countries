import { Component, OnInit } from '@angular/core';
import { core } from '@angular/compiler';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  listAllCountries : any = []; 
  index : number = 6 ; 
  tempCountries : any = [];
  lang : string ='';
  cheminImage:any = "./assets/image/logo.svg";

  constructor(private countriesService : CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }
  getAllCountries(){
    this.countriesService.getAllCountries().subscribe ((data)=>{
        console.log("datz", data);
        this.listAllCountries = data
        this.tempCountries = data.slice (0, this.index)
    })
  }
  getContruniesBylang(){
    if(this.lang === 'français' ){
      this.lang = 'french'
    }
    this.countriesService.getCountriesByLang(this.lang).subscribe ((data)=> {
      this.listAllCountries = data
        this.tempCountries = data.slice (0, this.index) 
    })
  }
      showMore() {
      this.index += 6;
      this.tempCountries = this.listAllCountries.slice(0,this.index)
    }

  

}
