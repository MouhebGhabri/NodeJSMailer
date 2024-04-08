const {nodeMailer} = require("../lib/nodeMailer");
module.exports = {
    Send: async (req, res) => {
        await nodeMailer();
        res.send("OK");
    },
};