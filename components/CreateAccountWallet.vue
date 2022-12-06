<template>
 <div class="" >

<div class="" >
                <b-button v-b-modal.modal-2 class="create-btn"> Create account</b-button>
                            
                        <b-modal id="modal-2" title="Login or Signup to storytribe">
                        
                            <div class="">
                                <div class="" v-if="!userAccessToken">
                            <h2 class="text-center mb-2">Connect to your wallet</h2>
                           <p class="text-center pb-3">This process connects you to a wallet that
                           <br>
                            is already saved in your browser.</p>
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

                             <template #modal-footer>
   <h6 class="mx-auto network" >Please ensure you are on Mumbai Network</h6>  
      </template>
                           
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

<style>
.create-btn{
    border-radius: 20px;
    color: white;
    background: #0C2ACB;
    margin-left:1rem;
}

.network {
    color:#0c2acb;
}
</style>


