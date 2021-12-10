const firebaseConfig = {
  apiKey: "[your api key]",
  authDomain: "[your auth domain]",
  databaseURL: "[your database url]",
  projectId: "[your project id]",
  storageBucket: "[your storage bucket]",
  messagingSenderId: "[your sender id]",
  appId: "[your app id]",
  measurementId: "[your measurement id]"

};
let mahasiswaHTML;
let presensiHTML;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
function getMahasiswa() {
  var mahasiswaRef = firebase.database().ref("mahasiswa");
  mahasiswaRef.once('value', function (mahasiswaSnapshot) {
    if (mahasiswaSnapshot.exists()) {
      mahasiswaHTML = ``;
      mahasiswaSnapshot.forEach(function (data) {
        var mahasiswaNIM = data.val().nim;
        var mahasiswaNama = data.val().nama;
        mahasiswaHTML += `<tr><td>` + mahasiswaNIM + `</td><td>` + mahasiswaNama + `</td></tr>`;
      });
      document.getElementById("mahasiswa-content").innerHTML = mahasiswaHTML;
    }
  });
}

function getPresensi() {
  var presensiRef = firebase.database().ref("presensi");
  presensiRef.once('value', function (presensiSnapshot) {
    if (presensiSnapshot.exists()) {
      presensiHTML = ``;
      presensiSnapshot.forEach(function (data) {
        //var presensiId = data.val().id;
        var presensiNama = data.val().nim;
        var presensiWaktu = data.val().waktu;
        var presensiKeterangan = data.val().keterangan;
        presensiHTML += `<tr><td>` + presensiNama + `</td><td>` + presensiWaktu + `</td><td>` + presensiKeterangan + `</td></tr>`;
      });
      document.getElementById("presensi-content").innerHTML = presensiHTML;
    }
  });
}