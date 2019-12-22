const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
     <html>
        <body>
            <div style="text-align: center;">
                <h3>Your vote is important to us!</h3>
                <br />
                <p>Please answer the following question:</p>
                <br />
                <p>${survey.body}</p>
                <br />
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                </div>
            </div>
        </body>
     </html>
    `;
};