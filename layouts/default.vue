<template>
    <div>
    <ConnectWallet />
        <Nuxt />
    </div>
</template>

<script>
import { onMounted, ref, computed, watchEffect, reactive} from '@nuxtjs/composition-api';
import {ethereumObj} from "../store"
export default{
    setup (){

        onMounted(()=>{
            // console.log(window, 'keny')
            // ethereumObj.value = window.ethereum
        })
        return {}
    }
}

         
</script>

<style scoped>

</style>