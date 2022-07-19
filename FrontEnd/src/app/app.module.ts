import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { CreateDataComponent } from './create-data/create-data.component';

import { DeleteDataComponent } from './delete-data/delete-data.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { HomeComponent } from './home/home.component'; 

const appRoutes: Routes = [
  { path: 'Login', component: ShowDataComponent },
  { path: 'Register', component: CreateDataComponent  },
  { path: 'Product', component:  UpdatedataComponent },
  { path: 'Home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    CreateDataComponent,
  
    DeleteDataComponent,
    UpdatedataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
