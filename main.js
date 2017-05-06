
   var config = {
    apiKey: "AIzaSyAR2l2D2KdXqTawzhoUtKx8OuLgReUVJCE",
    authDomain: "train-29a3a.firebaseapp.com",
    databaseURL: "https://train-29a3a.firebaseio.com",
    projectId: "train-29a3a",
    storageBucket: "train-29a3a.appspot.com",
    messagingSenderId: "563228929823"
  };
  firebase.initializeApp(config);


var dataRef = firebase.database()
var name = "";
var destination = "";
var frequency = "";
var time ="";
var minleft =""


$("#add-user").on("click", function(){
	event.preventDefault()

	  name = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      frequency = $("#frequency-input").val().trim();
      time = $("#time-input").val().trim();
      minleft = $("#minleft-input").val().trim();

      // Code for the push
      dataRef.ref().push({
        name: name,
        destination: destination,
        frequency: frequency,
        time: time,
        minleft: minleft
      });
})

   dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().frequency);
      console.log(childSnapshot.val().time);
      console.log(childSnapshot.val().minleft);

      // full list of items to the well
      $("#total-billed").append(parseInt(childSnapshot.val().time) + 1000)

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {


// var minleftcalc = snapshot.val().time - snapshot.val().frequency


$("#whole-section").append(' <tr class="table2"><th>' + snapshot.val().name + '</th><th>' + snapshot.val().destination + '</th><th> ' + snapshot.val().frequency + '</th><th>'+ snapshot.val().time +'</th><th>' + snapshot.val().minleft +'</th></tr>');

});

