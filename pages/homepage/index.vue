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

            <section class="third-card">
                                    <div class="row ">
                                        
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
</div>
            </section>

          
    </div>
</template>

<script>
    export default {
          layout: "no-sidebar",
        setup(){
        
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
.section-two{
    background: #CCE1FF;
    padding: 7rem 0;
}
.stay-curious{
    color: #0723B4;
}
.stories {
    color: #0D2DA9;
}

</style>