import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export interface IRepository {
  name: string;
  description: string;
  url: string;
  stargazers: { totalCount: number };
  latestRelease: { publishedAt: string };
  owner: { avatarUrl: string; login: string };
}
export interface IRepositoryResponse {
  search: {
    repositoryCount: number;
    edges: {
      node: IRepository;
    }[];
  };
}

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
