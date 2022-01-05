import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { IRepositoryResponse } from '@services/api/github/types';

@Injectable({
  providedIn: 'root'
})
export class GithubRepositories extends Query<IRepositoryResponse> {
  override client = 'github';

  override document = gql`
    query searchRepositories($queryString: String!, $number_of_repos: Int!) {
      search(query: $queryString, type: REPOSITORY, first: $number_of_repos) {
        repositoryCount
        edges {
          node {
            ... on Repository {
              name
              description
              url
              stargazers {
                totalCount
              }
              latestRelease {
                publishedAt
              }
              owner {
                avatarUrl
                login
              }
            }
          }
        }
      }
    }
  `;
}
