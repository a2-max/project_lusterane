import React from 'react';
import { FaUser, FaClock, FaTags } from "react-icons/fa";
import FeatureImage from '../../partials/ClientsUploadedImage/pic1.png';
import { InlineShareButtons } from 'sharethis-reactjs';

function MainPost() {
    return (
        <>
            <div className='breadcrumb'>
                <a href='#' className='link home'>Home</a>
                <a href='#' className='link'>JavaScript</a>
            </div>

            {/* Post Title */}
            <span className='post-title'>Create your own Portfolio website using HTML CSS and JavaScript</span>

            {/* Meta Data */}
            <div className='meta'>
                <a href='author' className='meta-data author'><FaUser /> Rijan Neupane</a>
                <span className='meta-data date'><FaClock /> September 10, 2002</span>
            </div>

            {/* Social Share */}

            <InlineShareButtons className='social-share'
                config={{
                    alignment: 'left',  // alignment of buttons (left, center, right)
                    color: 'social',      // set the color of buttons (social, white)
                    enabled: true,        // show/hide buttons (true, false)
                    font_size: 16,        // font size for the buttons
                    labels: 'cta',        // button labels (cta, counts, null)
                    language: 'en',       // which language to use (see LANGUAGES)
                    networks: [          // which networks to include (see SHARING NETWORKS)
                        'facebook',
                        'twitter',
                        'whatsapp',
                        'linkedin',
                        'messenger',
                    ],
                    padding: 12,          // padding within buttons (INTEGER)
                    radius: 4,            // the corner radius on each button (INTEGER)
                    show_total: true,
                    size: 40,             // the size of each button (INTEGER)

                    // OPTIONAL PARAMETERS
                    url: 'https://www.rijanneupane.com.np', // (defaults to current url)
                    // image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                    // description: 'custom text',       // (defaults to og:description or twitter:description)
                    // title: 'custom title',            // (defaults to og:title or twitter:title)
                    // message: 'custom email text',     // (only for email sharing)
                    // subject: 'custom email subject',  // (only for email sharing)
                    // username: 'custom twitter handle' // (only for twitter sharing)
                }}
            />







            {/* Feature Image */}
            <div className='feature-image'>
                <img src={FeatureImage} className='image' />
            </div>

            {/* Main Post Content */}
            <span className='post-content'>
                Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
                Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
                Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
                Reading is easier, too, in the new Reading view.
            </span>

            {/* Tags  */}
            <div className='tags-area'>
                <span className='tag heading'><FaTags /> Tags</span>
                <span className='tag'>HTML & CSS</span>
                <span className='tag'>PHP</span>
                <span className='tag'>JavaScript</span>
            </div>

            {/* Social Share */}

            <InlineShareButtons className='social-share'
                config={{
                    alignment: 'left',  // alignment of buttons (left, center, right)
                    color: 'social',      // set the color of buttons (social, white)
                    enabled: true,        // show/hide buttons (true, false)
                    font_size: 16,        // font size for the buttons
                    labels: 'cta',        // button labels (cta, counts, null)
                    language: 'en',       // which language to use (see LANGUAGES)
                    networks: [           // which networks to include (see SHARING NETWORKS)
                        'facebook',
                        'twitter',
                        'whatsapp',
                        'linkedin',
                        'messenger',
                    ],
                    padding: 12,          // padding within buttons (INTEGER)
                    radius: 4,            // the corner radius on each button (INTEGER)
                    show_total: true,
                    size: 40,             // the size of each button (INTEGER)

                    // OPTIONAL PARAMETERS
                    url: 'https://www.rijanneupane.com.np', // (defaults to current url)
                    // image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                    // description: 'custom text',       // (defaults to og:description or twitter:description)
                    // title: 'custom title',            // (defaults to og:title or twitter:title)
                    // message: 'custom email text',     // (only for email sharing)
                    // subject: 'custom email subject',  // (only for email sharing)
                    // username: 'custom twitter handle' // (only for twitter sharing)
                }}
            />
        </>
    )
}

export default MainPost