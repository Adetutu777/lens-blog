import {ref, reactive} from '@nuxtjs/composition-api'

export const userAddress = ref('')
export const isConnected = ref('')
export const ethereumObj = ref('')
export const userAccessToken = ref('')
export const isConnecting = ref(false)
export const  profileId = ref('')
export const defaultProfile = reactive({
    data:{}
})