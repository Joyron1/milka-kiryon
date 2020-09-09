import React from 'react';
import cafeMenu from './cafeMenu.json';
import './cafeMenu.css';
import ScrollUpButton from "react-scroll-up-button";
import $ from 'jquery';

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

import page1 from '../../../../Images/cafeMenu_p1.jpg';
import page2 from '../../../../Images/cafeMenu_p2.jpg';
import page3 from '../../../../Images/menu_dess-2.jpg';

class CafeMenu extends React.Component {

    hotIcon = "https://img.icons8.com/color/48/000000/chili-pepper.png";
    heartIcon = "https://img.icons8.com/color/48/000000/hearts.png";
    veganIcon = "https://img.icons8.com/color/48/000000/vegetarian-mark.png"

    componentDidMount() {



        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    async closeNavigationButton() {
        setTimeout(function () { document.getElementById('fastNavigationButton').click(); }, 1000)
    }

    scrollToTop = (id) => {
        let element = document.getElementById('topBtn');
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }

    scrollToCard = (id) => {
        $('scrollBtn').hide();
        var elmnt = document.getElementById(`${id}`);
        elmnt.scrollIntoView({
            behavior: 'smooth'
        });

        this.closeNavigationButton();
    }

    render() {
        console.log(window.scrollY)
        return (


            <div className="Body">

                <Link to="/" style={{ color: "white" }}><CloseIcon fontSize="large" style={{ float: "left" }} /></Link>
                <div className=" mainCafeMenu">
                    {/* <ScrollUpButton></ScrollUpButton> */}
                    <div className="pt-4 text-light" >
                        <div className="mt-3">ערכנו כמה שינויים בתפריט...</div>
                        <div className="">שמרנו על הדברים שהכי אהבתם !</div>
                        <div style={{ fontSize: "25px", letterSpacing: "3px" }}><b>בתאבון!</b></div>
                    </div>

                    <hr />

                    <div className="p-2" id="navBtns" >
                        <button className="btn btn-light my-2" id="fastNavigationButton" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            תפריט ניווט מהיר<ExpandMoreOutlinedIcon />
                        </button>
                        <div className="collapse container" id="collapseExample">
                            {cafeMenu.map((section, index) => (
                                <button type="button" className="col- btn btn-light my-2 DropButtons" onClick={(i) => this.scrollToCard(index)}>{section.name}</button>
                            ))}
                        </div>

                    </div>

                    <hr />

                    <div className="row no-gutters mt-3" >
                        <div className="col-xl-4 col-md-3 col- mt-2"></div>
                        <div className="col-xl-4  col-md-6 col- mt-2">
                            <div className="row no-gutters">
                                <div className="col-4">
                                    <p style={{ color: "white" }}><img src={this.heartIcon} width="20" /> - מומלץ </p>
                                </div>
                                <div className="col-4">
                                    <p style={{ color: "white" }}> <img src={this.hotIcon} width="20" /> - חריף  </p>
                                </div>
                                <div className="col-4">
                                    <p style={{ color: "white" }}><img src={this.veganIcon} width="20" /> - טבעוני </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-3 col- mt-2"></div>
                    </div>

                    <hr />

                    {cafeMenu.map((section, i) => (
                        <div className="mt-4 text-light">
                            <div id={i} style={{ height: "60px" }}> </div>
                            <div >
                                <div className="card-header container">
                                    <div id='headerTitle'>{section.name}</div>
                                    {section.name == "איטלקי" ?
                                        <div>
                                            <div id="headerPasta">{section.description.free}</div>
                                            <div id="headerPasta">{section.description.cost}</div>
                                        </div>
                                        :
                                        <div id="headerDescription">{section.description}</div>
                                    }
                                </div>
                                <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                                    {cafeMenu[i]['dishes'].map((dishObj, i) => (
                                        <div className="dishCard my-3">
                                            <div id="price">{dishObj.price}</div>
                                            <div> <span id="name"> {dishObj.name} </span> <span> {dishObj.favorite ? <img src={dishObj.favorite} width="20" /> : <span></span>}</span> <span> {dishObj.hot ? <img src={dishObj.hot} width="20" /> : <span></span>}</span> <span> {dishObj.vegan ? <img src={dishObj.vegan} width="20" /> : <span></span>}</span></div>
                                            <div id="description"> {dishObj.description}</div>
                                            {dishObj.addons ? <div id="description"> {dishObj.addons}</div> : <div></div>}
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                                {section.name == "ארוחות בוקר" ?
                                    <div className="card-footer">
                                        <div id="description"> <u>{section.addons.title}:</u> {section.addons.options} </div>
                                    </div>
                                    :
                                    <div></div>}
                            </div>
                        </div>
                    ))}
                </div >
            </div >
        );
    }

}
export default CafeMenu;



