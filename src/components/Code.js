import React, { useState, useEffect } from 'react'
import './Code.css'
import Navigation from './Navigation'

const Code = () => {
    const [user, setUser] = useState({})
    const gitURL = 'https://api.github.com/users/shsimplon'
    const fetchUser = async () => {
        const response = await fetch(gitURL)
        const result = await response.json()
        setUser(result)
        console.log(result)
    }
    useEffect(()=> {
        fetchUser()
    }, [])
    return (
        <div className="profile-git">
            <div class="card">
                <Navigation/>
                <br/>
            <img src={user.avatar_url} alt="Avatar" style={{width:'100%'}} />
            <div class="container">
                <h4><b>{user.login}</b></h4>
                <p>{user.html_url}</p> 
                <p>{user.bio}</p>
                <p>Nombre de dépots sur Github: {user.public_repos}</p>
                <p>Followers sur Github: {user.followers}</p> 
                <p>Followings sur Github: {user.following}</p> 
            </div>
            </div>
        </div>
    )
}

export default Code
