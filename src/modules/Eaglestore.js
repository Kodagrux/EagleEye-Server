/**
 *
 * Author: Albin Hubsch <albin.hubsc@gmail.com>
 */

import * as firebase from "firebase";

const firebase_config = {
    apiKey: "AIzaSyDY4uAF485U7MBzqBsBLzyupax4t9F_IO8",
    authDomain: "eagleeye-dfbc4.firebaseapp.com",
    databaseURL: "https://eagleeye-dfbc4.firebaseio.com",
    storageBucket: "eagleeye-dfbc4.appspot.com",
    messagingSenderId: "608166203035"
};

// Check if any user credentials exists
// if so sign in with them
// else
// Find a way to prompt the user to create a user or add it to the eagle conf

export default class Eaglestore{

    constructor(){

        // Fetch Eagle configuration

        firebase.initializeApp(firebase_config);

    }


    newEagleEvent(type, message, sensor, level=null){

        // If no user is signed in
        if (!this.user()) {
            return false;
        }

        const uid = this.user().uid;

        // Set reference to eagle events
        let newEvent = firebase.database().ref("eagle_events/"+uid).push();
        newEvent.set({
            type: type,
            timestamp: Date.now(),
            sensor: sensor,
            message: message,
            level: level
        });

        newEvent.off();

    }

    user(){
        if (firebase.auth().currentUser) {
            return firebase.auth().currentUser;
        }else{
            return false;
        }
    }


    signIn(){
        firebase.auth().signInWithEmailAndPassword("test@test.se", "test123")
        .then(()=>{
            console.log("Singed in successfully");
        })
        .catch((e)=>{
            console.log(e);
            console.log("error: could not sign in to firebase");
        });
    }

    /**
     * Sign out from current firebase connection
     */
    signOut(){
        firebase.auth().signOut()
        .then(()=>{
            console.log("Successfully signed out from firebase");
        })
        .catch(()=>{
            console.log("Could not sign out?!!?!");
        });
    }

    /**
     * Subscribe to changes in the eagle arm settings. If the state is changed
     * from an app either to arm or disarm state callback is called with the
     * new state
     */
    subscribeArmState(callback){

        // Check if eagle is signed in
        if (this.user()) {
            const eagleId = "UH123";

            // Bind a reference to this eagle online
            let eagleRef = firebase.database().ref("eagles/"+eagleId+"/armed");
            eagleRef.on("value", (snapshot)=>{
                callback(snapshot);
            });

        }else{
            return false;
        }
    }

}
