import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories.component';
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// internal
import { RepositoriesListComponent } from '../components/repositories-list/repositories-list.component';
import { RepositoriesCardComponent } from '../components/repositories-card/repositories-card.component';

@NgModule({
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    RepositoriesComponent,
    RepositoriesListComponent,
    RepositoriesCardComponent
  ]
})
export class RepositoriesModule {}
