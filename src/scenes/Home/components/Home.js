import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/blog.css';
import FeynmanDiagram from '../images/Feynmandiagram.svg'


class Banner extends Component{
    render(){
        return(
            <div className="row" style={{position:'relative', borderStyle:'hidden hidden solid hidden',borderWidth:'0px 0px 0.3em 0px',height:'18em', 
                    backgroundPosition:'50% 50%', backgroundSize:'10em',
                    backgroundColor:'#ee0000', backgroundImage: `url(${FeynmanDiagram})`,
                    opacity:'0.8'}}>
                    <h1 className="blend-title box-title" align='center' style={{position:'absolute', top: '50%',
        left: '50%', msTransform: 'translate(-50%, -50%)', transform: 'translate(-50%, -50%)'}}>{this.props.children}</h1>
            </div>
            );
    }
}

class ProfileDescription extends Component {
    render(){
        return(
            <div style={{margin:'20px', padding:'20px', backgroundColor:'white'}}>
                <h2 style={{paddingTop:'10px'}}>
                    {"First Blog Post"}
                </h2>
                <hr/>
                <h3>
                {"I decided to create a personal Blog!"}
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur euismod imperdiet. Vestibulum lobortis leo sit amet turpis maximus tincidunt. Ut tristique purus placerat tellus pharetra convallis. Aliquam erat volutpat. Vestibulum nunc sapien, ultrices quis felis id, laoreet hendrerit mauris. Nulla et massa vitae nulla lacinia lacinia. Aliquam mollis urna elit, et fermentum sapien aliquet in. Etiam elit diam, luctus ac vestibulum at, iaculis vel nisi. In vel ligula sed ligula congue porta a a enim. Maecenas ultrices magna a enim eleifend varius.
                </p>
                <p>
                    Phasellus vel vestibulum erat, varius feugiat sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in tortor nisi. Sed eu ex ultrices, pulvinar metus quis, lobortis neque. Vivamus quis ante sagittis, facilisis urna placerat, venenatis nulla. Aenean ullamcorper magna nisi, eu vehicula tellus pellentesque vel. Vestibulum vestibulum, diam ut tristique venenatis, metus tortor aliquet orci, a porta arcu tortor a ex.
                </p>
                <p>
                    Pellentesque eget luctus neque. Phasellus gravida, justo in lobortis ultrices, nisl nisi venenatis velit, vel condimentum neque enim et erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vehicula sapien lorem, ac tincidunt elit consectetur a. Maecenas dictum consequat ornare. Donec mattis bibendum magna, facilisis posuere lorem. Ut vulputate faucibus maximus. Mauris non luctus lorem. In ultrices dictum dui. Proin porttitor eros sed arcu molestie feugiat. Donec purus felis, bibendum sed neque id, fermentum cursus mauris.
                </p>
                <p>
                    Vestibulum dictum, erat in posuere malesuada, nulla lectus luctus lorem, non sodales lorem tellus in nibh. Nullam sed justo massa. Proin auctor, odio a finibus pretium, tellus nibh ultricies est, vel tempor enim leo eu odio. Sed id nisi a libero sodales tristique vel a nisl. Cras bibendum tempus ligula, sit amet interdum magna faucibus a. Vivamus vel neque eget augue ullamcorper semper et et ex. Praesent vel tortor magna. Donec ultrices ultrices bibendum. Pellentesque condimentum lacus id orci elementum lacinia. In hac habitasse platea dictumst.  
                </p>
            </div>
        );
    }
}

