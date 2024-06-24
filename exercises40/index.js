// Question 40
/* Write a function called make_album to create album objects with artist and title information.
Accept two mandatory parameters: artist and title. Return an object containing this information.
Extend the function to include an optional parameter for the number of tracks.
Provide three examples of creating album objects, and demonstrate using the optional parameter once*/
function make_album(artist, tittle, tracks) {
    if (tracks) {
        return {
            "artist": artist,
            "tittle": tittle,
            "tracks": tracks,
        };
    }
    return {
        "artist": artist,
        "tittle": tittle
    };
}
let album1 = make_album("Abida Parveen", "Tere Ishq Nachaya");
let album2 = make_album("Atif Aslam", "Jal pari", 11);
let album3 = make_album("Ali Zafar", "Jhoom");
console.log(album1, "\n", album2, "\n", album3);
export {};
