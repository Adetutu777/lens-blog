<template>
    <div>
            <div class="navbar-top">
                <div class="container ">
  <b-navbar toggleable="lg" type="dark" variant="none">
    <b-navbar-brand href="#"> 
        <img src="@/images/storytribe.svg" alt="image">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto ">
        <b-nav-form>
          <b-button size="sm" class="my-2 my-sm-0 login ">Login</b-button>
          <b-button size="sm" class="my-2 my-sm-0 create text-light ml-3">Create account</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
            </div>

            <section class="test-sec container">

<form  @submit.prevent="postData">
  <b-form-input
         v-model="publishContent.data.content"
          class="mb-3" 
           />
 <b-form-textarea
          type="text"
           rows="2"
          v-model="publishContent.data.description" />

<input type="file" 
@change="uploadImage"
 class="form-control" id="customFile" />

<button type="submit">submit</button>
</form>
            </section>
            <!-- second section -->
            <section class="section-two">
            <div class="">
                <div class="container">
                <div class="row">
                    <!-- <div class="col-md-1"></div> -->
                    <div class="col-lg-6">
                    <h1 class="stay-curious"> <b>Stay curious</b> </h1>
                    <p class="mt-3 pb-4 stories">Uncover stories from writers on any topic <br>    	
                            of your choice safely on the blockchain</p>
                                    
                                <b-button size="sm" class="my-2 my-sm-0 create text-light"> Let’s Get Started</b-button>
                    </div>
                    <div class="col-lg-6">
                    <img src="@/images/landing1.png" alt="image">
                    </div>

                    <!-- <div class="col-md-1"></div> -->
    
             </div>
