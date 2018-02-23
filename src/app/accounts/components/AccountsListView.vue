<template>
  <div id="accounts-list-view">
    I'm a list of accounts!

    <router-link :to="{ name: 'createAccount' }">Add an account</router-link>

    <ul>
      <li v-bind:key="no-template-key" v-for="(account, key) in accounts">
        {{ account.name }}
        <span class="tag is-small is-info">{{ categories[account.category] }}</span>
        ${{ account.balance }}
        <a @click="confirmDeleteAccount(account)">Delete</a>
        <router-link :to="{ name: 'editAccount', params: { accountId: account.id } }">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { CATEGORIES } from '../../../consts';

export default {
  name: 'accounts-list-view',

  data () {
    return {
      categories: CATEGORIES
    };
  },

  mounted () {
    this.loadAccounts();
  },

  methods: {
    // this imports our vuex actions and maps them to methods on this component
    ...mapActions([
      'deleteAccount',
      'loadAccounts'
    ]),

    confirmDeleteAccount (account) {
      // note that these are backticks and not quotation marks
      if (confirm(`Are you sure you want to delete ${account.name}?`)) {
        this.deleteAccount(account);
      }
    }
  },

  computed: {
    ...mapState({
      'accounts': state => state.accounts.accounts
    })
  }
};
</script>

<style scoped lang='scss'>
// #accounts-list-view {
// }
</style>
