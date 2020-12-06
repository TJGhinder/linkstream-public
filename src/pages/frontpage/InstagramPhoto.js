import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function InstagramPhoto() {

    const [profilePhoto, setProfilePhoto] = useState(null)

    const getPhoto = (a) => {
        // validation for instagram usernames
        var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
        var validation = regex.test(a);
        if (validation) {
            axios.get("https://www.instagram.com/" + a + "/?__a=1")
                .then(res => {
                    console.log(res)
                    setProfilePhoto(res.data.graphql.user.profile_pic_url)
                }).catch(err => console.log(err))
        } else {
            console.log('username not valid.')
        }
    }

    useEffect(() => {
        getPhoto('tjghinder')
    }, [])

    return (
        <div className='profile-img-container'>
            {profilePhoto !== null ? <img className='profile-photo' src={profilePhoto} /> : <></>}
        </div>
    )
}
