import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListUploadedFilesComponent } from './components/list-uploaded-files/list-uploaded-files.component';
import { BoxOptionsComponent } from './components/box-options/box-options.component';
import { FormComponent } from './components/form/form.component';
import { PopupOverviewScreenComponent } from './components/popup-overview-screen/popup-overview-screen.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ListUploadedFilesComponent,
    BoxOptionsComponent,
    FormComponent,
    PopupOverviewScreenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
