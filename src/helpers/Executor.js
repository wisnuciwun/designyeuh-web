import React from 'react'

function Executor(props) {
let execute = false

if(props == "" || props == {} || props == [] || props == undefined || props == null)
{
    execute = false
}
else
{
    execute = true
}
return execute

}

export default Executor