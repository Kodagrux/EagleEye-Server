/**
 *
 * Author: Albin Hubsch <albin.hubsc@gmail.com>
 */

//
import Eaglestore from "./modules/Eaglestore";

const es = new Eaglestore();
es.newEagleEvent();
es.signIn();

setTimeout(function () {
    es.newEagleEvent("motion");
}, 2000);

setTimeout(function () {
    es.signOut();
}, 6000);

// Try to sign in
