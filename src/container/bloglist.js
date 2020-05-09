import React, { Component } from 'react'
import Layout from '../components/layout'
import './bloglist.less'

export default class bloglist extends Component {
render() {
return (

        < div>
            <ul class="cards">
                <li class="cards__item">
                    <div class="card">
                        <div class="card__image" style={{backgroundImage: 'url(https://unsplash.it/800/600?image=59)'}}></div>
                        <div class="card__content">
                            <div class="card__title">
                            How to Deliver Exceptional
                            </div>
                            <p class="card__owner"> 
                                Ashwani Madhukar <br/>
                            </p>
                            <span className= "card__read">
                                    May 09 - 6 min read
                            </span>  
                        </div>
                    </div>
                </li>
                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--river"></div>
                        <div class="card__content">
                            <div class="card__title">Flex Grow</div>
                            <p class="card__owner"> 
                                Ashwani Madhukar <br/>
                            </p>
                            <span className= "card__read">
                                    May 09 - 6 min read
                            </span>  
                        </div>
                    </div>
                </li>
                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--record"></div>
                        <div class="card__content">
                            <div class="card__title">Flex Shrink</div>
                            <p class="card__owner"> 
                                Ashwani Madhukar <br/>
                            </p>
                            <span className= "card__read">
                                    May 09 - 6 min read
                            </span>  
                        </div>
                    </div>
                </li>
                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--flowers"></div>
                        <div class="card__content">
                            <div class="card__title">Flex Basis</div>
                            <p class="card__owner"> 
                                Ashwani Madhukar <br/>
                            </p>
                            <span className= "card__read">
                                    May 09 - 6 min read
                            </span>  
                        </div>
                    </div>
                </li>
            </ul>
    </div>
    
    )
    }
    }