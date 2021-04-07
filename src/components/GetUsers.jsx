import React, {useEffect} from 'react'
import {useQuery} from "@apollo/client"
import { LOAD_USERS } from "../GraphQL/Queries"

export default function GetUsers() {
    const {data} = useQuery(LOAD_USERS)

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <div>
            
        </div>
    )
}


