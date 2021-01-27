import firebase from 'firebase'

import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyB1aGN04BjRcSLoUFDsZhGU_f1vNe0A-EI',
  authDomain: 'zellypish-react-chat-pwa.firebaseapp.com',
  projectId: 'zellypish-react-chat-pwa',
  storageBucket: 'zellypish-react-chat-pwa.appspot.com',
  messagingSenderId: '1000924543788',
  appId: '1:1000924543788:web:ebc91ef3a7e5daa19a0a89',
  measurementId: 'G-ZJGKT6XBVW'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
