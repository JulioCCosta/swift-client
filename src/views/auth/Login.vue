<template>
  <v-card class="elevation-1 pa-3 login-card">
    <v-card-text>
      <div class="layout column align-center">
        <img src="/static/m.png" alt="Vue Material Admin" width="120" height="120" />
        <h1 class="flex my-4 primary--text">Swift UI</h1>
      </div>
      <v-form>
        <v-text-field
          append-icon="person"
          name="login"
          :label="$t('login.account')"
          type="text"
          v-model="user.username"
        ></v-text-field>
        <v-text-field
          append-icon="lock"
          name="password"
          :label="$t('login.password')"
          id="password"
          type="password"
          v-model="user.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <div class="login-btn">
      <v-btn icon>
        <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="red">fa fa-google fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn block color="primary" @click="onLogin" :loading="loading">{{$t("login.submit")}}</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
          loading:false,
            user:{
                username: '',
                password: '',
                'tenantName':'admin'
            }
        }
    },
    created() {        
       
    },
    methods: {
        onLogin(){
          this.$store.dispatch('login', this.user)
            .then(()=>{
               this.loading = true
            setTimeout(() => {
              this.$router.push("/dashboard")
            }, 1000)
            }).catch(()=>{
                this.$toasted.error(`Usuario ou senha estão incorretos.`, { icon : 'error_outline' })
            });
        }
    },
    computed: {
        isAuth(){                                                        
            return this.$store.state.login.isVisibleLogin || !localStorage.getItem('TOKEN_AUTH')
        }, 
    },
}
</script>

<style scoped lang="css"></style>
