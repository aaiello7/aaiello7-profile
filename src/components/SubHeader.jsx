import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

function SubHeader() {
    return (
        <div className="subHead">
            <p>This is my experimental site. Currently under development, and looking for some cool experiences. </p>
            <div className="icon">
            <a href="https://www.instagram.com/aaiello7/"> <FontAwesomeIcon  icon={["fab", "instagram"]} color="white" size="lg"/> </a>
            <a href="https://www.linkedin.com/in/andres-aiello/"> <FontAwesomeIcon  icon={["fab", "linkedin-in"]} color="white" size="lg"/> </a>
            </div>
        </div>
    )
}

export default SubHeader;