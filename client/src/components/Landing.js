import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className="home-heading">
                Emailster
            </h1>
            <section class="cards-wrapper-custom">
                <div class="card-grid-space">
                    <div class="num">First Steps</div>
                    <div class="card-custom">
                        <div>
                            <h1>Guidance</h1>
                            <p>
                                You can send completely free Email Surveys!
                                After you login with your Google account you will be
                                redirected to our surveys page, where you can click on the Button for a new Survey!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-grid-space">
                    <div class="num">Adding Credits</div>
                    <div class="card-custom">
                        <div>
                            <h1>Fake Credit Card</h1>
                            <p>We are using Stripe in Test mode. <br /> You can use our services for free!
                            Explanation how to use it will be provided when you try to Add Credits!
                            </p>
                            <div class="tags">
                                <div class="tag">Don't Worry!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-grid-space">
                    <div class="num">Your Surveys!</div>
                    <div class="card-custom">
                        <div>
                            <h1>Create & Collect information about your Surveys</h1>
                            <p>You will be able to make new surveys. Check
                            to see when and how everyone voted. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;