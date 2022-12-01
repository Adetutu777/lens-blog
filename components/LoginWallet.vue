<template>
    <div>
            
            <button type="button" :class="`${isConnecting ? 'disabled' : ''} btn btn-lg btn-connect text-light`" @click="login">
              {{isConnecting ? 'connecting' : 'Connect Wallet'}}  
            </button>
    </div>
</template>

<script>
import { onMounted, ref, computed, reactive, useRouter} from '@nuxtjs/composition-api';
import { clientId, challenge, authenticate, createProfile } from "../api.js"
import {userAddress, isConnected, userAccessToken, isConnecting } from "../store"
import { ethers } from "ethers";
    export default {
        setup(){
             const router = useRouter()
              const signerOrProvider = ref('')
                        const address = ref('')
                        const token = ref('')

                            async function connect() {
    /* this allows the user to connect their wallet */
                            isConnecting.value =true
                                        try {
                                            const account = await window.ethereum.send('eth_requestAccounts')
                                                    if (account.result.length) {
                                                    address.value =account.result[0]
                                                    userAddress.value = address.value 
                                                    isConnected.value = true
                                                    }
                                        } catch (error) {
                                            console.log(error)
                                        } finally {
                                            isConnecting.value = false
                                        }
               
            }
                 async function login() {
                try {
                    await connect()
      /* first request the challenge from the API server */
            const challengeInfo = await clientId.request(challenge, { address:address.value })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      /* ask the user to sign a message with the challenge info returned from the server */
      const signature = await signer.signMessage(challengeInfo.challenge.text)
      /* authenticate the user */
      const authData = await clientId.request(authenticate, {address:address.value, signature})
      /* if user authentication is successful, you will receive an accessToken and refreshToken */
      const  { authenticate: { accessToken }} = authData
      
     token.value= accessToken
   userAccessToken.value = accessToken
        
    } catch (err) {
      console.log('Error signing in: ', err)
    }
  }
  return { signerOrProvider, address, token, login, isConnecting}
        }
    }
</script>

<style >

</style>