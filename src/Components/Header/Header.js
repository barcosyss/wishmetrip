import React from 'react'
import './Header.css'
import logo from '../../assets/images/LOGO.svg'
import language from '../../assets/images/found_trip/language.png'
import mainBanner from '../../assets/images/found_trip/banner.svg'
import banner from '../../assets/images/banner_main.jpg'
import Search from '../Search/Search'
import Tilt from '../Tilt/Tilt'
import { Link } from 'react-router-dom'
import { $ }  from 'react-jquery-plugin'

$(window).ready(function(){
    var TEXTS = ["Money", "Holidays"];

var index = 0;

$(function() {
  setInterval(function() {
    $('#header-text-change').fadeOut(2000, function() {
      $(this).text(TEXTS[index++]).fadeIn(2000);
      if (index === TEXTS.length)
        index = 0
    }); 
  }, 4000);
});
    $(window).scroll(function(){
        const navEl = document.querySelector('.navbar')
        if($('html').scrollTop() > 100){
            $(navEl).addClass('navbar-scroll')
        }
        else {
            $(navEl).removeClass('navbar-scroll')
        }
    })

    


})

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='home-banner home-banner1'>
            <div className='add-gradient'>
                <nav className="navbar navbar-light fixed-top justify-content-between pt-3">
                    <a className="navbar-brand">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </a>
                    <div>
                        
                        <div class="main">
                            <input type="checkbox" id="drop-5" hidden/>
                            <div className='tooltip-top'></div>
                            <label class=" dropdown2 dropHeader-5" for="drop-5">Top Beach Destinations <i class="fa fa-angle-down mx-1"></i></label>
                            <div class="list list-5">
                            <div class="item">Maldives</div>
                            <div class="item">Bali</div>
                            <div class="item">Phi Phi Island</div>
                            <div class="item">Goa</div>
                            <div class="item">Kerela</div>
                            <div class="item">Andaman Nicobar Island</div>
                            <div class="item">Paris</div>
                            <div class="item">Budapest</div>
                            <div class="item">Scotland</div>
                            <div class="item">Australia</div>
                            <div class="item">Mumbai</div>
                            </div>
                        </div>
                        <div class="main">
                            <input type="checkbox" id="drop-4" hidden/>
                            <label class=" dropdown2 dropHeader-5" for="drop-4">Europe Experience <i class="fa fa-angle-down mx-1"></i></label>
                            <div class="list list-4">
                            <div class="item">Rome</div>
                            <div class="item">London</div>
                            <div class="item">Paris</div>
                            <div class="item">Prague</div>
                            <div class="item">Amsterdam</div>
                            <div class="item">Athens</div>
                            <div class="item">Santorini</div>
                            <div class="item">Florence</div>
                            </div>
                        </div>
                        <div class="main">
                            <input type="checkbox" id="drop-1" hidden/>
                            <label class=" dropdown2 dropHeader-5" for="drop-1">Tours and Packages <i class="fa fa-angle-down mx-1"></i></label>
                            <div class="list list-1">
                            <div class="item">Bali Tour Packages</div>
                            <div class="item">Maldives Tour Packages</div>
                            <div class="item">Thailand Tour Packages</div>
                            <div class="item">Srilanka Tour Packages</div>
                            <div class="item">Malasia Tour Packages</div>
                            <div class="item">Singapore Tour Packages</div>
                            <div class="item">London Tour Packages</div>
                            <div class="item">Paris Tour Packages</div>
                            <div class="item">Scotland Tour Packages</div>
                            <div class="item">Australia Tour Packages</div>
                            </div>
                        </div>

                        <div class="main">
                            <input type="checkbox" id="drop-3" hidden/>
                            <label class=" dropdown2 dropHeader-5" for="drop-3">Seasonal Tour <i class="fa fa-angle-down mx-1"></i></label>
                            <div class="list list-3">
                            <div class="item">Summer</div>
                            <div class="item">Winter</div>
                            <div class="item">Monsoon</div>
                            <div class="item">Spring</div>
                            </div>
                        </div>
                        {/* <div class="dropdown2 mx-2">Top Beach Destinations <i class="fa fa-angle-down mx-1"></i>
                            <ul class="dropdown-menu2">
                                <li><a href="#">Maldives</a></li>
                                <li><a href="#">Bali</a></li>
                                <li><a href="#">Goa</a></li>
                            </ul>
                        </div>
                        <div class="dropdown2 mx-2">Europe Experience <i class="fa fa-angle-down mx-1"></i>
                            <ul class="dropdown-menu2">
                                <li><a href="#">Rome</a></li>
                                <li><a href="#">London</a></li>
                                <li><a href="#">Paris</a></li>
                                <li><a href="#">Prague</a></li>
                                <li><a href="#">Amsterdam</a></li>
                                <li><a href="#">Athens</a></li>
                                <li><a href="#">Santorini</a></li>
                                <li><a href="#">Florence</a></li>
                            </ul>
                        </div>
                        <div class="dropdown2 mx-2">Visa on Arrival <i class="fa fa-angle-down mx-1"></i>
                            <ul class="dropdown-menu2">
                                <li><a href="#">Easy Access</a></li>
                                <li><a href="#">Minimal documents</a></li>
                            </ul>
                        </div>
                        <div class="dropdown2 mx-2">Customize Packages <i class="fa fa-angle-down mx-1"></i>
                            <ul class="dropdown-menu2">
                                <li><a href="#">Tours and packages</a></li>
                                <li><a href="#">Hotels with Flights</a></li>
                            </ul>
                        </div>
                        <div class="dropdown2 mx-2">Seasonal Tour <i class="fa fa-angle-down mx-1"></i>
                            <ul class="dropdown-menu2">
                                <li><a href="#">Winter</a></li>
                                <li><a href="#">Summer</a></li>
                                <li><a href="#">Monsoon</a></li>
                                <li><a href="#">Spring</a></li>
                            </ul>
                        </div> */}
                    </div>
                    <div>
                        {/* <div class="dropdown2 mx-2"><img className='language-svg' src={language} alt="" />
                            <ul class="dropdown-menu2">
                                <li><a href="#">English</a></li>
                                <li><a href="#">Hindi</a></li>
                            </ul>
                        </div> */}
                        <div class="dropdown2 mx-2"><i class="fa fa-user user-icon" aria-hidden="true"></i>
                            <ul class="dropdown-menu2 dropdown4">
                                <li><a href="#">Login</a></li>
                                {/* <li><a href="#">Logout</a></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <button className='button-header'>Login</button> */}
                </nav>
            </div>
            <div className='text-on-new-header'>
                We value your 
                <h1 id="header-text-change">
                    Time
                </h1>
            </div>
            {/* <Tilt/> */}
            <Search/>
        </div>
    </div>
    </>
  )
}

export default Header