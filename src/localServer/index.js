/**
 *
 * Author: Albin Hubsch <albin.hubsch@gmail.com
 *
 * This part is responsible for communication with the app only on
 * local networks. Mainly to install the rpi system and give it login
 * credentials to firebase
 */

import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const port = 8397;
const eagle_configuration = "/etc/eagle/configuration.json";
let server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

/**
 * Check if server is alive
 */
server.get("/alive", (req, res)=>{
    res.end("Ye, sure ima alive");
});

/**
 * Reboot
 */
server.get("/reboot", (req, res)=>{
    res.end("Ye, sure i will reboot, just not yet... not implemented");
});


/**
 * Get installation
 */
server.get("/installation", (req, res)=>{
    fs.readFile(eagle_configuration, "utf8", function (err, data) {
        if (err) {
            res.json({status:"failed to load eagle configuration file"});
        }
        res.json(JSON.parse(data));
    });
});

/**
 * Install
 */
server.post("/install", (req, res)=>{

    let configuration;

    fs.readFile(eagle_configuration, "utf8", function (err, data) {
        if (err) {
            res.json({status:"failed to load eagle configuration file"});
        }
        configuration = JSON.parse(data);
    });

    configuration.firebase.user = req.body.user;
    configuration.firebase.pwd = req.body.pwd;

    fs.writeFile(eagle_configuration, JSON.stringify(configuration), function(err) {
        if(err) {
            res.json({status:"failed to load eagle configuration file"});
        }
        res.json({status:"Success"});
    });

});


// Start server
server.listen(port);
