<template>
	 <b-container>
	 	<b-col md="4" offset-md="4">
	 		<b-form @submit="sendform">
	 			 <b-form-group id="fieldset1">
				 		<b-form-input v-model="form.email"
					                  type="text"
					                  placeholder="Digite seu email"></b-form-input>
                </b-form-group>

                <b-form-group id="fieldset1">
				 		 <b-form-input v-model="form.password"
					                  type="password"
					                  placeholder="Digite sua Senha"></b-form-input>    
                </b-form-group>
                 
                  <b-form-group id="fieldset1">
				 		<b-button variant="success" type="submit" block>Entrar</b-button> 
                </b-form-group>

                {{posts}}
	 	</b-form>
	 	</b-col>
	 	
	 	 

	 </b-container>
</template>

<script>
import {HTTP , setTokenApi} from '@/api/http'


 export default {
 	name: 'Login',
    data () {
    	return {
    		posts: [],
    		errors: [],
    		form: {
		        email: '',
		        password: ''
		      }
		  }            
    },
    methods: {
      sendform(evt) {
        evt.preventDefault();
        HTTP.post(`auth/login`,this.form)
		    .then(response => {
		      this.posts = response.data

		       setTokenApi(this.posts.result.token)
		      
		       this.$router.push('/')
		    })
		    .catch(e => {
		      this.errors.push(e)
		    })
       
      }
    }
  };
</script>