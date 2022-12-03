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
                <!-- <div class="">

         <b-form-input
         v-model="getDetails.data.imageUrl"
          class="mb-3" 
          type="text"
          placeholder="Enter profile image url"
           />
           </div> -->

            <div class="">

           <input type="file" 
 @change="handleChange"
 class="form-control mb-3" id="customFile" />

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
import { useRoute, computed, ref, watchEffect, onMounted, watch, reactive, useRouter} from '@nuxtjs/composition-api';
import {createProfileAddress} from "../config/constant"
import profileAbi from "../config/createProfileAbi.json"
import {ethers} from "ethers"
import {userAddress} from "../store"
import { storeNFT} from "../upload.js"
  export default {
    setup(){
        const signer = ref('')
        const router = useRouter()
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
          const imageRef = ref("")
          const handleChange =async(values)=>{
          imageRef.value = values.target.files[0]
 }

             const onSubmit =async()=>{
              try {

                      const imageCid = await storeNFT(imageRef.value)
                    
                const contract = getContract(true)
        const data = [userAddress.value, getDetails.data.handleName, imageCid, "0x0000000000000000000000000000000000000000", "0x", 'ipfs://QmbqbUQJkZqt8m1akGMKJBY3FZC94Ec2FMJKsLmp6szMNH']
                const txn =  await contract.proxyCreateProfile(data, {gasLimit: 500000})
               
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

            return {getDetails, onSubmit, handleChange}
    }


  }
</script>