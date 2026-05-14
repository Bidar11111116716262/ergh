let arr = ["a","A","u","U","t","T","o","O"];
const grid = document.querySelectorAll('.gridKids');
const btn = document.getElementById('btn');
const hone = document.querySelector('h1')
let INDEX = 0;
window.arr = arr
window.grid = grid
window.btn = btn
window.hone = hone
window.INDEX = INDEX

const Q = grid[0]
const W = grid[1]
const E = grid[2]
const R = grid[3]
const T = grid[4]
const Z = grid[5]
const U = grid[6]
const I = grid[7]
const O = grid[8]
const P = grid[9]
const A = grid[10]
const S = grid[11]
const D = grid[12]
const F = grid[13]
const G = grid[14]
const H = grid[15]
const J = grid[16]
const K = grid[17]
const L = grid[18]
const Y = grid[19]
window.Q = Q
window.W = W
window.E = E
window.R = R
window.T = T
window.Z = Z
window.U = U
window.I = I
window.O = O
window.P = P
window.A = A
window.S = S
window.D = D
window.F = F
window.G = G
window.H = H
window.J = J
window.K = K
window.L = L
window.Y = Y

Q.readOnly = false;
W.readOnly = false;
E.readOnly = false;
R.readOnly = false;
T.readOnly = true;
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

let gridZero = false
let gridOne = false
let gridTwo = false
let gridThree = false
let gridFour = false
let gridFive = false
let gridSix = false
let gridSeven = false
let gridEight = false
let gridNine = false
let gridTen = false
let gridEleven = false
let gridTwelve = false
let gridThirteen = false
let gridFourteen = false
let gridFifteen = false
let gridSixteen = false
let gridSeventeen = false
let gridEighteen = false
let gridNineteen = false
window.gridZero = gridZero
window.gridOne = gridOne
window.gridTwo = gridTwo
window.gridThree = gridThree
window.gridFour = gridFour
window.gridFive = gridFive
window.gridSix = gridSix
window.gridSeven = gridSeven
window.gridEight = gridEight
window.gridNine = gridNine
window.gridTen = gridTen
window.gridEleven = gridEleven
window.gridTwelve = gridTwelve
window.gridThirteen = gridThirteen
window.gridFourteen = gridFourteen
window.gridFifteen = gridFifteen
window.gridSixteen = gridSixteen
window.gridSeventeen = gridSeventeen
window.gridEighteen = gridEighteen
window.gridNineteen = gridNineteen

