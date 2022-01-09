import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HomeComponent } from '@modules/home/home.component';
import { NotFoundComponent } from '@modules/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { MatNativeDateModule } from '@angular/material/core';

// services
import { LocalStorageService } from '@services/localStorage/watchableStorage.service';
import { NavbarComponent } from '@modules/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';

// store
import { appReducers, metaReducers } from './store/core.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// env
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GraphQLModule,

    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    // ui
    MatToolbarModule,

    StoreModule.forRoot(appReducers, {
      metaReducers
    }),
    MatButtonModule,

    // Devtool
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [LocalStorageService, { provide: 'WINDOW', useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule {}
