import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationStart} from '@angular/router';
import { ForecastService } from '../forecast.service';
import { WeatherData } from '../weather-data.model';
import { ForecastData } from '../forecast-data.model';
import { ForecastDetails } from '../forecast-details.model';

import { WeatherService } from '../weather.service';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


  constructor(private router: Router,
   // private forecastService: ForecastService
    ) { 

      //this.router.navigate(['/home']);
    
  }

  ngOnInit(): void {

  }
}
