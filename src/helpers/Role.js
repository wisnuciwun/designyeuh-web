import React, { Component } from 'react'
    
export function RoleAdmin(props){
  try {
    let roleAction = ''
    let roleData = process.env.REACT_APP_ADMIN
      if(roleData.includes(props))
      {
        roleAction =  true
      }
      else
      {
        roleAction = false
      }
      return roleAction
    }
  catch(error) {
    console.log(error)
    }
}