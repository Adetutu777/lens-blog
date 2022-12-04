<template>
<div class="mt-4">
    <!-- <button @click="onClickConnect" class="bg-info"> connect ijn </button> -->
        <div>
                <!-------------- feeds --------------->
                <div class="feeds">
                    <!------- feed 1 ------->
                    <div class="feed" v-for="item in publications.data" :key="item.id">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img :src="item?.profile?.coverPicture?.original?.url ?? 'https://github.com/DrVickie8/Team-Lens-Developers/blob/main/Lens-folder/images/Frame%202.png?raw=true'">
                                </div>
                                <NuxtLink :to="`/profile/${item?.profile?.ownedBy}`">
                              
                                <div class="info">
                                    <h3>{{item?.profile?.name}}</h3>
                                    <small>{{item?.profile?.handle}} .  {{item.createdAt}}</small>                                  
                                </div>
                                  </NuxtLink>
                            </div>
                            <span class="edit">
                                <i class="uil uil-book-open"></i> 2mins read
                            </span>
                        </div>
                        <div class="photo">

                            <h3 v-if="(item?.mainPost?.metadata?.description)">{{(item?.mainPost?.metadata?.description)?.slice(0,70 )}}...</h3>

                            <NuxtLink :to="'/post/' + item?.id">
                                <img :src="item?.metadata?.[0]?.url ?? 'https://github.com/DrVickie8/Team-Lens-Developers/blob/main/Lens-folder/images/Frame%202.png?raw=true'" @error="replaceByDefault">
                                </NuxtLink>
                        </div>

                        <div class="action-button" >
                            <div class="interaction-button">
                                <span><i class="uil uil-bookmark"></i></span>
                                <h5 v-for="val in item?.mainPost?.metadata?.attribute" :key="val.value">{{val.value}}</h5>
                                
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-heart"></i></span>
                                <h5>{{item?.stats?.totalUpvotes}}</h5>
                            </div>
                        </div>

                    </div>

                   

                   

                </div>
            </div>
   
        </div>
</template>



<script>
import { onMounted, ref, computed, watchEffect, reactive} from '@nuxtjs/composition-api';
import {client, recommendProfiles, clientId, publicationsQuery} from '../../api'
import {formatIpfdImg} from "@/util"

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
          const publications = reactive({
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
        userQuery()
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

    // const formatIpfdImg =(ipfs)=>{
    //     const CID = ipfs
    //      const getCid =  CID? CID.split('').slice(7).join('') : 'bafkreigfkue3cdeve7pa23vvsmp2lcmj32flksdvlrllt44gpl25bqhp6m'
    //    const url =  CID?.length === (66 || 53)? 'https://ipfs.io/ipfs/'+ getCid : !CID?.length ?  'https://ipfs.io/ipfs/bafkreigfkue3cdeve7pa23vvsmp2lcmj32flksdvlrllt44gpl25bqhp6m' : CID

    //    return url
    // }

      const userQuery =async()=>{
            try {
              const getProfilesId = await clientId.request(recommendProfiles)
              const ids= getProfilesId?.recommendedProfiles?.map((i)=> i?.id)
                 const publicationsPost = await clientId?.request( publicationsQuery, {ids} )
                 console.log('gety', publicationsPost)
                    const mappedData = publicationsPost?.publications?.items.filter((i)=>i.__typename=='Post')?.map((i)=>{
                        const dataMap = i?.metadata?.media?.map((j)=>{
                             return {...j, 
                                   url:formatIpfdImg(j?.original?.url)
                                    } 
                        })
                        return {
                           ...i,
                           metadata: dataMap
                            }
              })
                 publications.data = mappedData ?? publications.data
                 console.log('ýat', publications.data)
            } catch (error) {
                 console.log('error', error)
            }
        }

        const replaceByDefault=(e)=>{
                  e.target.src = "https://github.com/DrVickie8/Team-Lens-Developers/blob/main/Lens-folder/images/Frame%206.png?raw=true"
        }
          return{loading, getProfiles, onClickConnect , isConnected, userAddress, publications, replaceByDefault}
        }
    }
</script>

<style >

</style>
