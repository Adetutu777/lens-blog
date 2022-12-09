<template>
  <div>
  <ValidationObserver v-slot="{ invalid }">
      <form action="" @submit.prevent="onSubmit">
                <div class="">
                <ValidationProvider rules="required" v-slot="{ errors }">
           <div class="input-group mt-4">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div>
  <input
  v-model="getDetails.data.handleName" 
          type="text"
    class="form-control" placeholder="e.g adetutu" aria-label="Username" aria-describedby="basic-addon1">
  </div>
<span class="" style="color:red">{{ errors[0] }}</span>
           </ValidationProvider> <br> 
           </div>


<!-- <ValidationProvider rules="image" v-slot="{ errors, validate }">
  <input type="file" @change="validate">
  <span>{{ errors[0] }}</span>
</ValidationProvider> -->
            <div class="">
             <ValidationProvider rules="image" v-slot="{ errors, validate }">
           <input type="file" 
           required
            @change="(e)=>handleChange(e, validate)"
            class="form-control" id="customFile" />
            <span class="" style="color:red">{{ errors[0] }}</span>
           </ValidationProvider> <br> 
           </div>
           
           <b-button
                
                class="py-2 mt-4 submit-btn"
                 :disabled="!!!imageRef || invalid || sendingBtn"
          type="submit">
          {{ sendingBtn ? "sending.....": "Submit" }}
          </b-button>
           
      </form>
  </ValidationObserver>
      
  </div>
</template>

<script>
import { useRoute, computed, ref, watchEffect, onMounted, watch, reactive, useRouter} from '@nuxtjs/composition-api';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import {createProfileAddress} from "../config/constant"
import profileAbi from "../config/createProfileAbi.json"
import {ethers} from "ethers"
import {userAddress} from "../store"
import { storeNFT} from "../upload.js"
import {wait} from "../helpers"
  export default {
    components: { ValidationProvider, ValidationObserver },
    setup(){
        const signer = ref('')
        const sendingBtn = ref(false)
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
          const handleChange =async(values, validate)=>{
          const valid =  await validate(values)
          imageRef.value = values.target.files[0]
 }

             const onSubmit =async()=>{
              sendingBtn.value = true;
              try {

                      const imageCid = await storeNFT(imageRef.value)
                    
                const contract = getContract(true)
        const data = [userAddress.value, getDetails.data.handleName,imageCid, "0x0000000000000000000000000000000000000000", "0x", 'ipfs://QmbqbUQJkZqt8m1akGMKJBY3FZC94Ec2FMJKsLmp6szMNH']
        
        await wait(10000)
                const txn =  await contract.proxyCreateProfile(data, {gasLimit: 500000})
              const newTxn =  await txn.wait()
              sendingBtn.value= false
        if (newTxn.status) {
          router.push("/blogs")
        }
              } catch (error) {
                console.log(error)
                sendingBtn.value= false
              }
        

    }

    const getContract = (isSigner = false, contractAddress = createProfileAddress, abi = profileAbi, ) => {
            const newProvider = isSigner ? signer.value : provider;
            return new ethers.Contract(contractAddress, abi, newProvider);
        }

            return {getDetails, onSubmit,  sendingBtn, imageRef, handleChange}
    }


  }
</script>

<style>
.submit-btn{
  background: #0C2ACB;
}
</style>