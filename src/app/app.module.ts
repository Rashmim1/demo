import { ApiService } from './trustyx/services/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './trustyx/nav-bar/nav-bar.component';
import { NftComponent } from './trustyx/nft/nft.component';
import { MainComponent } from './trustyx/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTreeModule} from '@angular/material/tree';
import { NgxCopyPasteModule } from 'ngx-copypaste';
import {CdkTreeModule} from '@angular/cdk/tree';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NftComponent,
    MainComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatTableModule,MatFormFieldModule,
    HttpClientModule,MatTabsModule,MatSelectModule,MatMenuModule,
  MatAutocompleteModule,MatChipsModule,MatTreeModule,NgxCopyPasteModule,CdkTreeModule,
  MatSlideToggleModule,ReactiveFormsModule,FormsModule,MatInputModule,MatAutocompleteModule,Ng2SearchPipeModule,ClipboardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
