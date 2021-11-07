import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Sobremi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'
import Admin from './components/Admin'
import AdminSimple from './components/AdminSimple'
import AdminAvanzado from './components/AdminAvanzado'
const LazyLoading = () => import('./components/LazyLoading')



Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Inicio,
            children: [{
                path: '',
                component: {
                    lazyloading: LazyLoading
                }
            }]
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/inicio',
            redirect: '/'
        },
        {
            path: '/portada',
            redirect: '/'
        },
        {
            path: '/sobremi',
            component: Sobremi,
            alias: '/acerca',
            children: [{
                path: '',
                component: {
                    lazyloading: LazyLoading
                }
            }]
        },
        {
            path: '/Contacto',
            component: Contacto,
            alias: '/contactame',
            children: [{
                path: '',
                component: {
                    lazyloading: LazyLoading
                }
            }]
        },
        {
            path: '/post/:entrada',
            component: Post,
            children: [{
                    path: '/articulo',
                    component: Articulo,
                    name: 'articulo'
                },
                {
                    path: '',
                    component: {
                        lazyloading: LazyLoading
                    }
                }
            ]
        },
        {
            path: '*',
            component: NotFound
        },

        {
            path: '/administrador/',
            component: Admin,
            children: [{
                    path: 'simple',
                    component: AdminSimple,
                },
                {
                    path: 'avanzado',
                    component: AdminAvanzado,
                },
                {
                    path: '*',
                    component: NotFound
                }


            ]

        },
    ]
})