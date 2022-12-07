<template>
    <div>
<div class="homepage">
    <header>
        <div class="nav-left">
            <h4 class="logo">
                <span>story</span>tribe
            </h4>
        </div>


        <div class="search-bar">
            <i class="uil uil-search"></i>
            <input type="search" placeholder="Find your favourite blogs">
        </div>

      <profileId />
    </header>

    <!----------hero section--------->
    <div class="hero">
        <div class="hero-container">
            <!----------left--------->
            <div class="left">
                <div class="sidebar">

                    <NuxtLink to="/blogs" class="menu-item">
                <span><i class="uil uil-envelope"></i></span>
                <h3>Home</h3>
              </NuxtLink>

                    <NuxtLink class="menu-item" to="/help">
                        <span><i class="uil uil-question-circle"></i></span>
                        <h3>Notifications</h3>
                    </NuxtLink>

                    <NuxtLink class="menu-item" to="/help">
                        <span><i class="uil uil-question-circle"></i></span>
                        <h3>Settings</h3>
                    </NuxtLink>

                    <a class="menu-item">
                        <span><i class="uil uil-user-circle"></i></span>
                        <h3>Profile</h3>
                    </a>

                    <NuxtLink class="menu-item" to="/help">
                        <span><i class="uil uil-question-circle"></i></span>
                        <h3>Help</h3>
                    </NuxtLink>

                    <NuxtLink to="/post/create" class="btn btn-primary" id="post" >
                    Write
                    </NuxtLink>
                </div>

            </div>

            <!----------middle--------->
            <div class="middle">
                <!-------------- feeds --------------->
                <div class="feeds">
                    <!------- feed 1 ------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="body-photo">
                                    <img src="images/Ellipse 43.png">
                                </div>
                                <div class="info">
                                    <h3>
                                    {{userData.data.handle}}
                                    </h3>
                                    <!-- <small>@nkem_asake</small> -->
                                    <p>{{
                                        userData?.data.stats?.totalFollowers ?? 0

                                    }} followers</p>
                                </div>
                            </div>
                        </div>

                        <div>
  <b-tabs content-clss="mt-3">
    <b-tab @click="getValue(0)" title="Post" active></b-tab>
    <b-tab @click="getValue(1)" title="Following"></b-tab>
    <b-tab @click="getValue(2)" title="About"></b-tab>
  </b-tabs>
  
                                </div>
                    </div>
                </div>
                          
                <div class="" v-if="currentTab==0">
                
                <div class="" v-if="postsData.length == 0">Nothing here...</div>
                <div class="  " v-for="item in postsData" :key="item.id">      
                   <div class="post-tab  p-2 mt-2">
                    <NuxtLink :to="`/post/${item?.id}`">
                    {{item?.metadata?.content}}
                    </NuxtLink>
                    </div>
                 
                </div>
                </div>
              
                <div clss="photo" v-if="currentTab==1">
                    <p>{{userData?.data?.stats?.totalFollowing}} followers</p>
                </div>

                <div clss="photo" v-if="currentTab==2">
               
                    <p>{{userData?.data?.bio}} </p>
                
                </div>
            </div>
        </div>
</div>
    </div>
    </div>
</template>

<script>
import { useRoute,   onMounted,  reactive, computed, ref} from '@nuxtjs/composition-api';
import {clientId,  defaultProfileQuery, userPublicationsQuery} from "../../api"

import "@/styles/profile.css"
    export default {
         layout:"no-sidebar",
        setup(){
            const route = useRoute()
            const currentTab = ref(0)
            const userData = reactive({
                data:{}
            })
           const postsData = ref([])
        const id = computed(() => route.value.params.id)

        onMounted(async()=>{

            const data = await  clientId.request(defaultProfileQuery, {
                address:id.value
            })
            const posts = await  clientId.request(userPublicationsQuery, {
                id:data.defaultProfile.id
            })


            userData.data = data.defaultProfile
            const filtered = posts.publications.items.filter(post => post.__typename==='Post')
         
            postsData.value = filtered


        })

        const getValue =(val)=>{
            currentTab.value = val
        }

            return { currentTab, getValue,
                    userData,
                    postsData,
            }
        }
    }
</script>

<style>
.post-tab{
    display: inline-flex;
    align-items: center;    
border: 1.5px solid #0c2acb;
border-radius: 5px;
flex-direction:column;;
}
</style>