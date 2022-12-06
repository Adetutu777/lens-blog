<template>
    <div>
         <NuxtLink class="profile" :to="`/profile/${defaultProfile?.data?.ownedBy}`">
      
            <div class="profile-photo">
                <img class="w-75" src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png" alt="pix 1" srcset="">
            </div>
            <div class="handle">
                <h4>
            {{defaultProfile?.data?.id}}
                </h4>              
                <h5 class="text-muted ">
                {{defaultProfile?.data?.handle}}
                
              
                </h5>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
import {defaultProfile}  from "../store"
import "@/styles/main.css"
    export default {
        setup(){


                 return { defaultProfile }
        }
    }
</script>

<style>

</style>