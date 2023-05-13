import React from 'react';
import './BackgroundCircles.scss'
import classnames from "classnames";

import firstCircle from '../../images/5.png'
import secondCircle from '../../images/6.png'
import thirdCircle from '../../images/7.png'
import forthCircle from '../../images/8.png'

const BackgroundCircles = ({secondary = false}) => {
    return <div className={classnames("background-circles", {"background-circles-secondary": secondary})}>
        <div className="background-circles__item background-circles__item-1">
            <div className="background-circles__item_image" style={{
                backgroundImage: `url(${firstCircle})`
            }}/>
            <div className="background-circles__item_text">Happy birthday!</div>
        </div>
        <div className="background-circles__item background-circles__item-2">
            <div className="background-circles__item_image" style={{
                backgroundImage: `url(${secondCircle})`
            }}/>
            <div className="background-circles__item_text">Happy birthday!</div>
        </div>
        <div className="background-circles__item background-circles__item-3">
            <div className="background-circles__item_image" style={{
                backgroundImage: `url(${thirdCircle})`
            }}/>
            <div className="background-circles__item_text">Happy birthday!</div>
        </div>
        <div className="background-circles__item background-circles__item-4">
            <div className="background-circles__item_image" style={{
                backgroundImage: `url(${forthCircle})`
            }}/>
            <div className="background-circles__item_text">Happy birthday!</div>
        </div>


        <div className="background-circles__item background-circles__item-5">
            <div className="background-circles__item_image" style={{
                backgroundImage: `url(${secondCircle})`
            }}/>
            <div className="background-circles__item_text">Happy birthday!</div>
        </div>
        <div className="background-circles__item background-circles__item-6">
            <div className="background-circles__item_image" style={{
                backgroundImage: `url(${firstCircle})`
            }}/>
            <div className="background-circles__item_text">Happy birthday!</div>
        </div>
        <div className="background-circles__item background-circles__item-7">
            <div className="background-circles__item_image" style={{
                backgroundImage: `url(${thirdCircle})`
            }}/>
            <div className="background-circles__item_text">Happy birthday!</div>
        </div>
        <div className="background-circles__item background-circles__item-8">
            <div className="background-circles__item_image" style={{
                backgroundImage: `url(${forthCircle})`
            }}/>
            <div className="background-circles__item_text">Happy birthday!</div>
        </div>
    </div>
}

export default BackgroundCircles