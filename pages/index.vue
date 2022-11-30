<template>
    <div>

    <header class="header-top">
        <div class="nav-left">
            <h4 class="logo">
                <span>story</span>tribe
            </h4>
        </div>

        <div class="profile">
            <div class="btn-secondary" >
                <div>
                        <b-button v-b-modal.modal-1>Login</b-button>

                        <b-modal id="modal-1" title="Login or Signup to storytribe">
                           <h2>Connect to your wallet</h2>
                           <p>This process connects you to a wallet that is already saved in your browser.</p>

                           <button type="button" class="btn btn-lg btn-connect text-light" @click="login" >Connect Wallet</button>
                           <p class="text-center">New here? Sign up instead</p>
                        </b-modal>
                        </div>
            </div>
            <div class="btn-secondary" >
                <div>
                        <b-button v-b-modal.modal-2>Create account</b-button>

                        <b-modal id="modal-2" title="Login or Signup to storytribe">
                           <h2>Connect to your wallet</h2>
                           <p>This process connects you to a wallet that is already saved in your browser.</p>

                           <button type="button" class="btn btn-lg btn-connect text-light" @click="createAccount" >Connect Wallet</button>
                           <p class="text-center">New here? Sign up instead</p>
                        </b-modal>
                        </div>
            </div>
            <div cass="btn-primary">
             <!-- <b-button v-b-modal.modal-2>Create account</b-button> -->
             <!-- createAccount -->
                <!-- <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="Close">Create account</button> -->
            </div>
            </div>
    </header>


    <!-- Modal -->
    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-6" id="exampleModalLabel">Login or Signup to storytribe</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h2>Connect to your wallet</h2>
                    <p>This process connects you to your wallet that is already saved in your browser</p>

                    <button><a class="btn-primary" href="#">Connect Wallet</a></button>
                    <div class="bottom">
                        <h6>New here? <a href="#"> Sign up instead</a></h6>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- ------------Landing page body ------------------ -->
    <!-- section 1 beegins -->
    <div class="land1">
        <div class="land1-left">
            <h1>Stay curious</h1>
            <p>Uncover stories from writers on any topicof your choice safely on the blockchain</p>
            <button>Let's get started</button>
        </div>
        <div class="land1-right">
            <img src="@/images/landing1.png">
        </div>
    </div>
    <!-- section 1 ends -->

    <!-- section 2 begins -->
    <div class="land2">
        <h2>Storytribe is such a vibe, here's why</h2>
        <div class="cards">
            <div class="card">
                <div class="card-body">
                    <i class="uil uil-check-circle"></i>
                    <h6 class="card-sub">SAFE AND SECURE</h6>
                    <p class="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <i class="uil uil-check-circle"></i>
                    <h6 class="card-sub">used by millions</h6>
                    <p class="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="cards1">
            <div class="card">
                <div class="card-body">
                    <i class="uil uil-check-circle"></i>
                    <h6 class="card-sub">own your data</h6>
                    <p class="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <i class="uil uil-check-circle"></i>
                    <h6 class="card-sub">seemless signup</h6>
                    <p class="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>
    </div>

    <!-- section 2 ends -->

    <!-- section 3 begins -->
    <div class="land3">
        <div class="land3-left">
            <img src="@/images/landing2.png">
        </div>
        <div class="land3-right">
            <h1>Write freely</h1>
            <p>Write about topics that you care about that is securely on the blockchain</p>
            <button>Let's get started</button>
        </div>
    </div>
    <!-- section 3 ends -->

    <!-- section 4 begins -->
    <div class="land4">
        <h2>Featured posts</h2>
        <div class="display-card">
            <div class="card" style="width: 24rem;">
                <img src="@/images/card2.png" class="card-img-top">
                <div class="card-body">
                    <h5>Under the night's sky</h5>
                    <p class="card-text">It is said that bad things happen when the sun goes down. I believe that there are many benefits to exploring nature under the night sky,</p>
                </div>
            </div>

            <div class="card" style="width: 24rem;">
                <img src="@/images/card1.png" class="card-img-top">
                <div class="card-body">
                    <h5>Interplanetary exploration</h5>
                    <p class="card-text">We will explore the unknown, reaching out beyond our world. We are space explorers and we want to share all that we find with you.</p>
                </div>
            </div>

            <div class="card" style="width: 24rem;">
                <img src="@/images/card.png" class="card-img-top">
                <div class="card-body">
                    <h5>Plastic bags are harming us</h5>
                    <p class="card-text">Over 1 million people die prematurely as a result of all toxic substances in the air such as CO2 and air pollution. Let’s do something about it!</p>
                </div>
            </div>
        </div>
    </div>

    <!-- section 4 ends -->

    <!-- section 5 starts -->
    <div class="land5">
        <h5>Find topics that suit your interest</h5>

        <button>Let's get started</button>

        <div>
            <img src="@/images/landing3.png">
        </div>
    </div>
    <!-- section 5 ends -->
    <footer>
        <div class="footer-top">
            <div class="footer-left">
                <h4 class="logo">
                    <span>story</span>tribe
                </h4>
                <p>A decentralized blogging experience. Built on the lens protocol</p>
            </div>
            <div class="footer-middle">
                <h2>Company</h2>
                <a href="#">About us</a>
                <a href="#">Career</a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
            </div>
            <div class="footer-right">
                <h2>Resources</h2>
                <a href="#">Tutorials</a>
                <a href="#">Frequently asked questions</a>
                <a href="#">Contact us</a>
                <a href="#">Other projects</a>
            </div>
        </div>
        <div class="footer-bottom">
            <a href="#">Terms and conditions</a>
            <a href="#">2022 copyright</a>
            <a href="#">Privacy policy</a>
        </div>
    </footer>



    <!-- ------------Landing page body ends-------------------- -->