function Footer(){
    return(
        <footer id="my-footer" className="container-fluid">
            <div className="row">
                <div className="col-lg-12 card-footer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 300 53">
                        <g id="git">
                            <circle xmlns="http://www.w3.org/2000/svg" cx="24" cy="24" fill="transparent" stroke='transparent' strokeWidth="3px" r="24" />
                            <path d="M 296.133 354.174 c 49.885 -5.891 102.942 -24.029 102.942 -110.192 c 0 -24.49 -8.624 -44.448 -22.67 -59.869 c 2.266 -5.89 9.515 -28.114 -2.734 -58.947 c 0 0 -18.139 -5.898 -60.759 22.669 c -18.139 -4.983 -38.09 -8.163 -56.682 -8.163 c -19.053 0 -39.011 3.18 -56.697 8.163 c -43.082 -28.567 -61.22 -22.669 -61.22 -22.669 c -12.241 30.833 -4.983 53.057 -2.718 58.947 c -14.061 15.42 -22.677 35.379 -22.677 59.869 c 0 86.163 53.057 104.301 102.942 110.192 c -6.344 5.452 -12.241 15.873 -14.507 30.387 c -12.702 5.438 -45.808 15.873 -65.758 -18.592 c 0 0 -11.795 -21.31 -34.012 -22.669 c 0 0 -22.224 -0.453 -1.813 13.592 c 0 0 14.96 6.812 24.943 32.653 c 0 0 13.6 43.089 76.179 29.48 v 38.543 c 0 5.906 -4.53 12.702 -15.865 10.89 C 96.139 438.977 32.2 354.626 32.2 255.77 c 0 -123.807 100.216 -224.022 224.03 -224.022 c 123.347 0 224.023 100.216 223.57 224.022 c 0 98.856 -63.946 182.754 -152.828 212.688 c -11.342 2.266 -15.873 -4.53 -15.873 -10.89 V 395.45 C 311.1 374.577 304.288 360.985 296.133 354.174 L 296.133 354.174 Z M 512 256.23 C 512 114.73 397.263 0 256.23 0 C 114.73 0 0 114.73 0 256.23 C 0 397.263 114.73 512 256.23 512 C 397.263 512 512 397.263 512 256.23 L 512 256.23 Z" transform="scale(0.1)" />
                        </g>
                        <g id="linkedIn" transform="translate(70,2) scale(1.02)">
                            <circle xmlns="http://www.w3.org/2000/svg" cx="24" cy="24" fill="transparent" stroke="#000000" strokeWidth="3px" r="24" />
                            <path xmlns="http://www.w3.org/2000/svg" d="M17.4,34.9h-4.6V20.1h4.6V34.9z M14.9,18.2L14.9,18.2c-1.7,0-2.8-1.1-2.8-2.6c0-1.5,1.1-2.6,2.8-2.6  c1.7,0,2.8,1.1,2.8,2.6C17.7,17.1,16.7,18.2,14.9,18.2z M35.9,34.9h-5.3v-7.7c0-2-0.8-3.4-2.6-3.4c-1.4,0-2.1,0.9-2.5,1.8  c-0.1,0.3-0.1,0.8-0.1,1.2v8h-5.2c0,0,0.1-13.6,0-14.8h5.2v2.3c0.3-1,2-2.5,4.6-2.5c3.3,0,5.9,2.1,5.9,6.7V34.9z" fill="#000000" />
                        </g>
                        <g id="twitter">
                            <circle xmlns="http://www.w3.org/2000/svg" cx="24" cy="24" fill="transparent" stroke="transparent" strokeWidth="3px" r="24" transform="translate(140,0)" />
                            <g transform="scale(0.1) translate(1380,0)">
                                <path d="M258.8,507.2C120.4,507.8,6.6,392.6,9.9,251.9C13,118,123.9,7.2,261.9,8.7C398.7,10.1,511.8,124,508.1,264.8   C504.6,398.2,394.6,507.8,258.8,507.2z M477.8,257.8C476.7,132.4,375.1,35.9,255.2,38C138.6,40,40.1,135.2,40.4,258.4   C40.7,383.9,143.1,480.2,263,478C379.5,475.8,477,380.8,477.8,257.8z" />
                                <path d="M99,230.2c10.3,2.9,20.3,5.8,30.4,8.6c0.3-0.5,0.6-1.1,0.9-1.6c-20.1-15.5-31-35.4-30.5-60.9c0.2-13.2,4.1-27.1,9.8-34.2   c39,45.3,87.9,70.9,147,74.7c0.5-10.9-0.1-21.3,1.6-31.3c7.3-42.1,55.6-68.6,95.4-53c9.4,3.7,17.8,8.9,25.4,15.6   c1.5,1.3,4.6,2.4,6.4,1.8c12.1-4.1,24-8.6,36-13.1c1.7-0.6,3.2-1.6,5.8-3c-5.5,16.9-15.7,28.9-28.8,39.4c4.1-0.7,8.2-1.3,12.2-2.2   c4.4-1,8.7-2.3,13-3.7c4-1.3,8-2.8,13.1-4.7c-9,13.5-19.1,24.2-30.9,33.3c-3.4,2.6-4.7,5.1-4.7,9.5c0.5,55.5-18.3,103.8-55.2,144.8   c-28.8,32-64.9,51.9-107.3,60.1c-32.1,6.2-63.9,5.6-95.6-2.7c-19.4-5.1-37.7-13.1-54.8-23.6c-0.5-0.3-0.9-0.8-1.9-1.7   c38.9,3.3,73.5-6.1,105.2-29.9c-33.1-3.2-55-19.6-67.3-50.5c10.7,0,20.5,0,30.3,0c0.1-0.5,0.2-1.1,0.3-1.6   c-20.6-5.6-36.5-17.4-46.9-36.1C101.8,253.5,99.1,242,99,230.2z" />
                            </g>
                        </g>
                    </svg>
                    <p>Created by Dominic Chang</p>
                </div>
            </div>
        </footer>
        )
}
class Home extends Component {
    render() {
        return(
        <Fragment>
            <div className="container-fluid">
                <Banner>Physics Blog</Banner>
                <div className="row" style={{boxShadow:'0px 0px 10px 10px rgba(0,0,0,0.4)',zIndex:'2'}}>
                     <div className='col-lg-8' style={{backgroundColor:'#eeeeee'}}>
                        <ProfileDescription/>
                        <ProfileDescription/>
                     </div>
                     <div className='col-lg-4' style={{backgroundColor:'#eeeeee'}}>
                        <ProfileDescription/>
                     </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
        );
    }
}

export default Home;