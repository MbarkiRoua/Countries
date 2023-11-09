import { Component, Input } from '@angular/core';
import { error } from 'console';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() listAllCountries : [] | undefined; 
  index : number = 6 ; 
  tempCountries : any = [];
  lang : string ='';
  constructor(private countriesService : CountriesService) { }

  ngOnInit(): void {
    
    this.getAllCountries();
  }
  getAllCountries(){
    this.countriesService.getAllCountries().subscribe ((data)=>{
        this.listAllCountries = data
        this.tempCountries = data.slice (0, this.index)
    })
  }
 
  getContruniesBylang(){
    if(this.lang === 'français' ){
      this.lang = 'french'
    }
    this.countriesService.getCountriesByLang(this.lang).subscribe ((data)=> {
      console.log('data');
      
      this.listAllCountries = data
        this.tempCountries = data.slice (0, this.index) 
    },
    (error)=>{
      console.log("errour");
      
    })
  }
}
