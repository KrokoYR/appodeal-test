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
