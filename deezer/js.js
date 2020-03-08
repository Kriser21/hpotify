// ******************************************************************
// fetch playlist
// ******************************************************************
// fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/5", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "aee2130728mshc250038c75dd0d2p181ea1jsn58e75ec5d280"
// 	}
// })
// .then(response => {
//     return response.json();
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(err => {
// 	console.log(err);
// });


// ******************************************************************
// fetch en sang
// ******************************************************************
// fetch('https://deezerdevs-deezer.p.rapidapi.com/track/854914322', {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
//     'x-rapidapi-key': 'aee2130728mshc250038c75dd0d2p181ea1jsn58e75ec5d280'
//   }
// })
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// ******************************************************************
// fetch album
// ******************************************************************
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/127270232", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "aee2130728mshc250038c75dd0d2p181ea1jsn58e75ec5d280"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
