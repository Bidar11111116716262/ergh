arr = ["z","Z","u","U","c","C","k","K","e","E","r","R"];
const M = grid[25]
const MQ = grid[26]
const MW = grid[27]
const ME = grid[28]
const MR = grid[29]

Q.readOnly = false;
W.readOnly = false;
E.readOnly = false;
R.readOnly = false;
T.readOnly = false;
Z.readOnly = true;
U.readOnly = true;
I.readOnly = true;
O.readOnly = true;
P.readOnly = true;
A.readOnly = true;
S.readOnly = true;
D.readOnly = true;
F.readOnly = true;
G.readOnly = true;
H.readOnly = true;
J.readOnly = true;
K.readOnly = true;
L.readOnly = true;
Y.readOnly = true;
X.readOnly = true;
C.readOnly = true;
V.readOnly = true;
B.readOnly = true;
N.readOnly = true;
M.readOnly = true;
MQ.readOnly = true;
MW.readOnly = true;
ME.readOnly = true;
MR.readOnly = true;

let gridTwentyFive = false
let gridTwentySix = false
let gridTwentySeven = false
let gridTwentyEight = false
let gridTwentyNine = false

function doneW(){
    const q = grid[0].value;
    const w = grid[1].value;
    const e = grid[2].value;
    const r = grid[3].value;
    const t = grid[4].value;
    const z = grid[5].value;
//0
if(q === "z"||q === "Z"){
grid[0].style.backgroundColor = 'rgb(27, 225, 47)';
gridZero = true
}
else if(arr.includes(q)){
    grid[0].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[0].style.backgroundColor = 'rgb(244, 34, 34)';
}
//1
if(w === "u"||w === "U"){
grid[1].style.backgroundColor = 'rgb(27, 225, 47)';
gridOne = true

}
else if(arr.includes(w)){
    grid[1].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[1].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
if(e === "c"||e === "C"){
grid[2].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwo = true
}
else if(arr.includes(e)){
    grid[2].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[2].style.backgroundColor = 'rgb(244, 34, 34)';
}
//3
if(r === "k"||r === "K"){
grid[3].style.backgroundColor = 'rgb(27, 225, 47)';
gridThree = true
}
else if(arr.includes(r)){
    grid[3].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[3].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(t === "e"||t === "E"){
grid[4].style.backgroundColor = 'rgb(27, 225, 47)';
gridFour = true
}
else if(arr.includes(t)){
    grid[4].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[4].style.backgroundColor = 'rgb(244, 34, 34)';
}
//5
if(z === "r"||z === "R"){
grid[5].style.backgroundColor = 'rgb(27, 225, 47)';
gridFive = true
}
else if(arr.includes(z)){
    grid[5].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[5].style.backgroundColor = 'rgb(244, 34, 34)';
}
Q.readOnly = !false;
W.readOnly = !false;
E.readOnly = !false;
R.readOnly = !false;
T.readOnly = !false;
Z.readOnly = !false;
U.readOnly = false;
I.readOnly = false;
O.readOnly = false;
P.readOnly = false;
A.readOnly = false;
S.readOnly = false;
     btn.setAttribute('onclick', 'rowTwoW()');
     if(gridZero&&gridOne&&gridTwo&&gridThree&&gridFour&&gridFive){
hone.innerText='You won!!'
    }
    };

    function rowTwoW(){
        const u = grid[6].value;
        const i = grid[7].value;
        const o = grid[8].value;
        const p = grid[9].value;
        const a = grid[10].value;
        const s = grid[11].value;
U.readOnly = !false;
I.readOnly = !false;
O.readOnly = !false;
P.readOnly = !false;
A.readOnly = !false;
S.readOnly = !false;
D.readOnly = false;
F.readOnly = false;
G.readOnly = false;
H.readOnly = false;
J.readOnly = false;
K.readOnly = false;

//2 row 0
if(u === "z"||u === "Z"){
grid[6].style.backgroundColor = 'rgb(27, 225, 47)';
gridSix = true
}
else if(arr.includes(u)){
    grid[6].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[6].style.backgroundColor = 'rgb(244, 34, 34)';
}

//1
if(i === "u"||i === "U"){
grid[7].style.backgroundColor = 'rgb(27, 225, 47)';
gridSeven = true
}
else if(arr.includes(i)){
    grid[7].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[7].style.backgroundColor = 'rgb(244, 34, 34)';
}

//2
if(o === "c"||o === "C"){
grid[8].style.backgroundColor = 'rgb(27, 225, 47)';
gridEight = true
}
else if(arr.includes(o)){
    grid[8].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[8].style.backgroundColor = 'rgb(244, 34, 34)';
}

//3
if(p === "k"||p === "K"){
grid[9].style.backgroundColor = 'rgb(27, 225, 47)';
gridNine = true
}
else if(arr.includes(p)){
    grid[9].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[9].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(a === "e"||a === "E"){
grid[10].style.backgroundColor = 'rgb(27, 225, 47)';
gridTen = true
}
else if(arr.includes(a)){
    grid[10].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[10].style.backgroundColor = 'rgb(244, 34, 34)';
}
//6
if(s === "r"||s === "R"){
grid[11].style.backgroundColor = 'rgb(27, 225, 47)';
gridEleven = true
}
else if(arr.includes(s)){
    grid[11].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[11].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowThreeW()');
if(gridSix&&gridSeven&&gridEight&&gridNine&&gridTen&&gridEleven){
hone.innerText='You won!!'
    }
    };

    function rowThreeW(){
        const d = grid[12].value;
        const f = grid[13].value;
        const g = grid[14].value;
        const h = grid[15].value;
        const j = grid[16].value;
        const k = grid[17].value;
D.readOnly = !false;
F.readOnly = !false;
G.readOnly = !false;
H.readOnly = !false;
J.readOnly = !false;
K.readOnly = !false;
L.readOnly = false;
Y.readOnly = false;
X.readOnly = false;
C.readOnly = false;
V.readOnly = false;
B.readOnly = false;

//3 row 0
if(d === "z"||d === "Z"){
grid[12].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwelve = true
}
else if(arr.includes(d)){
    grid[12].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[12].style.backgroundColor = 'rgb(244, 34, 34)';
}
//1
if(f === "u"||f === "U"){
grid[13].style.backgroundColor = 'rgb(27, 225, 47)';
gridThirteen = true
}
else if(arr.includes(f)){
    grid[13].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[13].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
if(g === "c"||g === "C"){
grid[14].style.backgroundColor = 'rgb(27, 225, 47)';
gridFourteen = true
}
else if(arr.includes(g)){
    grid[14].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[14].style.backgroundColor = 'rgb(244, 34, 34)';
}

//3
if(h === "k"||h === "K"){
grid[15].style.backgroundColor = 'rgb(27, 225, 47)';
gridFifteen = true
}
else if(arr.includes(h)){
    grid[15].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[15].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(j === "e"||j === "E"){
grid[16].style.backgroundColor = 'rgb(27, 225, 47)';
gridSixteen = true
}
else if(arr.includes(j)){
    grid[16].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[16].style.backgroundColor = 'rgb(244, 34, 34)';
}
//5
if(k === "r"||k === "R"){
grid[17].style.backgroundColor = 'rgb(27, 225, 47)';
gridSeventeen = true
}
else if(arr.includes(k)){
    grid[17].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[17].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowFourW()');
if(gridTwelve&&gridThirteen&&gridFourteen&&gridFifteen&&gridSixteen&&gridSeventeen){
        hone.innerText='You won!!'
    }
    };
    function rowFourW(){
        const l = grid[18].value;
        const y = grid[19].value;
        const x = grid[20].value;
        const c = grid[21].value;
        const v = grid[22].value;
        const b = grid[23].value;
L.readOnly = !false;
Y.readOnly = !false;
X.readOnly = !false;
C.readOnly = !false;
V.readOnly = !false;
B.readOnly = !false;

//4 row 0
if(l === "z"||l === "Z"){
grid[18].style.backgroundColor = 'rgb(27, 225, 47)';
gridEighteen = true
}
else if(arr.includes(l)){
    grid[18].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[18].style.backgroundColor = 'rgb(244, 34, 34)';
}
//1
if(y === "u"||y === "U"){
grid[19].style.backgroundColor = 'rgb(27, 225, 47)';
gridNineteen = true
}
else if(arr.includes(y)){
    grid[19].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[19].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
if(x === "c"||x === "C"){
grid[20].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwenty = true
}
else if(arr.includes(x)){
    grid[20].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[20].style.backgroundColor = 'rgb(244, 34, 34)';
}
//3
if(c === "k"||c === "K"){
grid[21].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyOne = true
}
else if(arr.includes(c)){
    grid[21].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[21].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(v === "e"||v === "E"){
grid[22].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyTwo = true
}
else if(arr.includes(v)){
    grid[22].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[22].style.backgroundColor = 'rgb(244, 34, 34)';
}
//5
if(b === "r"||b === "R"){
grid[23].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyThree = true
}
else if(arr.includes(b)){
    grid[23].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[23].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowFiveW()');
if(gridEighteen&&gridNineteen&&gridTwenty&&gridTwentyOne&&gridTwentyTwo&&gridTwentyThree){
        hone.innerText='You won!!'
    }
    };
    function rowFiveW(){
const n = grid[24].value;
const m = grid[25].value;
const mq = grid[26].value;
const mw = grid[27].value;
const me = grid[28].value;
const mr = grid[29].value;
N.readOnly = !false;
M.readOnly = !false;
MQ.readOnly = !false;
MW.readOnly = !false;
ME.readOnly = !false;
MR.readOnly = !false;
//5 row 0
if(n === "z"||n === "Z"){
grid[24].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyFour = true
}
else if(arr.includes(n)){
    grid[24].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[24].style.backgroundColor = 'rgb(244, 34, 34)';
}

//1
if(m === "u"||m === "U"){
grid[25].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyFive = true
}
else if(arr.includes(m)){
    grid[25].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[25].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
if(mq === "c"||mq === "C"){
grid[26].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentySix = true
}
else if(arr.includes(mq)){
    grid[26].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[26].style.backgroundColor = 'rgb(244, 34, 34)';
}
//3
if(mw === "k"||mw === "K"){
grid[27].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentySeven = true
}
else if(arr.includes(mw)){
    grid[27].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[27].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(me === "e"||me === "E"){
grid[28].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyEight = true
}
else if(arr.includes(me)){
    grid[28].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[28].style.backgroundColor = 'rgb(244, 34, 34)';
}
//5
if(mr === "r"||mr === "R"){
grid[29].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyNine = true
}
else if(arr.includes(mr)){
    grid[29].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[29].style.backgroundColor = 'rgb(244, 34, 34)';
}
if(gridTwentyFour&&gridTwentyFive&&gridTwentySix&&gridTwentySeven&&gridTwentyEight&&gridTwentyNine){
        hone.innerText='You won!!'
    }
    };