import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { CurrenciesService } from './services/currencies.service';
import { AppComponent }   from './app.component';
import { CcyConverterComponent } from './components/ccy-converter/ccy-converter.component';
import { CcyListComponent } from './components/ccy-list/ccy-list.component';
import { CcyItemComponent } from './components/ccy-item/ccy-item.component';
import { CcyChartComponent } from './components/ccy-chart/ccy-chart.component';

import { ChartModule } from 'angular2-highcharts';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, ChartModule ],
  declarations: [ AppComponent, CcyConverterComponent, CcyListComponent, CcyItemComponent, CcyChartComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ CurrenciesService ]
})
export class AppModule { }
