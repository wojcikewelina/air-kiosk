import React, { Component } from 'react';
import "../style/Footer.scss"



class Footer extends Component {
    render() {
        return (

            <footer className="footer-element">
                <div className="left-part"><ul>
                    <li>strona główna</li>
                    <li>aukcje</li>
                    <li>nowości</li>
                    <li>promocje</li>
                </ul></div>
                <div className="right-part">
                    <span> odzwiedź nas na: </span>
                    <img src="https://www.nowicka-misiewicz.com/wp-content/uploads/2016/02/facebook-ikona.png" alt="fb" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhJzyR2BVDiEBj9sdAaqiSaHcjxMBWhyUa5A&usqp=CAU" alt="gg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQKE_FqPjUfdNKMacjpd7IXyOnIO4WAAamVw&usqp=CAU" alt="printest" />
                    <img src="https://www.iconarchive.com/download/i78494/designbolts/cute-social-media/Youtube.ico" alt="youtube" />
                    <img src="https://f0.pngfuel.com/png/617/72/blue-and-white-in-logo-png-clip-art-thumbnail.png" alt="linkedin" />
                    <img src="https://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png" alt="instagram" />


                </div>
            </footer>
        )
    }
}
export default Footer;