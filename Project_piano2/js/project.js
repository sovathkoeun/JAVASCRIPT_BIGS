
const KEYS = new Map(
[
    ['z', 'C'],['z', 'C'],['x', 'G'],['c', 'E'],['v', 'F'],['b', 'B'],['n', 'D'],['m', 'A'],
    ['s', 'Gb'],['d', 'Eb'],['g', 'Bb'],['h', 'Db'],['j', 'Ab'],
]
);

// KEYS.set();
// KEYS.set();
// KEYS.set();
// KEYS.set();
// KEYS.set();
// KEYS.set();
// KEYS.set('m', 'A');

// // black key
// KEYS.set();
// KEYS.set();
// KEYS.set();
// KEYS.set();
// KEYS.set('j', 'Ab');
// console.log(KEYS);

const NOTES = new Map([
    ['C','notes/C.mp3'],['Gb','notes/Gb.mp3'],['G','notes/G.mp3'],['Eb','notes/Eb.mp3'],
    ['E','notes/E.mp3'],['F','notes/F.mp3'],['Bb','notes/Bb.mp3'],['B','notes/B.mp3'],
    ['Db','notes/Db.mp3'],['D','notes/D.mp3'],['Ab','notes/Ab.mp3'],['A','notes/A.mp3'],
]);


//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set();
//  NOTES.set('A','notes/A.mp3');

var keysElement = document.querySelectorAll('.key');
keysElement.forEach(key => {
    key.addEventListener('click', () => {
        const PlayEmlent =  key.dataset.note;
       onPlaySound(PlayEmlent);
    });
});
 
document.addEventListener('keydown', e => {
    const notedId = KEYS.get(e.key)
    if(notedId !== null) {
        onPlaySound(notedId);
    }
})
function onPlaySound(key) {
    // const PlayEmlent =  key.dataset.note;
    const audio = NOTES.get(key);
    var sound = new Audio(audio);
    sound.play();
}