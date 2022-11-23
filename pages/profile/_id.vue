<template>
    <div>

    </div>
</template>

<script>
import { useRoute, computed} from '@nuxtjs/composition-api';
    export default {
        setup(){
            const route = useRoute

        //    export default function Profile() {
        //     
            
        //    }
        const userId = computed(() => route.value.params.id)
        console.log('ly', userId)
        }
    }
</script>

<style scoped>

</style>