import { setContext } from '@apollo/client/link/context';
import { ApolloLink } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';
import { LocalStorageService } from '@services/localStorage/watchableStorage.service';

const uri = 'https://api.github.com/graphql';

const localStorageService = new LocalStorageService(window);

export const createGithubApollo = (httpLink: HttpLink): ApolloLink => {
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

  const error = onError(({ networkError, graphQLErrors }) => {
    const errorMsg = networkError?.message || graphQLErrors?.[0].message;
    // TODO: create a service to handle errors
    if (errorMsg) {
      console.error(errorMsg);
    }
  });

  return error.concat(link);
};
