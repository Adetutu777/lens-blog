<template>
    <div>
    <!-- <ConnectWallet /> -->
    
    <div class="mt-4">
    <!-- <div class=""><h6>{{Please you are on Mumbai network}}</h6></div> -->
<div class="homepage">
    <nav>
    
        
       <header class="navbar-header">
        <!-- <div class="nav-left">
            <h4 class="logo">
                <span>story</span>tribe
            </h4>
        </div> -->
        <!-- https://storybite.netlify.app/blogs -->
        <NuxtLink to="/blogs">
        <img src="@/images/storytribe.svg"  alt="image">
        </NuxtLink>


        <div class="search-bar">
            <i class="uil uil-search"></i>
            <input type="search" placeholder="Find your favourite blogs">
        </div>

        <profileId />
    </header>
    </nav>

    <!----------hero section--------->
    <div class="hero">
        <div class="hero-container">
            <!----------left--------->
            <div class="left">
                <div class="sidebar">
                    <NuxtLink to="/blogs" class="menu-item active">
                        <span><i class="uil uil-estate"></i></span>
                        <h3>Home</h3>
                    </NuxtLink>

                   

                    <a class="menu-item">
                        <span><i class="uil uil-envelope-add"></i></span>
                        <h3>Notifications</h3>
                    </a>

                    <NuxtLink class="menu-item" to="/help">
                        <span><i class="uil uil-setting"></i></span>
                        <h3>Settings</h3>
                   </NuxtLink>

                  
                    <NuxtLink class=" menu-item" :to="`/profile/${defaultProfile?.data?.ownedBy}`">
                        <span><i class="uil uil-user-circle"></i></span>
                        <h3>Profile</h3>
                    </NuxtLink>

                    <NuxtLink class="menu-item" to="/help">
                        <span><i class="uil uil-question-circle"></i></span>
                        <h3>Help</h3>
                    </NuxtLink>
                        
                       <button class=" mt-2 mb-3 btn btn-primary"
                        @click="gotoCreate"
            
                        >Write</button>
                        
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
               <Nuxt />
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
    </div>
</template>

<script>
import { onMounted, ref, computed, watchEffect, reactive} from '@nuxtjs/composition-api';
import {ethereumObj, defaultProfile}  from "../store"
import "@/styles/main.css"

export default{
    setup (){

        const gotoCreate=()=>{
            window.location.replace("/post/create")
        }

        // onMounted(()=>{
        //     ethereumObj.value = window.ethereum
        // })

        // const signerOrProvider = new ethers.providers.Web3Provider(ethereumObj.value);
        // const signer = signerOrProvider.getSigner()
        // return {}
        
        return {
            defaultProfile,
            gotoCreate
        }
    }
}

         
</script>

<style>
.profile2{
    background: 1px solid red;
}

</style>