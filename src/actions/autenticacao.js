import { LOGIN } from './types';

export const Autenticacao = autenticacao => {
  return {
    type: LOGIN,
    username: autenticacao
  }
}