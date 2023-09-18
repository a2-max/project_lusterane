import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const TopBtn = document.querySelector('.btn');

// if(window.pageYOffset > 100){
//     TopBtn.style.display = "block";
//     console.log(window.pageYOffset);
// }
function TopFunc(){
    window.scrollTo(0, 0);
}

function MoveToTop() {
    return (
        <>
            <span className='btn' onClick={TopFunc} style={{
                position: "fixed",
                right: "10px",
                bottom: "50px",
                fontSize: "20px",
                padding: "10px 13px",
                backgroundColor: "#000000",
                color: "#fff",
                border: "1px solid #fff",
                borderRadius: "50%",
                zIndex: "999999999999",
                scrollBehavior: "smooth",
                // display: "none"
            }}>
                <FaArrowUp className='arrowBtn'/>
            </span>
        </>
    )
}

export default MoveToTop