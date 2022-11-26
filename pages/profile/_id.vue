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



      
        
     


            return {

            }
        }
    }
</script>

<style scoped>

</style>