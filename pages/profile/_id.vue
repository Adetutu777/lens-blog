<template>
    <div>

    </div>
</template>

<script>
import { useRoute, computed, ref, watchEffect, onMounted, watch} from '@nuxtjs/composition-api';
import {client, getProfiles} from "../../api"
    export default {
        setup(){
            const route = useRoute()

        const id = computed(() => route.value.params.id)

        

    watch(() => {
           
                fetchProfile()
            
        }, [id])


    async function fetchProfile(){
    try {
        const response = await client.query(getProfiles, { id}).toPromise()
        console.log('response', response)
    } catch (error) {
        console.log('erry', error)
    }
}


        }
    }
</script>

<style scoped>

</style>