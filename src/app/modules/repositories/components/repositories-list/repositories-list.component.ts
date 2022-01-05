import { Component, Input } from '@angular/core';

// types
import { IRepository } from '@services/api/github/types';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent {
  @Input() repositories: IRepository[] = [];
  @Input() hasQueryString = false;

  constructor() {}
}
