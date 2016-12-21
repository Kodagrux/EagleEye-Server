/**
 *
 * Author: Albin Hubsch <albin.hubsch@gmail.com>
 */

// Import libs
import Eaglestore from "./modules/Eaglestore";

// Constants
const eagle_configuration = "/etc/eagle/configuration.json";
const state = {
    armed: false
};

if (state.armed) {
    console.log("system is armed, I will beep loud if any human pressence is detected");
}

//
//
// ONLY TEMPORARY TESTCODE BELOW
// WILL BE REMOVED
//
//

const es = new Eaglestore();
// es.newEagleEvent();
es.signIn();

setTimeout(function () {
    es.newEagleEvent("motion");
}, 2000);

setTimeout(function () {
    es.signOut();
}, 6000);
