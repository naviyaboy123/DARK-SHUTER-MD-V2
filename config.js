const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=OEcQFDTL#0kWMlz-shVgUMHl4Ke0id2MKM3SUxq89Xz--cU3qoBo',
GITHUB_AUTH_TOKEN: 'WM90z2DzCLfuocmOlBjROVHTTpYEgQ2d9JGU', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'DarkeHaker',

};
