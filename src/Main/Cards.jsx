import React, { Component } from "react";
import Slider from "react-slick";
import style from "../Main/Cards.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../Image/cake.png";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";

class Cards extends Component {
  render() {
   
    const settings = {
      dots: false,
      infinite: true,
      cssEase: 'linear',
      speed: 1100,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
       {
         
          breakpoint: 990,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            
          }
        },
        {
breakpoint:900,
   settings:{
    slidesToShow: 4,
    slidesToScroll: 1,

}

        },
{
          breakpoint:720 ,
          settings:{
            slidesToShow: 3,
            slidesToScroll: 1,

          }
        },
{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,    
          }
        }
      ]
    };
  
    return (
      <div className={style.main_slider}>
        <Slider className={style.customs} {...settings}>
          {this.props.categories &&
            this.props.categories.map((el) => (
              <div>
                <img
                  onClick={() => this.props.getCategoriesById(el.id)}
                  src={el.icon_png}
                  height="141px"
                  width="151px"
                  style={{ marginTop: "0.2%" }}
                  className={style.image}
                  alt="image"
                />
                <div className={style.cookies}>{el.title}</div>
              </div>
            ))}
        </Slider>
        </div>
      
    );
  }
}
export default Cards;
