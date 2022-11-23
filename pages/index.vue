<template>
<div class="mt-4">
 <button @click="onClickConnect">
    Connect Wallet
  </button>
<div class="container">
<div class="row">



<div class="col-md-4 mt-4" v-for="data in getProfiles.data" :key="data.id">
<div class="card">
      <div class="card-body">
      <img class="w-25" :src="data.url" alt="image" >
     <h3>{{data.name}}</h3>
     <p> {{data.bio}}</p>
        
        
</div>
</div>
    </div>
    </div>
</div>
</div>
</template>



<script>
import { onMounted, ref, computed, watchEffect, reactive} from '@nuxtjs/composition-api';
import {client, recommendProfiles} from '../api'
// import {signerProvider, signerOrProvider} from '../util'
    export default {
        setup(){
          const loading = ref(true)
          const ethWindowObj = ref('')
          const signerOrProvider = ref('')
          const isConnected = ref(false)
          const userAddress = ref('')
          const getProfiles = reactive({
            data:{

            }
          })

     const fetchProfiles = async() =>{
              try {
                const resp = await client.query(recommendProfiles).toPromise()
              const mappedData = resp?.data?.recommendedProfiles.map((i)=>{
                const CID = i.picture?.original?.url
                const getCid = CID ? CID.split('').slice(7).join('') : 'bafkreigfkue3cdeve7pa23vvsmp2lcmj32flksdvlrllt44gpl25bqhp6m'
                return {...i, 
                url: CID?.length === 66 ? 'https://ipfs.io/ipfs/'+ getCid : !CID?.length ?  'https://ipfs.io/ipfs/bafkreigfkue3cdeve7pa23vvsmp2lcmj32flksdvlrllt44gpl25bqhp6m' : CID
                // url:'https://ipfs.io/ipfs/'+ getCid
                } 
              })
            
              getProfiles.data = mappedData ?? getProfiles.data
              } catch (error) {
                console.log(error)
              }finally {
                loading.value = false
                }
              
            }

            watchEffect(() => {
               fetchProfiles()
        }, [])

        onMounted(()=>{
        signerOrProvider.value = window.ethereum

        })

             // function to connect to MetaMask
      const onClickConnect = async () => {
        try {
            // Will open the MetaMask UI
            const account = await signerOrProvider.value.send("eth_requestAccounts", []);
            isConnected.value = true;
            userAddress.value = account[0];
        } catch (error) {
            console.error(error);
            console.log(error.message)
        }
    }

          return{loading, getProfiles, onClickConnect , isConnected, userAddress}
        }
    }
</script>

<style scoped>

</style>
