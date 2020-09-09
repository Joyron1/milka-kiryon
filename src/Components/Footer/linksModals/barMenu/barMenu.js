import React from 'react';
import barMenu from './barMenu.json';
import './barMenu.css';

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

class CafeMenu extends React.Component {

    hotIcon = "https://img.icons8.com/color/48/000000/chili-pepper.png";
    heartIcon = "https://img.icons8.com/color/48/000000/hearts.png";
    veganIcon = "https://img.icons8.com/color/48/000000/vegetarian-mark.png"

    componentDidMount() {

        window.addEventListener('scroll', () => {
            // console.log(window.scrollY)
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
        var elmnt = document.getElementById(`${id}`);
        elmnt.scrollIntoView({
            behavior: 'smooth'
        });

        this.closeNavigationButton();
    }

    render() {
        console.log(window.scrollY)
        return (

            <div className="barBody">

                {/* תפריט בתצוגת מובייל */}
                <Link to="/" style={{ color: "white" }}><CloseIcon fontSize="large" style={{ float: "left" }} /></Link>
                <div className="container mainBarMenu pb-4">
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
                            {barMenu.map((section, i) => (
                                <button type="button" className="col- btn btn-light my-2 DropButtons" onClick={() => this.scrollToCard(i)}>{section.name}</button>
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

                    {barMenu.map((section, i) => (
                        <div className="mt-4 text-light">
                            <div id={i} style={{ height: "60px" }}> </div>
                            <div >
                                <div className="card-header container">
                                    <div id='barHeaderTitle'>{section.name}</div>
                                    {section.name == "בירות חבית" || section.name == "וודקה" || section.name == "יין אדום" || section.name == "יין לבן" || section.name == "לבן מבעבע" ?
                                        <div id="barHeaderDescription" style={{ textAlign: "left" }}>{section.description}</div>
                                        :
                                        <div id="barHeaderDescription">{section.description}</div>
                                    }
                                </div>
                                <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                                    {barMenu[i]['dishes'].map((dishObj, i) => (
                                        <div className="dishCard my-3">
                                            <div id="barPrice">{dishObj.price}</div>
                                            {dishObj.name == "סקוטי סינגל מאלט" || dishObj.name == "סקוטי בלנדד" || dishObj.name == "אירי" || dishObj.name == "אמריקאי" ? <div id="barName" style={{ fontSize: "17px", color: "rgb(189, 160, 0)", textDecorationLine: "none" }}> {dishObj.name} </div> : <div id="barName"> {dishObj.name}
                                                <span> {dishObj.favorite ? <img src={dishObj.favorite} width="20" /> : <span></span>}</span> <span>{dishObj.hot ? <img src={dishObj.hot} width="20" /> : <span></span>}</span> <span> {dishObj.vegan ? <img src={dishObj.vegan} width="20" /> : <span></span>}
                                                </span>
                                            </div>
                                            }
                                            <div id="barDescription"> {dishObj.description}</div>
                                            {dishObj.addons ? <div id="description"> {dishObj.addons}</div> : <div></div>}
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div >
            </div>
        );
    }

}
export default CafeMenu;



