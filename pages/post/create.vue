<template>
    <div>
    <!---------------- NAVBAR ---------------->

  

    <main>

  
<form  >


<div class="d-flex justify-content-between container mt-5">
<div>
<img src="@/images/storytribe.svg" alt="sotry logo" />
</div>

<div class="d-flex">
    <NuxtLink to="/blogs">
       <button type="button" class="btn btn-primary" id="post1">
            Cancel           
            </button>
        </NuxtLink>

          <!-- <button  class="btn btn-primary ml-2" id="post3"
          type="submit"
            >
          
              Publish
            
            </button> -->

            <b-button v-b-modal.modal-3 class="create-btn"> Publish</b-button>
                            
                        <b-modal id="modal-3" title="You’re now publishing">
                      
                                <div v-if="errorPublishing" class="text-center">
                                Error try again
                                </div>
                              
                                <div class="text-center">
                           <b-button  class=" create-btn text-center" @click="postData">
                           {{
                            isPublishing ? "Publishing" : "Publish"
                           }}
                           </b-button>
                                </div>
                           <!-- <b-button  class="create-btn text-center" @click="postData"> Publish</b-button> -->

                             <template #modal-footer>
   {{''}} 
      </template>
                           
                        </b-modal>
       
</div>
</div>
  <!-- <nav class="nav-header-top">
      <div class="navbar nav-top" id="topnav">
        <h4 class="logo"><span>story</span>tribe</h4>

        <div class="labels">

         <NuxtLink to="/blogs">
       <button type="button" class="btn btn-primary" id="post1">
            Cancel           
            </button>
        </NuxtLink>
       
         

          <button  class="btn btn-primary" id="post3"
          type="submit"
            >
          
              Publish
            
            </button
          >

          <a href="javascript:void(0);" class="burger-menu" onclick="myFunction()">
            <i class="uil uil-bars"></i>
          </a>
        </div>
      </div>
    </nav> -->
    
      <div class="container first-class">
        <button class="gallery">
          <input 
          @change="uploadImage"
          type="file" class="opacity-0 absolute left-4000" id="customFileInput" aria-describedby="customFileInput">

          <span for="customFileInput"><i class="uil uil-scenery" ></i></span> Add Cover
        </button>

        <label for="blog-title" ><input 
          v-model="publishContent.data.content"
        type="text" placeholder="Add Title"></label>
        <hr id="down"/>
        <span class="large"><i class="uil uil-text"></i></span>
        <span class="large"><i class="uil uil-bold"></i></span>
        <span class="large"><i class="uil uil-italic"></i></span>
        <span class="large"><i class="uil uil-link"></i></span>
        <span class="large"><i class="uil uil-globe"></i></span>
        <span class="large"><i class="uil uil-scenery"></i></span>
        <hr />

        <label for="tell-story" class="tell">
         <b-form-textarea
           v-model="publishContent.data.description" 
          type="text"
           rows="4"
        
           />
       </label>
      </div>
</form>
    </main>


        


    </div>
</template>

     

<script>
import { onMounted, ref, reactive, useRouter} from '@nuxtjs/composition-api';
import {publishPost, clientId } from "../../api.js"
import { storeNFT} from "../../upload.js"
import { defaultProfile , userAccessToken} from "../../store"
import {ethers} from "ethers"
import { splitSignature} from "../../util"
import  LENSHUB from "../../config/lens.json"
import {omit, wait} from "../../helpers"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import {LENS_HUB_CONTRACT_ADDRESS} from "../../config/constant"

import "@/styles/create.css"

    export default {
          layout: "no-sidebar",
        setup(){
        
            const showImg = ref('')
            const crudStatus = ref('')
            const imageRef = ref('')
             const signer = ref('')
             const errorPublishing =ref(false)
             const isPublishing = ref(false)


const router = useRouter()
          onMounted(()=>{
      const signerOrProvider = new ethers.providers.Web3Provider(window.ethereum);
            signer.value = signerOrProvider?.getSigner()
    })
            const publishContent = reactive({
                data:{
                  fileCid :'',
                  imageCid :'',
                  content : '',
                  description : '',

                }
            })


 
         const uploadImage =async(values)=>{
          imageRef.value = values.target.files[0]
 }

    const postData =async()=>{

     const signedTypeData =async (
  domain,
  types,
  value
) => {
  const signe =signer.value
  // remove the __typedname from the signature!
  return signe._signTypedData(
    omit(domain, '__typename'),
    omit(types, '__typename'),
    omit(value, '__typename')
  );
};

errorPublishing.value =false

isPublishing.value = true
    
        try {
          crudStatus.value ="image upload in progress..."
          const imageUpload = await storeNFT(imageRef.value)



          const jsonData = {
  version: "2.0.0",
  mainContentFocus: "TEXT_ONLY",
 metadata_id: uuidv4(),
  description: publishContent.data.description,
  locale: "en-US",
  content: publishContent.data.content,
  external_url: null,
    image: "ipfs//:"+imageUpload,
  imageMimeType: "text/html",
  name: "Name",
  attributes: [],
  tags: [
    "using_api_examples"
  ],
  appId: "api_examples_github"
}

    crudStatus.value = "uploading content..."
 const file = await storeNFT(jsonData)
 crudStatus.value = "Almost done"


       
   const refreshToken = localStorage.getItem("storybiteRefreshToken")
   const {id, ownedBy, ...others} =JSON.parse(localStorage.getItem("storyDefaultProfile"))
   console.log("rello", others)
 
   const resp = await clientId.request(publishPost, { 
    id,
    uri:`ipfs://${file}`

   }, 
   {
  ['x-access-token']: refreshToken,
},
   )

console.log(resp, 'respo')

     const typedData =resp.createPostTypedData.typedData

    //  console.log(typedData, 'typedData')

      const contract = new ethers.Contract(
        LENS_HUB_CONTRACT_ADDRESS,
        LENSHUB,
        signer.value
      )

   
      await wait(10000)
      const dataAvailable = await axios.get(`
      https://ipfs.io/ipfs/${file}`)
      console.log("dataAvailable", dataAvailable)
      const tx = await contract.post({
        profileId: typedData.value.profileId,
        contentURI: `ipfs://${file}`,
        collectModule: typedData.value.collectModule,
        collectModuleInitData: typedData.value.collectModuleInitData,
        referenceModule: typedData.value.referenceModule,
        referenceModuleInitData: typedData.value.referenceModuleInitData,
     
      })
      await tx.wait()
      console.log('successfully created post: tx hash', tx)

    router.push(`/profile/${ownedBy}`)
     
         } catch (error) {
          console.log('error', error)
        }

        finally{
          isPublishing.value=false
        }
    }

        return {showImg, uploadImage, publishContent, postData, crudStatus, imageRef, isPublishing, errorPublishing}
        }
    }
</script>


<style  scoped>

</style>