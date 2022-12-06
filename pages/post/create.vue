<template>
    <div>
    <!---------------- NAVBAR ---------------->

  

    <main>

  
<form  @submit.prevent="postData">
  <nav>
      <div class="navbar" id="topnav">
        <h4 class="logo"><span>story</span>tribe</h4>

        <div class="labels">
          <button type="button" class="btn btn-primary" id="post1"
           
            >
            Cancel           
            </button
          >

         

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
    </nav>
    
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
import { onMounted, ref, reactive} from '@nuxtjs/composition-api';
import {publishPost, clientId } from "../../api.js"
import { storeNFT} from "../../upload.js"
import { defaultProfile , userAccessToken} from "../../store"
import "@/styles/create.css"

    export default {
          layout: "no-sidebar",
        setup(){
        
            const showImg = ref('')
            const crudStatus = ref('')
            const imageRef = ref('')
            const publishContent = reactive({
                data:{
                  fileCid :'',
                  imageCid :'',
                  content : '',
                  description : '',

                }
            })

 const sampleJson ={
"version": "2.0.0",
"metadata_id": "1c71292d-b9a9-499c-9da6-08394572067d",
"description": "Hello testing",
"content": "Hello testing",
"external_url": "https://lenster.xyz/u/testingme.test",
"image": "ipfs://bafkreiguwgr6xrclk2hp3373m33anrzh2ioxunqlcfugw5s7f5ux7fid5m",
"imageMimeType": "image/svg+xml",
"name": "Comment by @testingme.test",
"tags": [],
"animation_url": null,
"mainContentFocus": "TEXT_ONLY",
"contentWarning": null,
"attributes": [
{
"traitType": "type",
"displayType": "string",
"value": "text_only"
}
],
"media": [],
"locale": "en-US",
"createdOn": "2022-12-01T16:27:45.881Z",
"appId": "Lenster"
}
 
         const uploadImage =async(values)=>{
          imageRef.value = values.target.files[0]
 }

    const postData =async()=>{
    
        try {
          crudStatus.value ="image upload in progress..."
          const imageUpload = await storeNFT(imageRef.value)
          const jsonData ={
  version: "2.0.0",
  metadata_id: "",
  description: publishContent.data.description,
  content: publishContent.data.content,
  external_url: "",
  image: imageUpload,
  imageMimeType: "image/svg+xml",
  name: "",
  tags: [],
  animation_url: null,
  mainContentFocus: "TEXT_ONLY",
  contentWarning: null,
  attributes: [
    {
      traitType: "type",
      displayType: "string",
      value: "text_only"
    }
  ],
  media: [],
  locale: "en-US",
  createdOn: new Date(),
  appId: "Lenster"
    }

    crudStatus.value = "uploading content..."
 const file = await storeNFT(jsonData)
 crudStatus.value = "Almost done"


       

   const resp = await clientId.request(publishPost, { 
    id:defaultProfile?.data?.id,
    uri:`ipfs://${file}`

   }, 
   {
  ['x-access-token']: userAccessToken.value,
},
   )
        } catch (error) {
          console.log('error', error)
        }
    }

        return {showImg, uploadImage, publishContent, postData, crudStatus, imageRef}
        }
    }
</script>


<style  scoped>

</style>