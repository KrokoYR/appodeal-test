import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// modules
import { HomeComponent } from '@modules/home/home.component';
import { NotFoundComponent } from '@modules/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'token',
    loadChildren: () =>
      import('@modules/token/token.module').then((m) => m.TokenModule)
  },
  {
    path: 'repositories',
    loadChildren: () =>
      import('@modules/repositories/container/repositories.module').then(
        (m) => m.RepositoriesModule
      )
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
