import React from 'react';

const Footer = () => {
    return (

        <footer className="page-footer grey darken-2">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <p className="text-lighten-4">&copy; 2019 Emailster </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <ul>
                            <li><i className="material-icons">arrow_forward</i> <a className="white-text" href="https://peturgeorgievv.github.io/"><b>GitHub Portfolio</b></a></li>
                            <li><i className="material-icons">arrow_forward</i> <a className="white-text" href="https://www.linkedin.com/in/petar-georgiev-554903119/"><b>LinkedIn</b></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;