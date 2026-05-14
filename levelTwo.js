arr = ["s","S","t","T","e","E","i","I","n","N"];
const X = grid[20]
const C = grid[21]
const V = grid[22]
const B = grid[23]
const N = grid[24]
window.X = X
window.C = C
window.V = V
window.B = B
window.N = N

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

let gridTwenty = false
let gridTwentyOne = false
let gridTwentyTwo = false
let gridTwentyThree = false
let gridTwentyFour = false
window.gridTwenty = gridTwenty
window.gridTwentyOne = gridTwentyOne
window.gridTwentyTwo = gridTwentyTwo
window.gridTwentyThree = gridTwentyThree
window.gridTwentyFour = gridTwentyFour

function doneQ(){
    const q = grid[0].value;
    const w = grid[1].value;
    const e = grid[2].value;
    const r = grid[3].value;
    const t = grid[4].value;
    window.q = q
    window.w = w
    window.e = e
    window.r = r
    window.t = t
//0
if(q === "s"||q === "S"){
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
if(w === "t"||w === "T"){
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
if(e === "e"||e === "E"){
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
if(r === "i"||r === "I"){
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
if(t === "n"||t === "N"){
grid[4].style.backgroundColor = 'rgb(27, 225, 47)';
gridFour = true
}
else if(arr.includes(t)){
    grid[4].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[4].style.backgroundColor = 'rgb(244, 34, 34)';
}
Q.readOnly = !false;
W.readOnly = !false;
E.readOnly = !false;
R.readOnly = !false;
T.readOnly = !false;
Z.readOnly = false;
U.readOnly = false;
I.readOnly = false;
O.readOnly = false;
P.readOnly = false;
     btn.setAttribute('onclick', 'rowTwoQ()');
     if(gridZero&&gridOne&&gridTwo&&gridThree&&gridFour){
        btn.innerHTML = '<a href ="third.html">Level 3</a>'
hone.innerText='You won!!'
    }
    };

    function rowTwoQ(){
        const z = grid[5].value;
        const u = grid[6].value;
        const i = grid[7].value;
        const o = grid[8].value;
        const p = grid[9].value;
        window.z = z
        window.u = u
        window.i = i
        window.o = o
        window.p = p
Z.readOnly = !false;
U.readOnly = !false;
I.readOnly = !false;
O.readOnly = !false;
P.readOnly = !false;
A.readOnly = false;
S.readOnly = false;
D.readOnly = false;
F.readOnly = false;
G.readOnly = false;


//2 row 0
if(z === "s"||z === "S"){
grid[5].style.backgroundColor = 'rgb(27, 225, 47)';
gridFive = true
}
else if(arr.includes(z)){
    grid[5].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[5].style.backgroundColor = 'rgb(244, 34, 34)';
}

//1
if(u === "t"||u === "T"){
grid[6].style.backgroundColor = 'rgb(27, 225, 47)';
gridSix = true
}
else if(arr.includes(u)){
    grid[6].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[6].style.backgroundColor = 'rgb(244, 34, 34)';
}

//2
if(i === "e"||i === "E"){
grid[7].style.backgroundColor = 'rgb(27, 225, 47)';
gridSeven = true
}
else if(arr.includes(i)){
    grid[7].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[7].style.backgroundColor = 'rgb(244, 34, 34)';
}

//3
if(o === "i"||o === "I"){
grid[8].style.backgroundColor = 'rgb(27, 225, 47)';
gridEight = true
}
else if(arr.includes(o)){
    grid[8].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[8].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(p === "n"||p === "N"){
grid[9].style.backgroundColor = 'rgb(27, 225, 47)';
gridNine = true
}
else if(arr.includes(p)){
    grid[9].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[9].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowThreeQ()');
if(gridFive&&gridSix&&gridSeven&&gridEight&&gridNine){
    btn.innerHTML = '<a href ="third.html">Level 3</a>'
hone.innerText='You won!!'
    }
    };
    function rowThreeQ(){
        const a = grid[10].value;
        const s = grid[11].value;
        const d = grid[12].value;
        const f = grid[13].value;
        const g = grid[14].value;
        window.a = a
        window.s = s
        window.d = d
        window.f = f
        window.g = g
A.readOnly = !false;
S.readOnly = !false;
D.readOnly = !false;
F.readOnly = !false;
G.readOnly = !false;
H.readOnly = false;
J.readOnly = false;
K.readOnly = false;
L.readOnly = false;
Y.readOnly = false;

//3 row 0
if(a === "s"||a === "S"){
grid[10].style.backgroundColor = 'rgb(27, 225, 47)';
gridTen = true
}
else if(arr.includes(a)){
    grid[10].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[10].style.backgroundColor = 'rgb(244, 34, 34)';
}

//1
if(s === "t"||s === "T"){
grid[11].style.backgroundColor = 'rgb(27, 225, 47)';
gridEleven = true
}
else if(arr.includes(s)){
    grid[11].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[11].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
if(d === "e"||d === "E"){
grid[12].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwelve = true
}
else if(arr.includes(d)){
    grid[12].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[12].style.backgroundColor = 'rgb(244, 34, 34)';
}

//3
if(f === "i"||f === "I"){
grid[13].style.backgroundColor = 'rgb(27, 225, 47)';
gridThirteen = true
}
else if(arr.includes(f)){
    grid[13].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[13].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(g === "n"||g === "N"){
grid[14].style.backgroundColor = 'rgb(27, 225, 47)';
gridFourteen = true
}
else if(arr.includes(g)){
    grid[14].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[14].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowFourQ()');
if(gridTen&&gridEleven&&gridTwelve&&gridThirteen&&gridFourteen){
    btn.innerHTML = '<a href ="third.html">Level 3</a>'
        hone.innerText='You won!!'
    }
    };
    function rowFourQ(){
        const h = grid[15].value;
        const j = grid[16].value;
        const k = grid[17].value;
        const l = grid[18].value;
        const y = grid[19].value;
        window.h = h
        window.j = j
        window.k = k
        window.l = l
        window.y = y
H.readOnly = !false;
J.readOnly = !false;
K.readOnly = !false;
L.readOnly = !false;
Y.readOnly = !false;
X.readOnly = false;
C.readOnly = false;
V.readOnly = false;
B.readOnly = false;
N.readOnly = false;

//4 row 0
if(h === "s"||h === "S"){
grid[15].style.backgroundColor = 'rgb(27, 225, 47)';
gridFifteen = true
}
else if(arr.includes(h)){
    grid[15].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[15].style.backgroundColor = 'rgb(244, 34, 34)';
}
//1
if(j === "t"||j === "T"){
grid[16].style.backgroundColor = 'rgb(27, 225, 47)';
gridSixteen = true
}
else if(arr.includes(j)){
    grid[16].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[16].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
if(k === "e"||k === "E"){
grid[17].style.backgroundColor = 'rgb(27, 225, 47)';
gridSeventeen = true
}
else if(arr.includes(k)){
    grid[17].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[17].style.backgroundColor = 'rgb(244, 34, 34)';
}
//3
if(l === "i"||l === "I"){
grid[18].style.backgroundColor = 'rgb(27, 225, 47)';
gridEighteen = true
}
else if(arr.includes(l)){
    grid[18].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[18].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(y === "n"||y === "N"){
grid[19].style.backgroundColor = 'rgb(27, 225, 47)';
gridNineteen = true
}
else if(arr.includes(y)){
    grid[19].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[19].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowFiveQ()');
if(gridFifteen&&gridSixteen&&gridSeventeen&&gridEighteen&&gridNineteen){
    btn.innerHTML = '<a href ="third.html">Level 3</a>'
        hone.innerText='You won!!'
    }
    };
    function rowFiveQ(){
const x = grid[20].value;
const c = grid[21].value;
const v = grid[22].value;
const b = grid[23].value;
const n = grid[24].value;
window.x = x
window.c = c
window.v = v
window.b = b
window.n = n
X.readOnly = !false;
C.readOnly = !false;
V.readOnly = !false;
B.readOnly = !false;
N.readOnly = !false;

//5 row 0
if(x === "s"||x === "S"){
grid[20].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwenty = true
}
else if(arr.includes(x)){
    grid[20].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[20].style.backgroundColor = 'rgb(244, 34, 34)';
}

//1
if(c === "t"||c === "T"){
grid[21].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyOne = true
}
else if(arr.includes(c)){
    grid[21].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[21].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
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
//3
if(b === "i"||b === "I"){
grid[23].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyThree = true
}
else if(arr.includes(b)){
    grid[23].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[23].style.backgroundColor = 'rgb(244, 34, 34)';
}
//4
if(n === "n"||n === "N"){
grid[24].style.backgroundColor = 'rgb(27, 225, 47)';
gridTwentyFour = true
}
else if(arr.includes(n)){
    grid[24].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[24].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'doneW');
if(gridTwenty&&gridTwentyOne&&gridTwentyTwo&&gridTwentyThree&&gridTwentyFour){
    btn.innerHTML = '<a href ="third.html">Level 3</a>'
        hone.innerText='You won!!'
    }
    };