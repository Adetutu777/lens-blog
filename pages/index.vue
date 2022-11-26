<template>
<div class="mt-4">
<div class="homepage">
    <nav>
        <div class="navbar">
            <h4 class="logo">
                <span>story</span>tribe
            </h4>

            <div class="search-bar">
                <i class="uil uil-search"></i>
                <input type="search" placeholder="Find your favourite blogs">
            </div>

            <a class="profile">
                <div class="profile-photo">
                    <img src="@/images/Ellipse 43.png" alt="pix 1">
                </div>
                <div class="handle">
                    <h4>Miss Asake</h4>
                    <p class="text-muted">@nkem_asake.lens</p>
                </div>
            </a>

        </div>
    </nav>

    <!----------hero section--------->
    <div class="hero">
        <div class="hero-container">
            <!----------left--------->
            <div class="left">
                <div class="sidebar">
                    <a class="menu-item active">
                        <span><i class="uil uil-estate"></i></span>
                        <h3>Home</h3>
                    </a>

                    <a class="menu-item">
                        <span><i class="uil uil-bookmark"></i></span>
                        <h3>Saved</h3>
                    </a>

                    <a class="menu-item">
                        <span><i class="uil uil-envelope-add"></i></span>
                        <h3>Notifications</h3>
                    </a>

                    <a class="menu-item">
                        <span><i class="uil uil-setting"></i></span>
                        <h3>Settings</h3>
                    </a>

                    <a class="menu-item">
                        <span><i class="uil uil-user-circle"></i></span>
                        <h3>Profile</h3>
                    </a>

                    <a class="menu-item">
                        <span><i class="uil uil-question-circle"></i></span>
                        <h3>Help</h3>
                    </a>

                    <label for="create-post" class="btn btn-primary" id="post">Write</label>
                </div>

            </div>

            <!----------middle--------->
            <div class="middle">
                <!-------------- middle header ---------------->
                <div class="post">
                    <a class="new active">
                        <span><i class="uil uil-award-alt"></i></span>
                        <h3>New</h3>
                    </a>
                    <a class="new">
                        <span><i class="uil uil-panel-add"></i></span>
                        <h3>Top</h3>
                    </a>
                    <a class="new">
                        <span><i class="uil uil-clock"></i></span>
                        <h3>History</h3>
                    </a>
                </div>

                <!-------------- feeds --------------->
                <div class="feeds">
                    <!------- feed 1 ------->
                    <!-- {{JSON.stringify(publications)}} -->
                    <div class="feed" v-for="item in publications.data" :key="item.id">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="@/images/Ellipse 44.png">
                                </div>
                                <div class="info">
                                    <h3>{{item?.profile?.name}}</h3>
                                    <small>{{item?.profile?.handle}} .  {{item.createdAt}}</small>

                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-book-open"></i> 2mins read
                            </span>
                        </div>
                        <div class="photo">
                            <h3 v-if="(item?.mainPost?.metadata?.description)">{{(item?.mainPost?.metadata?.description)?.slice(0,70 )}}...</h3>
                            <!-- <a href="read.html"> -->
                                 <!-- <img :src="item.logoPath" @error="replaceByDefault"> -->
                                <img :src="item?.metadata[0]?.url ?? 'https://github.com/DrVickie8/Team-Lens-Developers/blob/main/Lens-folder/images/Frame%202.png?raw=true'" @error="replaceByDefault">
                                <!-- </a> -->
                        </div>

                        <div class="action-button" >
                            <div class="interaction-button">
                                <span><i class="uil uil-bookmark"></i></span>
                                <h5 v-for="val in item?.mainPost?.metadata?.attribute" :key="val.value">{{val.value}}</h5>
                                
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-heart"></i></span>
                                <h5>{{item.stats.totalUpvotes}}</h5>
                            </div>
                        </div>

                    </div>

                   

                   

                </div>
            </div>


            <!----------right--------->
            <div class="right">
                <div class="messages">
                    <div class="heading">
                        <h4>Trending Topics</h4>
                    </div>

                    <div class="category">
                        <p class="details">Chivalry is dead</p>
                        <p class="details">How to prepare for WW3</p>
                        <p class="details">Rema's concert</p>
                        <p class="details">Nick Minaj</p>
                        <p class="details">Peter Obi</p>
                        <p class="details">World Cup</p>
                    </div>
                    <label for="create-post" class="btn btn-primary" id="post">Show more</label>
                </div>
            </div>
        </div>
    </div>


</div>

</div>
</template>



<script>
import { onMounted, ref, computed, watchEffect, reactive} from '@nuxtjs/composition-api';
import {client, recommendProfiles, clientId, publicationsQuery} from '../api'
import "../main.css"

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

      const userQuery =async()=>{
            try {
              const getProfilesId = await clientId.request(recommendProfiles)
              const ids= getProfilesId.recommendedProfiles.map((i)=> i.id)
                 const publicationsPost = await clientId.request( publicationsQuery, {ids} )
                 
                    const mappedData = publicationsPost?.publications?.items.map((i)=>{
                        const dataMap = i.metadata.media.map((j)=>{
                             const CID = j.original?.url
                             const getCid = CID ? CID.split('').slice(7).join('') : 'bafkreigfkue3cdeve7pa23vvsmp2lcmj32flksdvlrllt44gpl25bqhp6m'
                             console.log('cidy', getCid)
                             console.log('dic', CID)
                             return {...j, 
                                    url: CID?.length === (66 || 53)? 'https://ipfs.io/ipfs/'+ getCid : !CID?.length ?  'https://ipfs.io/ipfs/bafkreigfkue3cdeve7pa23vvsmp2lcmj32flksdvlrllt44gpl25bqhp6m' : j.original.url
                                    } 
                        })
                        console.log('tay', dataMap)
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

<style scoped>

</style>
