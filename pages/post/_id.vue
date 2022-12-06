<template>
    <div class="read">
    <nav>
      <div class="navbar">
        <h4 class="logo"><span>story</span>tribe</h4>

        <div class="search-bar">
          <i class="uil uil-search"></i>
          <input type="search" placeholder="Find your favourite blogs" />
        </div>

        <a class="profile">
          <div class="profile-photo">
            <img src="@/images/Ellipse 43.png" alt="pix 1" srcset="" />
          </div>
          <div class="handle">
            <h4>Miss Asake</h4>
            <p class="text-muted">@nkem_asake.lens</p>
          </div>
        </a>
      </div>
    </nav>

    <!-- MAIN -------------------   -->
    <main>
      <div class="hero">
        <div class="hero-container">
          <!-- LEFT--------------------------- -->
          <div class="left">
            <div class="sidebar">

              <NuxtLink to="/blogs" class="menu-item">
                <span><i class="uil uil-envelope"></i></span>
                <h3>Home</h3>
              </NuxtLink>
              <NuxtLink class="menu-item" to="/help">
                        <span><i class="uil uil-question-circle"></i></span>
                        <h3>Notification</h3>
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

              <button class=" mt-2 mb-3 btn btn-primary" @click.prevent="$router.push('/post/create')">Write</button>
              <!-- > -->
            </div>
          </div>

              
          <!-- MIDDLE--------------------------- -->
          <div class="middle">
            <div class="feeds" >
              <div class="feed" >
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src="@/images/Ellipse 44.png" alt="" />
                    </div>
                    <div class="details">
                      <h5>{{viewBlog?.data?.profile?.name}}</h5>
                    
                      <small>{{viewBlog?.data?.profile?.handle}} .  {{dateFormatter(viewBlog?.data?.createdAt)}}</small>
                    </div>
                  </div>
                  <div class="info">
                    <span><i class="uil uil-book-open"></i></span
                    ><small>2min read</small>
                    <span class="adjust"><i class="uil uil-bookmark"></i></span>
                  </div>
                </div>
                <div class="title ">
                  <h4 class="mb-4">{{viewBlog?.data?.metadata?.description}}</h4>
                </div>
                <!-- {{viewBlog?.data?.media?.[0]?.original?.url}} -->
                <div class="photo">
                  <img :src="viewBlog?.data?.blogUrl ?? 'https://github.com/DrVickie8/Team-Lens-Developers/blob/main/Lens-folder/images/Frame%202.png?raw=true'" @error="replaceByDefault">
                </div>                
                <div class="blog">                  
                  <p>{{viewBlog?.data?.metadata?.content}}</p>
                </div>
              </div>
              <div class="feed">
                <div class="comment">
                  <div class="all">
                    <div class="grp1">
                      <div class="grp1a">
                        <span><i class="uil uil-comment-alt-lines"></i></span
                        >700
                      </div>
                      <div class="grp1b">
                        <span><i class="uil uil-align-center-justify"></i></span
                        >Sort by
                      </div>
                    </div>
                    <div class="grp2">
                      <div class="flex">
                        <div class="profile-photo">
                          <img src="@/images/Ellipse 43.png" alt="" />
                        </div>
                        <div class="flex2" id="add">
                          <input
                            type="text"
                            placeholder="Add a comment"
                            style="
                              font-size: 18px;
                              background: transparent;
                              margin-left: -1rem;
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="grp3">
                      <div class="flex3">
                        <button id="cancel">Cancel</button>
                        <button>Comment</button>
                      </div>
                    </div>
                    <div class="profiles">
                      <div class="ellipses">
                        <div class="pro1">
                          <div class="sub">
                            <img
                              src="@/images/Ellipse 53.png"
                              alt=""
                              class="profile-photo1"
                            />
                          </div>
                          <div class="sub2">
                            <small id="br">@milkway.lens</small><br />
                            <small>God when will I be a billionaire ooo</small>
                            <div class="sub2a">
                              <span><i class="uil uil-heart"></i>20</span> <p>Reply</p>
                            </div>
                            <div class="sub2b">
                              <span><i class="uil uil-triangle"></i></span><p>20
                                replies</p>
                            </div>
                          </div>
                        </div>
                        <div class="ellipses-main">
                          <span><i class="uil uil-ellipsis-v"></i></span>
                        </div>
                      </div>

               
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- RIGHT--------------------------- -->
            <div class="main-right">
              <div class="right">
                <div class="content">
                  <div class="first">
                    <div class="profile-photo">
                      <img src="@/images/Ellipse 46.png" alt="" />
                    </div>
                    <div class="funds">
                      <h5>{{viewBlog?.data?.profile?.name}}</h5>
                      <small>
                    {{viewBlog?.data?.profile?.handle}}
                    
                      </small>
                    </div>
                  </div>
                  <div class="second">
                    <p>
                   {{viewBlog?.data?.profile?.bio}}
                    </p>
                  </div>
                  <div class="third">
                    <div class="fig1 mr-3">
                      <h5>
                
                      {{viewBlog?.data?.profile?.stats?.totalFollowers}}
                      </h5>
                      <p>Followers</p>
                    </div>
                    <div class="fig2">
                      <h5>
                     {{viewBlog?.data?.profile?.stats?.totalPublications}}
                      </h5>
                      <p>Publications</p>
                    </div>
                  </div>
                  <!-- <label for="create-post" class="btn btn-primary" id="post"
                    >Follow</label
                  > -->
                </div>
              </div>
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
// import "@/styles/main.css"
import {formatIpfdImg, dateFormatter} from "@/util"
    export default {
       layout: "no-sidebar",
        setup(){
          const viewBlog = reactive({
            data:{}
          })
            
            const route = useRoute()

            onMounted(()=>{
                getPublication()
            })

        const id = computed(() => route.value.params.id)

        const getPublication = async()=>{
                try {
                const userPublication= await clientId.request(viewPublicationQuery, {id:id.value})
                viewBlog.data = userPublication.publication
                const blogPicture = viewBlog?.data?.metadata?.media?.[0]?.original?.url
                const blogUrl = blogPicture.startsWith('ipfs') ? formatIpfdImg(blogPicture) : blogPicture
                viewBlog.data.blogUrl= blogUrl
                // viewBlog?.data?.metadata?.media?.[0]?.original?.url = formatIpfdImg(viewBlog.data.profile.picture.original.url)
                } catch (error) {
                    
                }
        }
     const replaceByDefault=(e)=>{
                  e.target.src = "https://github.com/DrVickie8/Team-Lens-Developers/blob/main/Lens-folder/images/Frame%206.png?raw=true"
        }
            return {viewBlog, id, replaceByDefault, dateFormatter}
        }
    }
</script>"

<style scoped>

</style>