import React from 'react'

const Home = React.lazy(() => import('./views/Home'))
const SelectedCategory = React.lazy(() => import('./views/SelectedCategory'))
const Misc = React.lazy(() => import('./views/Misc'))

const routes = [
    {path: '/home', exact: true, name: 'home', component: Home},
    {path: '/category', name: 'category', component: SelectedCategory},
    {path: '/misc', name: 'misc', component: Misc}
]

export default routes