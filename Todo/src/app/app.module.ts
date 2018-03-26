import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DataScrollerModule} from 'primeng/datascroller';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {GrowlModule} from 'primeng/growl';



import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataScrollerModule,
    CardModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    GrowlModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
