import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'Login', component: ShowDataComponent },
{ path: 'Register', component: CreateDataComponent },
{ path: 'Product', component:  UpdatedataComponent },
{ path: 'Home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
