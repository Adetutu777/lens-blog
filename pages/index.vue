<template>
<div class="mt-4">
<!-- {{JSON.stringify(getProfiles.data)}} -->
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
    export default {
        setup(){
          const loading = ref(true)
          const getProfiles = reactive({
            data:{

            }
          })

     const fetchProfiles = async() =>{
              try {
                const resp = await client.query(recommendProfiles).toPromise()
              const mappedData = resp?.data?.recommendedProfiles.map((i)=>{
                const CID = i.picture?.original?.url
                console.log(CID, CID?.length, 'kky')
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

             

          return{loading, getProfiles}
        }
    }
</script>

<style scoped>

</style>
