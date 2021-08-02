import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import React from 'react'
import { RoleAdmin } from './helpers/Role'

const Home = React.lazy(() => import('./views/Home'))
const ImageCategory = React.lazy(() => import('./views/CategoryView/ImageCategory'))
const Misc = React.lazy(() => import('./views/Misc'))
const ResumeCategory = React.lazy(() => import('./views/CategoryView/ResumeCategory'))
const Administrator = React.lazy(() => import('./views/Administrator/AdminHome'))

let token = Cookies.get('token')
let role

if(token)
{
    let extracted = jwtDecode(token)    
    role = extracted.aud
}

const routes = [
    {path: '/home', exact: true, name: 'home', component: Home, authorize: true},
    {path: '/images', name: 'resumes', component: ImageCategory, authorize: true},
    {path: '/misc', name: 'misc', component: Misc, authorize: true},
    {path: '/resumes', name: 'resumes', component: ResumeCategory, authorize: true},
    {path: '/administrator', name: 'administrator', component: Administrator, authorize: RoleAdmin(role || null)}
]

export default routes