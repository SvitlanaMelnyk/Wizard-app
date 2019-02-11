import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {BoxOptionsComponent} from './components/box-options/box-options.component';
import {FormComponent} from './components/form/form.component';
import {ListUploadedFilesComponent} from './components/list-uploaded-files/list-uploaded-files.component';
import {HomeComponent} from './components/home/home.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'uploaded-files', component: ListUploadedFilesComponent},
  { path: 'options', component: BoxOptionsComponent},
  { path: 'form', component: FormComponent},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
