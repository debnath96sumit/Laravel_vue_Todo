<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="" v-model="user.email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" v-model="user.password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" />
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <input type="checkbox" value="lsRememberMe" id="rememberMe" class="mr-2" v-model="user.remember_me"> 
            <label for="rememberMe">Remember me</label>
          </div>
          <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
        </div>
        <div>
          <button 
            type="submit" 
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          <div class="container" v-if="showLoader">
            <div class="bar"></div>
          </div>
          Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <router-link :to="{name: 'Register'}" href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create a free account</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
  import store from "@/store";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const showLoader = ref(false);
  const user = {
    email: localStorage.getItem('email') ?? '',
    password: localStorage.getItem('password') ?? '',
    remember_me: localStorage.getItem('remember') ?? null
  };

  const login = ()=>{
      if (user.remember_me) {
        localStorage.setItem('email', user.email);
        localStorage.setItem('password', user.password);
        localStorage.setItem('remember', true);
      }else{
        if (localStorage.getItem('email')) {
          localStorage.removeItem('email');
        }
        if (localStorage.getItem('password')) {
          localStorage.removeItem('password');
        }
        if (localStorage.getItem('remember')) {
          localStorage.removeItem('remember');
        }
      }
      showLoader.value = true;
      store.dispatch('login', user)
      .then((res)=>{
          showLoader.value = false;
          router.push({name : 'Todos'})
      })
      
  }
</script>
<style scoped>

</style>