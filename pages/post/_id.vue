<template>
          <div class="read">
    <nav>
      <div class="navbar">
        <h4 class="logo"><span>story</span>tribe</h4>

        
      </div>
    </nav>

    <!-- MAIN -------------------   -->
    <main>
      <div class="hero">
        <div class="hero-container">
          <!-- LEFT--------------------------- -->
          <div class="left">
            <div class="sidebar">
              <a class="menu-item active">
                <span><i class="uil uil-home"></i></span>
                <h3>Home</h3>
              </a>
              <a class="menu-item">
                <span><i class="uil uil-bookmark"></i></span>
                <h3>Saved</h3>
              </a>
              <a class="menu-item">
                <span><i class="uil uil-envelope"></i></span>
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

              <label for="create-post" class="btn btn-primary" id="post"
                ><a href="./publish.html" style="color: white;">Write</a></label
              >
            </div>
          </div>

          <!-- MIDDLE--------------------------- -->
          <div class="feeds">
                    <!------- feed 1 ------->
                    {{JSON.stringify(viewBlog)}}
                    <div class="feed" v-for="item in viewBlog.data" :key="item.id">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo" style=" border:2px solid red">
                                    <img :src="item?.profile?.picture?.original?.url ?? 'https://github.com/DrVickie8/Team-Lens-Developers/blob/main/Lens-folder/images/Frame%202.png?raw=true'">
                                </div>
                                <!-- <div class="info">
                                    <h3>{{item?.profile?.name}}</h3>
                                    <small>{{item?.profile?.handle}} .  {{item.createdAt}}</small>

                                </div> -->
                            </div>
                            <span class="edit">
                                <i class="uil uil-book-open"></i> 2mins read
                            </span>
                        </div>
                        <!-- <div class="photo">
                            <h3 v-if="(item?.mainPost?.metadata?.description)">{{(item?.mainPost?.metadata?.description)?.slice(0,70 )}}...</h3>
                            <NuxtLink :to="'/post/' + item.id">
                                <img :src="item?.metadata[0]?.url ?? 'https://github.com/DrVickie8/Team-Lens-Developers/blob/main/Lens-folder/images/Frame%202.png?raw=true'" @error="replaceByDefault">
                                </NuxtLink>
                        </div> -->

                       

                    </div>

                   

                   

                </div>
          </div>
        </div>
      
    </main>
  </div>
</template>

<script>
import { useRoute, computed, ref, watchEffect, onMounted, watch, reactive} from '@nuxtjs/composition-api';
import {viewPublicationQuery, clientId} from "../../api"
import "@/styles/readpost.css"
import "@/styles/main.css"
import {formatIpfdImg} from "@/util"
    export default {
       layout: "no-sidebar",
        setup(){
            const viewBlog = reactive({
                data: {}
            })
            const route = useRoute()

            onMounted(()=>{
                getPublication()
            })

        const id = computed(() => route.value.params.id)

        const getPublication = async()=>{
                try {
                const userPublication= await clientId.request(viewPublicationQuery, {id:id.value})
                console.log("usy", userPublication)
                viewBlog.data = userPublication.publication
                console.log('vewy', viewBlog.data)
                // viewBlog.data.profile.picture.original.url = formatIpfdImg(viewBlog.data.profile.picture.original.url)
                } catch (error) {
                    
                }
        }

            return {viewBlog, id}
        }
    }
</script>"

<style scoped>

</style>