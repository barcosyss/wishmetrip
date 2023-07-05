import React from 'react'
import './Scroll.css'
import { $ }  from 'react-jquery-plugin'
import PopularTour from '../PopularTour/PopularTour';
import SeasonalTour from '../SeasonalTour/SeasonalTour';
import DifferentUs from '../DifferentUs/DifferentUs';
import AboutUs from '../AboutUs/AboutUs';
import TravelWithUs from '../TravelWithUs/TravelWithUs';
import Testimonials from '../Testimonials/Testimonials';
import blueBg from '../../assets/images/blue-bg.jpg';
import greenBg from '../../assets/images/green-bg.jpg';

// var newFlat = $('.scroll-event')
// console.log(newFlat.length, 'hjhj')
// $(window).ready(function() {
//   console.log(newFlat.length)
  
//     $(window).scroll(function() {
//       if(window.location.href === 'http://localhost:3000'){
//       var compensation = $(window).height() / 2;
//       var home = ($('.landingpage').offset().top) - compensation;
//       var help = ($('.wecanhelp').offset().top) - compensation;
//       var statement = ($('.internet-statement').offset().top)- compensation;
//       var projects = ($('.projects').offset().top) - compensation;
//       var knowmore = ($('.know-more-about').offset().top) - compensation;
//       var footer = ($('footer').offset().top) - compensation;
//       var scrollPos = $(document).scrollTop();
      
      
//       if (scrollPos >= help && scrollPos < statement) {
//         $('.section-title-underlay1').css('display', 'flex');
//         $('.section-title-underlay2').css('display', 'none');
//         $('.section-title-underlay3').css('display', 'none');
//         $('.section-title-underlay4').css('display', 'none');
//       }
//       else if (scrollPos >= statement && scrollPos < projects) {
//         $('.section-title-underlay2').css('display', 'flex');
//         $('.section-title-underlay1').css('display', 'none');
//         $('.section-title-underlay3').css('display', 'none');
//         $('.section-title-underlay4').css('display', 'none');
//       }
//       else if (scrollPos >= projects && scrollPos < knowmore) {
//         $('.section-title-underlay3').css('display', 'flex');
//         $('.section-title-underlay2').css('display', 'none');
//         $('.section-title-underlay1').css('display', 'none');
//         $('.section-title-underlay4').css('display', 'none');
//       }
//       else if (scrollPos >= knowmore && scrollPos < footer) {
//         $('.section-title-underlay4').css('display', 'flex');
//         $('.section-title-underlay2').css('display', 'none');
//         $('.section-title-underlay1').css('display', 'none');
//         $('.section-title-underlay3').css('display', 'none');
//       }
//       else {
//         $('.section-title-underlay').text('');  
//       } 
//     }
//     }); 
  
//   }); 

const Scroll = () => {
  return (
    <body className='body'>
    <div class="wrapper">
      <div class="scroll"></div>
      <div class="fixed one" style={{ backgroundImage: 'url('+blueBg+')' }}>
        <DifferentUs/>
      </div>
      <div class="scroll"></div>
      <div class="fixed two" style={{ backgroundImage: 'url('+greenBg+')' }}>
          <Testimonials/>
      </div>
      <div class="scroll"></div>
      <div class="fixed three">
        <TravelWithUs/>
      </div>
      <div class="scroll"></div>
      <div class="fixed three" style={{ backgroundImage: 'url('+greenBg+')' }}>
        <AboutUs/>
      </div>
    </div>
    </body>
  )
}

export default Scroll