</div>

</template>
<script>
import { onMounted, ref, computed, watchEffect, reactive, useRouter} from '@nuxtjs/composition-api';
import {ethereumObj} from "../store"
import { clientId, challenge, authenticate, createProfile } from "../api.js"
import { ethers } from "ethers";
import "@/styles/homepage.css"
    export default {
        layout: "no-sidebar",
        setup(){
            const router = useRouter()
              const signerOrProvider = ref('')
                        const address = ref('')
                        const token = ref('')
            onMounted(()=>{
        // signerOrProvider.value = window.ethereum
      
        
        })

                 const signData =async()=>{
                const signerOrProvider = new ethers.providers.Web3Provider(window?.ethereum);
                const signer = signerOrProvider.getSigner()
                let text = "\nhttps://api-mumbai.lens.dev wants you to sign in with your Ethereum account:\n0x1049dCFe27985721Fb103d22076266377381eC7D\n\nSign in with ethereum to lens\n\nURI: https://api-mumbai.lens.dev\nVersion: 1\nChain ID: 80001\nNonce: e1e3dfe3aafe331b\nIssued At: 2022-11-30T15:57:26.325Z\n "
                let signature = await signer.signMessage(text)
                let addressy = ethers.utils.verifyMessage(text, signature)
                console.log('hello', signature)
                console.log('address', addressy)
                 console.log('helly', signerOrProvider)
            }

            async function checkConnection() {
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                const accounts = await provider.listAccounts()
                if (accounts.length) {
                address.value= accounts[0]
                }
            
            }
              async function connect() {
    /* this allows the user to connect their wallet */
                const account = await window.ethereum.send('eth_requestAccounts')
                if (account.result.length) {
                address.value =account.result[0]
                }
            }

            async function login() {
                try {
                    await connect()
      /* first request the challenge from the API server */
            const challengeInfo = await clientId.request(challenge, { address:address.value })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      /* ask the user to sign a message with the challenge info returned from the server */
      const signature = await signer.signMessage(challengeInfo.challenge.text)
      /* authenticate the user */
      const authData = await clientId.request(authenticate, {address:address.value, signature})
      /* if user authentication is successful, you will receive an accessToken and refreshToken */
      const  { authenticate: { accessToken }} = authData
      
     token.value= accessToken
     if (token.value) {
         router.push('/blogs')
     }
        
    } catch (err) {
      console.log('Error signing in: ', err)
    }
  }

  const createAccount =async()=>{
    try {
        if (!token.value) {
            await login()
        }
        
         const createUserAcct = await clientId.request(createProfile, { handle: "adetutuOmoba",
                profilePictureUri: null,
                followNFTURI: null,
                followModule: null }, {
    headers: {
      ['x-access-token']: token.value,
    }
  })

   console.log('creaty', createUserAcct)
    } catch (error) {
        console.log('an error occured', error)
    }
  }
            return {signData, signerOrProvider, address, token, login, createAccount}
        }
    }
</script>

<style scoped>

</style>