import { createApp } from 'vue'
import App from './App.vue'
import Index from './IndexFile.vue'
import SimpleClicker from '@/components/SimpleClicker.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    routes :[{  //Создание роутинга и привязанных компонентов
        path: '/',
        component: App
    },{
        path: '/about',
        component: SimpleClicker
    }],
    history: createWebHistory() // это настройка, которая отвечает за механизм поведения Vue Router при использовании createWebHistory(),и таким образом роутер будет использовать History API.
})

const app = createApp(Index) //Индекс,пустой файл, он используется с целью отображения всех элементов роутинга 
app.use(router)
app.mount('#app')
