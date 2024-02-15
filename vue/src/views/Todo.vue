<template>
    <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" />
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                        class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" @click="logout" class="text-sm font-semibold leading-6 text-gray-900">Log out <span
                            aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <DialogPanel
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="" />
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                        item.name }}</a>
                            </div>
                            <div class="py-6">
                                <a href="#" @click="logout"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                    out</a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

        <div class="relative isolate px-6 pt-14 lg:px-8 mt-4">
            <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div class="max-w-xl lg:max-w-lg">
                            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Create your todo</h2>
                            <p class="mt-2 text-sm leading-4 text-gray-300">Todo project is the universal project for all
                                the freshar developers. Make sure to complete this project and happy coding.</p>
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-2">
                                <div class="sm:col-span-2">
                                    <label for="company"
                                        class="block text-sm font-semibold leading-6 text-white">Name</label>
                                    <div class="mt-2.5">
                                        <input type="text" name="company" id="company" autocomplete="organization"
                                            v-model="todoForm.name"
                                            class="block w-full min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            placeholder="Enter a name">
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message"
                                        class="block text-sm font-semibold leading-6 text-white">Description</label>
                                    <div class="mt-2.5">
                                        <textarea name="message" id="message" rows="4"
                                            class="block w-full min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            placeholder="Add some description" v-model="todoForm.description"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10">
                                <button 
                                    type="submit"
                                    class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    @click="createOrUpdate">
                                    <div class="container" v-if="showLoader">
                                        <div class="bar"></div>
                                    </div>
                                    {{ buttonText }}
                                </button>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">All your todos</h2>
                            <p v-if="!todos.length" class="mt-4 text-lg leading-8 text-gray-300">Oops! you dont have any
                                todos</p>
                            <ul role="list" class="divide-y divide-gray-100">
                                <li v-for="todo in todos" :key="todo.id" class="flex justify-between gap-x-6 py-5">
                                    <div class="flex min-w-0 gap-x-4">
                                        <!-- <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="person.imageUrl"
                                            alt="" /> -->
                                        <span class="h-12 w-12 flex rounded-full bg-gray-50 justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                        </span>
                                        <div class="min-w-0 flex-auto">
                                            <p class="text-sm font-semibold leading-6 text-white">{{ todo.name }}</p>
                                            <p class="mt-1 truncate text-xs leading-4 text-white">{{ todo.description }}</p>
                                        </div>
                                    </div>
                                    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <p class="text-sm leading-6 text-gray-900">{{ todo.role }}</p>
                                        <p class="mt-1 text-xs leading-5 text-gray-500">
                                            {{ todo.formatted_created_at }}
                                        </p>
                                        <div class="mt-1 flex items-center gap-x-1.5">
                                            <div class="flex-none rounded-full bg-emerald-500/20 p-1 cursor-pointer" @click="toggleComplete(todo.id)">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" v-if="todo.is_completed">
                                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" v-else>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </div>
                                            <div class="flex-none rounded-full bg-emerald-500/20 p-1 cursor-pointer"
                                                @click="toggleEdit(todo.id)">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" class="w-6 h-6">
                                                    <path
                                                        d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                    <path
                                                        d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                                </svg>
                                            </div>
                                            <span class="flex-none rounded-full bg-blue-900 p-1 cursor-pointer text-red-900"
                                                @click="deleteTodo(todo.id)">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" class="w-6 h-6">
                                                    <path fill-rule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6" v-if="todos.length">
                                <div class="flex flex-1 justify-between sm:hidden">
                                    <a href="#"
                                        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                    <a href="#"
                                        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                                </div>
                                <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p class="text-sm text-gray-700">
                                            Showing
                                            <span class="font-medium">{{ todoPageInfo.from }}</span>
                                            to
                                            <span class="font-medium">{{ todoPageInfo.to }}</span>
                                            of
                                            <span class="font-medium">{{ todoPageInfo.total }}</span>
                                            results
                                        </p>
                                    </div>
                                    <div>
                                        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                            aria-label="Pagination">
                                            <div v-for="(links, index) in todoPageInfo.links">
                                                <a href="#"  @click="nextPageContent(links.url)" v-if="index == 0"
                                                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                                >
                                                    <span class="sr-only">Previous</span>
                                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </a>
                                                <a href="#" @click="nextPageContent(links.url)" v-else-if="index > 0 && index < todoPageInfo.links.length - 1"
                                                    :class="links.active ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'">
                                                    {{ index }}
                                                </a>
                                                <a href="#" @click="nextPageContent(links.url)" v-else
                                                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                                >
                                                    <span class="sr-only">Next</span>
                                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import store from '@/store';
import { useRouter } from 'vue-router';

const buttonText = ref('Create');
const router = useRouter();
const showLoader = ref(false);
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
const todos = ref([]);
const todoPageInfo = ref({});

const mobileMenuOpen = ref(false)
const todoForm = reactive({
    id: null,
    name: '',
    description: ''
});

onMounted(() => {
    store.dispatch('getTodos')
        .then((res) => {
            todos.value = store.state.user.todo.data;
            todoPageInfo.value = store.state.user.todo;
            console.log(todoPageInfo.value);
        });
})
const createOrUpdate = () => {
    showLoader.value = true;
    store.dispatch('createOrUpdate', todoForm)
        .then((res) => {
            if (res.data.success) {
                showLoader.value = false
                todoForm.name = '';
                todoForm.description = '';
                todos.value = store.state.user.todo.data;
                todoPageInfo.value = store.state.user.todo;
                
                if (todoForm.id) {
                    todoForm.id = null;
                    buttonText.value = 'create';
                    toast.success('todo updated successfully');
                }else{
                    toast.success('todo created successfully');
                }
            }
        })
}
const logout = () => {
    store.dispatch('logout')
        .then(() => {
            router.push({ name: 'Login' })
        })
}
const deleteTodo = (id) => {
    store.dispatch('deleteTodo', id)
        .then(() => {
            todos.value = store.state.user.todo.data;
            todoPageInfo.value = store.state.user.todo;

        });
}
const toggleEdit = (id) => {
    store.dispatch('editTodo', id)
        .then((data) => {
            if (data !== null) {
                todoForm.id = data.id;
                todoForm.name = data.name;
                todoForm.description = data.description;

                buttonText.value = 'Update'
            }
        });
}
const nextPageContent = (url)=>{
    store.dispatch('getTodos', url)
        .then((res) => {
            todos.value = store.state.user.todo.data;
            todoPageInfo.value = store.state.user.todo;
        });
}

const toggleComplete = (id)=>{
    store.dispatch('changeCompletedStatus', id)
         .then((res)=>{
            todos.value = store.state.user.todo.data;
            todoPageInfo.value = store.state.user.todo;
            toast.success('status updated successfully');
         })
}

</script>
<style scoped></style>