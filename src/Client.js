import React from 'react';
import firebase from './Firebase';

class Client extends React.Component {
  render() {
    return (
      <div>
        Client
      </div>
    );
  }
}


// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }
  if (Notification.permission !== 'granted')
    Notification.requestPermission();

  let myFirebaseNotification = firebase.database().ref('/notification/');
  myFirebaseNotification.on('value', function (snapshot) {
    const data = snapshot.val();
    if (data == null || data === undefined) {
      return;
    }
    if (!data.body.announced) {
      let widget = new Notification( `form post: ${window.location.port}` + data.title, {
        body: data.body.body,
        icon: data.body.icon
      });
      widget.onclick = function (event) {
        window.open(data.link, '_blank');
      }
      firebase.database().ref('/notification/').set({
        title: data.title,
        body: {
          announced: true,
          body: data.body.body,
          icon: data.body.icon
        },
        link: data.link
      }, function (error) {
        if (error) {
          console.log('error');
        } else {
          // Data saved successfully!
          console.log('update announced successfully');
        }
      });
    }
  });
});

export default Client;
