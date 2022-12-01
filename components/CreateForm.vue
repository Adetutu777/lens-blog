<template>
  <div>
    <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
      <form action="" @submit.prevent="onSubmit">
              <!-- <ValidationProvider rules="required" v-slot="{ errors }"> -->
                <div class="">
         <b-form-input
         v-model="getDetails.data.handleName"
         placeholder="Enter your handle"
          class="mb-3" 
          type="text"
           />
           </div>
            <!-- <span class="" style="color:red">{{ errors[0] }}</span>
           </ValidationProvider>  -->
              <!-- <ValidationProvider rules="required" v-slot="{ errors }"> -->
                <div class="">
         <b-form-input
         v-model="getDetails.data.imageUrl"
          class="mb-3" 
          type="text"
          placeholder="Enter profile image url"
           />
           </div>
           
           <b-button
                class="py-2"
          type="submit">
          Submit
          </b-button>
            <!-- <span class="" style="color:red">{{ errors[0] }}</span>
           </ValidationProvider>  -->
           
      </form>
       
      
  </div>
</template>

<script>
import { useRoute, computed, ref, watchEffect, onMounted, watch, reactive} from '@nuxtjs/composition-api';
import {createProfileAddress} from "../config/constant"
import profileAbi from "../config/createProfileAbi.json"
import {ethers} from "ethers"
import {userAddress} from "../store"
  export default {
    setup(){
        const signer = ref('')
       const getDetails =reactive({
        data: {
                    // walletAddress: '', 
                    handleName: '',
                        imageUrl: '', 
                        // followModule: '',
        }
    })
    onMounted(()=>{
      const signerOrProvider = new ethers.providers.Web3Provider(window.ethereum);
            signer.value = signerOrProvider?.getSigner()
    })

             const onSubmit =async()=>{
              try {
                const contract = getContract(true)
        const data = [userAddress.value, getDetails.data.handleName, getDetails.data.imageUrl, "0x0000000000000000000000000000000000000000", "0x", '']
                const txn =  await contract.proxyCreateProfile(data)
              const newTxn =  await txn.wait()
        if (newTxn.status) {
          router.push("/blogs")
        }
              } catch (error) {
                console.log(error)
              }
        

    }

    const getContract = (isSigner = false, contractAddress = createProfileAddress, abi = profileAbi, ) => {
            const newProvider = isSigner ? signer.value : provider;
            return new ethers.Contract(contractAddress, abi, newProvider);
        }

            return {getDetails, onSubmit,}
    }


  }
</script>