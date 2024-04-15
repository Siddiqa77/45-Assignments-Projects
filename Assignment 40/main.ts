// Qno.40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist 
// name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries 
// representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album()
// that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.

// Define the make_album function
function make_album(artistName: string, albumTitle: string, trackNumber: number){
    let album:{artist: string, title: string, tracks: number} = {
        artist: artistName,
        title: albumTitle,
        tracks: trackNumber
    };
    if(trackNumber !== undefined){
        album.tracks = trackNumber;
    }
return album;
}
// calling funtions in three times with different values with 3 variables
//variable 1
let album1 = make_album("Atif Aslam", "Album 1", 2);
//variable 2
let album2 = make_album("Junaid Jamshed", "Album 4", 4);
//variable 3
let album3 = make_album("Hadeeqa", "Album 1", 3);



 console.log(album1);
 console.log(album2);
 console.log(album3);