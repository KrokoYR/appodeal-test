import { setContext } from '@apollo/client/link/context';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Apollo
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { localStorageService } from './services/localStorage/localStorage.service';

const uri = 'https://api.github.com/graphql';

@NgModule({
  exports: [HttpClientModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const basic = setContext(() => ({
      headers: {
        Accept: 'charset=utf-8'
      }
    }));

    const auth = setContext(() => {
      const token = localStorageService.get('token');

      if (token === null) {
        return {};
      } else {
        return {
          headers: {
            Authorization: `bearer ${token}`
          }
        };
      }
    });

    const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);

    // create Apollo
    apollo.createNamed('github', {
      link,
      cache: new InMemoryCache()
    });
  }
}
