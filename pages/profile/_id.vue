<template>
    <div>

    </div>
</template>

<script>
import { useRoute, computed, ref, watchEffect, onMounted, watch} from '@nuxtjs/composition-api';
import {client, query, clientId, publicationsQuery} from "../../api"
import { request, gql } from 'graphql-request'
    export default {
        setup(){
            const route = useRoute()

        const id = computed(() => route.value.params.id)


    async function fetchProfile(){
    try {
        const response = await client.query(getProfiles, { id}).toPromise()
        console.log('response', response)
    } catch (error) {
        console.log('erry', error)
    }
}

     onMounted(() => {
                userQuery()
            
        })

        const userQuery =async()=>{
            try {
                 const qrl=  await clientId.request( query, {id:id.value}, )
                 const publicationsPost = await clientId.request( publicationsQuery)
                 console.log('heya', qrl)
                 console.log('omoKehindeGbegbon', publicationsPost)
            } catch (error) {
                 console.log('era', error)
            }
        }

        
     


            return {

            }
        }
    }
</script>

<style scoped>

</style>