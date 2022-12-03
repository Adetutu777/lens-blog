<template>
 <div class="" >

<div class="btn-secondary" >
                <b-button v-b-modal.modal-2>Create account</b-button>
                            
                        <b-modal id="modal-2" title="Login or Signup to storytribe">
                            <div class="">
                                <div class="" v-if="!userAccessToken">
                           <h2>Connect to your wallet</h2>
                        <p>This process connects you to a wallet that is already saved in your browser.</p>

                                        <LoginWallet :redirect=false />
                                    </div>
                                        <div class="" v-if="isConnected &&  userAccessToken">
                                           
                                            <div class="text-center">
                                                     <h5>Hello 👋 {{truncateEthAddress(userAddress)}}</h5>
                                                     <h5>Complete your Registration</h5>
                                                     <CreateForm />
                                            </div>

                                        </div>
                           <!-- <button type="button" class="btn btn-lg btn-connect text-light" @click="createAccount" >Connect Wallet</button> -->
                           <!-- <p class="text-center">New here? Sign up instead</p> -->
                           </div>

                           
                        </b-modal>

                        
            </div>
 </div>
</template>

<script>
import {userAddress, isConnected, userAccessToken } from "../store"
import {truncateEthAddress} from "../util"
export default {
setup(){



    return{isConnected, userAccessToken, userAddress, truncateEthAddress}
}
}
</script>


