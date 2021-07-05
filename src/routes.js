import React from 'react'

const Home = React.lazy(() => import('./views/Home'))
const ImageCategory = React.lazy(() => import('./views/CategoryView/ImageCategory'))
const Misc = React.lazy(() => import('./views/Misc'))
const ResumeCategory = React.lazy(() => import('./views/CategoryView/ResumeCategory'))
const Administrator = React.lazy(() => import('./views/Administrator/AdminHome'))

const routes = [
    {path: '/home', exact: true, name: 'home', component: Home},
    {path: '/images', name: 'resumes', component: ImageCategory},
    {path: '/misc', name: 'misc', component: Misc},
    {path: '/resumes', name: 'resumes', component: ResumeCategory},
    {path: '/administrator', name: 'administrator', component: Administrator}
]

export default routes