function done(){
const q = grid[0].value;
const w = grid[1].value;
const e = grid[2].value;
const r = grid[3].value;
window.q = q
window.w = w
window.e = e
window.r = r

//0
if(q === "a"||q === "A"){
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
if(e === "t"||e === "T"){
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
if(r === "o"||r === "O"){
grid[3].style.backgroundColor = 'rgb(27, 225, 47)';
gridThree = true
}
else if(arr.includes(r)){
    grid[3].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[3].style.backgroundColor = 'rgb(244, 34, 34)';
}
Q.readOnly = !false;
W.readOnly = !false;
E.readOnly = !false;
R.readOnly = !false;
T.readOnly = false;
Z.readOnly = false;
U.readOnly = false;
I.readOnly = false;
     btn.setAttribute('onclick', 'rowTwo()');
     if(gridZero&&gridOne&&gridTwo&&gridThree){
hone.innerText='You won!!'
btn.innerHTML = '<a href ="second.html">Level 2</a>'
    btn.setAttribute('onclick', 'doneQ()')
    }
    };

    function rowTwo(){
const t = grid[4].value;
const z = grid[5].value;
const u = grid[6].value;
const i = grid[7].value;
window.t = t
window.z = z
window.u = u
window.i = i

T.readOnly = !false;
Z.readOnly = !false;
U.readOnly = !false;
I.readOnly = !false;
O.readOnly = false;
P.readOnly = false;
A.readOnly = false;
S.readOnly = false;

//2 row 0
if(t === "a"||t === "A"){
grid[4].style.backgroundColor = 'rgb(27, 225, 47)';
gridFour = true
}
else if(arr.includes(t)){
    grid[4].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[4].style.backgroundColor = 'rgb(244, 34, 34)';
}

//1
if(z === "u"||z === "U"){
grid[5].style.backgroundColor = 'rgb(27, 225, 47)';
gridFive = true
}
else if(arr.includes(z)){
    grid[5].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[5].style.backgroundColor = 'rgb(244, 34, 34)';
}

//2
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

//3
if(i === "o"||i === "O"){
grid[7].style.backgroundColor = 'rgb(27, 225, 47)';
gridSeven = true
}
else if(arr.includes(i)){
    grid[7].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[7].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowThree()');
if(gridFour&&gridFive&&gridSix&&gridSeven){
hone.innerText='You won!!'
btn.innerHTML = '<a href ="second.html">Level 2</a>'
    btn.setAttribute('onclick', 'doneQ()')
    }
    };

    function rowThree(){
const o = grid[8].value;
const p = grid[9].value;
const a = grid[10].value;
const s = grid[11].value;
window.o = o
window.p = p
window.a = a
window.s = s

O.readOnly = !false;
P.readOnly = !false;
A.readOnly = !false;
S.readOnly = !false;
D.readOnly = false;
F.readOnly = false;
G.readOnly = false;
H.readOnly = false;

//3 row 0
if(o === "a"||o === "A"){
grid[8].style.backgroundColor = 'rgb(27, 225, 47)';
gridEight = true
}
else if(arr.includes(o)){
    grid[8].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[8].style.backgroundColor = 'rgb(244, 34, 34)';
}

//1
if(p === "u"||p === "U"){
grid[9].style.backgroundColor = 'rgb(27, 225, 47)';
gridNine = true
}
else if(arr.includes(p)){
    grid[9].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[9].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
if(a === "t"||a === "T"){
grid[10].style.backgroundColor = 'rgb(27, 225, 47)';
gridTen = true
}
else if(arr.includes(a)){
    grid[10].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[10].style.backgroundColor = 'rgb(244, 34, 34)';
}

//3
if(s === "o"||s === "O"){
grid[11].style.backgroundColor = 'rgb(27, 225, 47)';
gridEleven = true
}
else if(arr.includes(s)){
    grid[11].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[11].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowFour()');
if(gridEight&&gridNine&&gridTen&&gridEleven){
        hone.innerText='You won!!'
        btn.innerHTML = '<a href ="second.html">Level 2</a>'
    btn.setAttribute('onclick', 'doneQ()')
    }
    };
    function rowFour(){
const d = grid[12].value;
const f = grid[13].value;
const g = grid[14].value;
const h = grid[15].value;
window.d = d
window.f = f
window.g = g
window.h = h

D.readOnly = !false;
F.readOnly = !false;
G.readOnly = !false;
H.readOnly = !false;
J.readOnly = false;
K.readOnly = false;
L.readOnly = false;
Y.readOnly = false;

//4 row 0
if(d === "a"||d === "A"){
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
if(g === "t"||g === "T"){
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
if(h === "o"||h === "O"){
grid[15].style.backgroundColor = 'rgb(27, 225, 47)';
gridFifteen = true
}
else if(arr.includes(h)){
    grid[15].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[15].style.backgroundColor = 'rgb(244, 34, 34)';
}
btn.setAttribute('onclick', 'rowFive()');
if(gridTwelve&&gridThirteen&&gridFourteen&&gridFifteen){
        hone.innerText='You won!!'
        btn.innerHTML = '<a href ="second.html">Level 2</a>'
    btn.setAttribute('onclick', 'doneQ()')
    }
    };
    function rowFive(){
const j = grid[16].value;
const k = grid[17].value;
const l = grid[18].value;
const y = grid[19].value;
window.j = j
window.k = k
window.l = l
window.y = y

J.readOnly = !false;
K.readOnly = !false;
L.readOnly = !false;
Y.readOnly = !false;

//5 row 0
if(j === "a"||j === "A"){
grid[16].style.backgroundColor = 'rgb(27, 225, 47)';
gridSixteen = true
}
else if(arr.includes(j)){
    grid[16].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[16].style.backgroundColor = 'rgb(244, 34, 34)';
}

//1
if(k === "u"||k === "U"){
grid[17].style.backgroundColor = 'rgb(27, 225, 47)';
gridSeventeen = true
}
else if(arr.includes(k)){
    grid[17].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[17].style.backgroundColor = 'rgb(244, 34, 34)';
}
//2
if(l === "t"||l === "T"){
grid[18].style.backgroundColor = 'rgb(27, 225, 47)';
gridEighteen = true
}
else if(arr.includes(l)){
    grid[18].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[18].style.backgroundColor = 'rgb(244, 34, 34)';
}
//3
if(y === "o"||y === "O"){
grid[19].style.backgroundColor = 'rgb(27, 225, 47)';
gridNineteen = true
}
else if(arr.includes(y)){
    grid[19].style.backgroundColor = 'rgb(226, 173, 81)';
}
else{
    grid[19].style.backgroundColor = 'rgb(244, 34, 34)';
}
if(gridSixteen&&gridSeventeen&&gridEighteen&&gridNineteen){
        hone.innerText='You won!!'
        btn.innerHTML = '<a href ="second.html">Level 2</a>'
    btn.setAttribute('onclick', 'doneQ()')
    }
    };
    //btn.innertext='Level 2'
    //btn.setAttribute('')

    //const variable = "lorem ipsum ...";
    //window.variable = variable;
    //globale variable (INTERNATIONAL) 
    //läuft jetzt über mehrere datein
    //wird in einem externen ort gespeichert
    //[so wie in einer ENDERCHEST]

    //btn.innerHTML = '<a href = "second.html"></a>'
    //btn.innerText = 'Level 2'
    //btn.setAttribute('onclick', 'doneQ()')