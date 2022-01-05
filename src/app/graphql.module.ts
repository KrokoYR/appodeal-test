import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Apollo
import { Apollo } from 'apollo-angular';

import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { createGithubApollo } from './graphql/github.apollo';

@NgModule({
  exports: [HttpClientModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const githubLink = createGithubApollo(httpLink);

    // create github apollo client
    apollo.createNamed('github', {
      link: githubLink,
      cache: new InMemoryCache()
    });
  }
}
