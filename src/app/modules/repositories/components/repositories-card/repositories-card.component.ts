import { Component, Input } from '@angular/core';
import { formatDate } from '@core/utils/date';
import { IRepository } from '@services/api/github/types';

@Component({
  selector: 'app-repositories-card',
  templateUrl: './repositories-card.component.html',
  styleUrls: ['./repositories-card.component.scss']
})
export class RepositoriesCardComponent {
  @Input() repository!: IRepository;

  constructor() {}

  get releaseDate() {
    return formatDate(
      new Date(this.repository.latestRelease.publishedAt),
      'dd MMMM yyyy'
    );
  }
}
