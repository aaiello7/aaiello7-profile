import React from "react";

function Footer() {
    return (
        <div>
            <div className="footer">
                <p>Copyright ©                  
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    Andrés Aiello.
                </p>
            </div>
        </div>
    )
}

export default Footer;