const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
STATUS_READ_MSG: process.env.STATUS_READ_MSG || "ʙᴜɴɴʏ 𝗦𝘁𝗮𝘁𝘂𝘀 𝗞𝗜𝗡𝗚",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
FOOTER: process.env.FOOTER || "*◆─〈 ✦ʙᴜɴɴʏ=ᴍᴅ 〉─◆*",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
IMAGE_LIMIT: process.env.IMAGE_LIMIT || "5",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~pq9XVSxZ#Qenat052FjMN3acoIfqGfR8xiPsVjZUSEYPvj_QPU9Q",
};


