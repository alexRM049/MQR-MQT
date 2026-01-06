import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { HomeComponent } from './app/home/home';
import { Anexo1Component } from './app/anexos/anexo1/anexo1';
import { Anexo2Component } from './app/anexos/anexo2/anexo2';
import { provideRouter, Routes } from '@angular/router';


bootstrapApplication(App, appConfig, 
  
).catch((err) => console.error(err));
