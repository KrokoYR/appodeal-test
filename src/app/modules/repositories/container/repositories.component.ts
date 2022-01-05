import { Component, OnDestroy, OnInit } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';

// services
import { GithubRepositories } from '@services/api/github/query';
import { IRepository, IRepositoryResponse } from '@services/api/github/types';

// utils
import { debounce } from '@core/utils/debounce';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit, OnDestroy {
  loading = false;
  error: any;
  repositories: IRepository[] = [];
  repositoriesQuery: QueryRef<IRepositoryResponse> | undefined;

  private querySubscription: Subscription | undefined;

  queryString = '';
  number_of_repos = 10;

  // eslint-disable-next-line no-unused-vars
  constructor(private githubRepositoriesGQL: GithubRepositories) {}

  ngOnInit(): void {
    this.repositoriesQuery = this.githubRepositoriesGQL.watch(
      {
        queryString: this.queryString,
        number_of_repos: this.number_of_repos
      },
      {
        useInitialLoading: false
      }
    );

    this.querySubscription = this.repositoriesQuery.valueChanges.subscribe(
      ({ data, loading, error }) => {
        this.loading = loading;
        this.repositories = data.search.edges.map(({ node }) => node);
        this.error = error;
      }
    );
  }

  handleChange = (event: any) => {
    this.queryString = event.target.value;

    if (!event.target.value) {
      this.repositories = [];
    } else {
      this.loading = true;
      this.refetch();
    }
  };

  refetch = debounce(() => {
    this.repositoriesQuery?.refetch({
      queryString: this.queryString,
      number_of_repos: this.number_of_repos
    });
  }, 500);

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