</div>
            </div>
            </section>

            <section class="section-three">
                <div class="container">
                 <h3 class="text-center story-header">Storytribe is such a vibe, here’s why</h3>
                    <div class="row ">                    
                        <div class="col-md-2"></div>
  <div class="col-sm-4 ">
    <div class="card safe-col">
      <div class="card-body">
        <img src="@/images/tick.svg" class="tick-icon p-2" alt="image">
        <h6 class="card-title safe"> <b> SAFE AND SECURE</b></h6>
        <p class="card-text lorem-text">Lorem Ipsum has been the industry's <br> standard dummy text ever since the <br> 1500s.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card safe-col">
      <div class="card-body">
        <img src="@/images/tick.svg" class="tick-icon p-2" alt="image">
        <h6 class="card-title safe"> <b> SAFE AND SECURE</b></h6>
        <p class="card-text lorem-text">Lorem Ipsum has been the industry's <br> standard dummy text ever since the <br> 1500s.</p>
      </div>
    </div>
  </div>
 
   <div class="col-md-2"></div>
                        </div>

                    <div class="row pt-4">                    
                        <div class="col-md-2"></div>
  <div class="col-sm-4 ">
    <div class="card safe-col">
      <div class="card-body">
        <img src="@/images/tick.svg" class="tick-icon p-2" alt="image">
        <h6 class="card-title safe"> <b> SAFE AND SECURE</b></h6>
        <p class="card-text lorem-text">Lorem Ipsum has been the industry's <br> standard dummy text ever since the <br> 1500s.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card safe-col">
      <div class="card-body">
        <img src="@/images/tick.svg" class="tick-icon p-2" alt="image">
        <h6 class="card-title safe"> <b> SAFE AND SECURE</b></h6>
        <p class="card-text lorem-text">Lorem Ipsum has been the industry's <br> standard dummy text ever since the <br> 1500s.</p>
      </div>
    </div>
  </div>
 
   <div class="col-md-2"></div>
                        </div>
                        </div>
            </section>

                <section class="section-four">
                         <div class="row">
                    <div class="col-lg-6">
                    <img src="@/images/landing2.png" alt="image">
                    </div>

                    <div class="col-lg-6">
                    <h1 class="stay-curious"> <b>Write freely</b> </h1>
                    <p class="mt-3 pb-4 stories">Write about topics that you care about that is securely   on the blockchain.</p>
                                    
                                <b-button size="sm" class="my-2 my-sm-0 create text-light"> Let’s Get Started</b-button>
                    </div>
    
             </div>
                </section>

                 <section class="section-five">
                <div class="container">
                 <h3 class="text-center story-header">Featured posts</h3>
                    <div class="row ">                    
                        <!-- <div class="col-md-2"></div> -->
  <div class="col-sm-4 ">
    <div class="card safe-col">
      <div class="card-body">
        <img src="@/images/card2.png"  alt="image">
        <h6 class="card-title safe pt-2"> <b> Under the night’s sky</b></h6>
        <p class="card-text lorem-text">It is said that bad things happen when the sun goes down. I believe that there are many benefits to exploring nature under the night sky,</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card safe-col">
      <div class="card-body">
        <img src="@/images/card1.png" alt="image">
        <h6 class="card-title safe pt-2"> <b> Interplanetary explorations</b></h6>
        <p class="card-text lorem-text">We will explore the unknown, reaching out beyond our world. We are space explorers and we want to share all that we find with you.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card safe-col">
      <div class="card-body">
        <img src="@/images/card.png"  alt="image">
        <h6 class="card-title safe pt-2"> <b> Plastic bags are harming us</b></h6>
        <p class="card-text lorem-text">Over 1 million people die prematurely as a result of all toxic substances in the air such as CO2 and air pollution. Let’s do something about it!</p>
      </div>
    </div>
  </div>
           </div>
                        </div>
            </section>

            <section class="section-six">
                         <div class="row">
                    

                    <div class="col-lg-12 text-center">
                    <h1 class="stay-curious"> <b>Write freely</b> </h1>
                    <p class="mt-3 pb-4 stories">Write about topics that you care about that is securely   on the blockchain.</p>

                        <b-button size="sm" class="my-2 my-sm-0 create text-light"> Let’s Get Started</b-button>

                        <div class="">
                    <img class="w-25 mx-auto pt-5" src="@/images/landing3.png" alt="image">
                    </div>
                    </div>
                    
    
             </div>
            </section>

            <section class="section-seven">
                <div class="container">     
                <div class="row">                       
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div><!--- END COL --> 
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div><!--- END COL -->
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div class="signup_form">                           
                                <form action="#" class="subscribe">
                                    <input type="text" class="subscribe__input" placeholder="Enter Email Address">
                                    <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="social_profile">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>                          
                    </div><!--- END COL -->         
                </div><!--- END ROW --> 
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <p class="copyright">Copyright © 2019 <a href="#">Akdesign</a></p>
                    </div> <!--- END COL -->                 
                </div> <!--- END ROW -->                 
            </div>
            </section>
          
    </div>
</template>

<script>
import { onMounted, ref, reactive} from '@nuxtjs/composition-api';
import {publishPost, clientId } from "../../api.js"
import { storeNFT} from "../../upload.js"

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
   const resp = await clientId.request(publishPost, { })
        } catch (error) {
          console.log('error', error)
        }
    }

        return {showImg, uploadImage, publishContent, postData, crudStatus, imageRef}
        }
    }
</script>

<style >
.login {
   background: #CCDFFB;
   border: 1px solid #CCDFFB;
   color: #05177B;;
}

.create, .btn-login {
    background: #0C2ACB;
    border: 1px solid #0C2ACB;
}
.section-two, .section-four, .section-six{
    background: #CCE1FF;
    padding: 7rem 0;
}
.stay-curious{
    color: #0723B4;
    padding-top: 10rem;
}
.stories {
    color: #0D2DA9;
}
.story-header {
    color: #0723B4;
   padding-bottom: 3rem;
}
.tick-icon{
    width: 3.2rem;
}
.safe{
    color: #331B3B;
}
.lorem-text{
    color: #331B3B;
}
.safe-col {
    background: #FFFFFF;
box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.05);
border-radius: 10px;
}

.section-three, .section-five{
    background: #F0F6FF;
         padding: 7rem 0;
}
</style>