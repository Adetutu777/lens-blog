<template>
  <div v-if="account">
    Connected to {{ ensName ?? account.address }}
  </div>
  <button v-else @click="connect">
    Connect Wallet
  </button>
</template>

<script setup>
import { onMounted, ref, computed, watchEffect, reactive} from '@nuxtjs/composition-api';
import { useAccount, useConnect, useEnsName } from 'vagmi'
import { InjectedConnector } from 'vagmi/connectors/injected'

const { data: account } = useAccount()
const { data: ensName } = useEnsName({
  address: computed(() => account.value?.address),
})
const { connect } = useConnect({
  connector: new InjectedConnector(),
})
</script>


