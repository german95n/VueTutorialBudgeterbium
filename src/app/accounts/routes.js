import * as components from './components';

export default [
  {
    path: '/',
    component: components.AccountsList,
    name: 'accountsList'
  },
  {
    path: '/accounts/create',
    component: components.CreateUpdateAccount,
    name: 'createAccount' // note that we changed this since we are using separate routes for create and edit
  },
  {
    path: '/accounts/:accountId/update', // the URL accepts an accountId parameter
    component: components.CreateUpdateAccount,
    name: 'updateAccount',
    props: true
  }
];
