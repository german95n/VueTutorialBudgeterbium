import * as components from './components';

export default [
  {
    path: '/',
    component: components.AccountsListView,
    name: 'accountsList'
  },
  {
    path: '/accounts/create',
    component: components.CreateEditAccount,
    name: 'createAccount'
  }
];
