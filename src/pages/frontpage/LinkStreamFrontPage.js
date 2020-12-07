import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js'

import './front-page.css'
import InstagramPhoto from './InstagramPhoto'
import ParticleComponent from './ParticleComponent'


export default function LinkStreamFrontPage() {

    const fakeLinks = [
        { title: 'FindPE', url: 'https://elated-banach-c3d112.netlify.app/', type: 'basic' },
        { title: 'SolutionTrees', url: 'https://www.solutiontrees.com', type: 'basic' },
    ]

    const fakeSecondLinks = [
        { title: 'A PEACE of Us Vol. 1', url: 'https://a-peace-of-us-vol-1.myshopify.com/', type: 'basic' },
        { title: 'A PEACE of Us Vol. 2', url: 'https://a-peace-of-us-vol-1.myshopify.com/', type: 'basic' },
        { title: 'A PEACE of Us Vol. 3', url: 'https://a-peace-of-us-vol-1.myshopify.com/', type: 'basic' },
    ]

    //source: https://www.w3schools.com/icons/fontawesome_icons_brand.asp
    const socials = [
        { url: 'https://www.facebook.com/tj.ghinder/', icon: 'fa fa-facebook-square' },
        { url: 'https://www.instagram.com/tjghinder/', icon: 'fa fa-instagram' },
        { url: 'https://open.spotify.com/artist/4Sbof7IsxEPRH3Wfawgo6U?si=_E_bFcd-TWmC27VhlJzNZA', icon: 'fa fa-spotify' },
        { url: 'https://soundcloud.com/nyamebeats', icon: 'fa fa-soundcloud' },
        { url: 'https://www.linkedin.com/in/tj-ghinder-09516869/', icon: 'fa fa-linkedin-square' },
        { url: 'https://github.com/TJGhinder', icon: 'fa fa-github' },
    ]

    return (
        <div className='body-container style-5'>

            <div className='ui-container'>
                <div className='top-layer'>
                    <div className='top-photos-container'>
                        <div className='photo-1-container'><div className='fade' /></div>
                        <div className='photo-2-container'>
                            <InstagramPhoto />
                        </div>
                    </div>

                    <div className='header-info-container'>
                        <h1>TJ Ghinder</h1>
                        <h2>@tjghinder</h2>
                        <div>Socials:</div>
                        <ul className='socials-list'>
                            {socials.map(item => {
                                return (
                                    <a href={item.url} target='_blank' className='socials-list-item clickable'>
                                        <i class={item.icon} style={{ fontSize: "24px" }} />
                                    </a>
                                )
                            })}
                        </ul>

                    </div>

                    {/* <div className='links-container'>
                        <div className='link-segment-title'>Portfolio:</div>
                        <ul className='links-list'>
                            {fakeLinks.map(link => {
                                return (
                                    <a className='links-list-item clickable' target='_blank' href={link.url}>
                                        <li className={`${link.type}`}><h2>{link.title}</h2></li>
                                    </a>
                                )
                            })}
                        </ul>
                    </div> */}

                    <div className='links-container'>
                        <div className='link-segment-title'>Currently Listening:</div>
                        <ul className='links-list'>
                            {fakeSecondLinks.map(link => {
                                return (
                                    <a className='links-list-item clickable' target='_blank' href={link.url}>
                                        <li className={`link-list-contents ${link.type}`}><i class="fa fa-headphones"></i><h2>{link.title}</h2></li>
                                    </a>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='footer'>
                        <div>Suggested Link:</div>
                        <div className='ad-container'>Ad</div>
                        <div>Powered by LinkStream</div>
                    </div>
                </div>


                <div className='bottom-layer'>
                    <ParticleComponent />
                </div>

            </div>
        </div >
    )
}
