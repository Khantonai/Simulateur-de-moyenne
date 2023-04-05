function quoi(mat) {
  
}

function feur(mat) {
    if (mat == "hg") {
      calhg(mat)
    }
    else if (mat == "ang") {
      calang(mat)
    }
    else if (mat == "lvb") {
      callvb(mat)
    }
    else if (mat == "svt") {
      calsvt(mat)
    }
    else if (mat == "spc") {
      calspc(mat)
    }
    else if (mat == "fp") {
      calfp(mat)
    }
    else if (mat == "math") {
      calmath(mat)
    }
    else if (mat == "snt") {
      calsnt(mat)
    }
    else if (mat == "ses") {
      calses(mat)
    }
    else if (mat == "eps") {
      caleps(mat)
    }
    else if (mat == "emc") {
      calemc(mat)
    }
    else if (mat == "spea") {
      calspea(mat)
    }
    else if (mat == "speb") {
      calspeb(mat)
    }
}

link = []
lien = []
moygen = []
ordre = []

notehg = []
notehgbis = []
notehgcoef = []

noteang = []
noteangbis = []
noteangcoef = []

notelvb = []
notelvbbis = []
notelvbcoef = []

notesvt = []
notesvtbis = []
notesvtcoef = []

notespc = []
notespcbis = []
notespccoef = []

notefp = []
notefpbis = []
notefpcoef = []

notemath = []
notemathbis = []
notemathcoef = []

notesnt = []
notesntbis = []
notesntcoef = []

noteses = []
notesesbis = []
notesescoef = []

noteeps = []
noteepsbis = []
noteepscoef = []

noteemc = []
noteemcbis = []
noteemccoef = []

notespea = []
notespeabis = []
notespeacoef = []

notespeb = []
notespebbis = []
notespebcoef = []

li = ["hg", "ang", "lvb", "svt", "spc", "fp", "math", "snt", "ses", "eps", "emc", "spea", "speb"]


function matiere(mat) {
  if (document.getElementById(mat + "-s").className == "hide") {
    document.getElementById(mat + "-b").className = "hide"
    document.getElementById(mat + "-s").classList.remove("hide")
    if (mat == "hg") {
      calhg(mat)
    }
    else if (mat == "ang") {
      calang(mat)
    }
    else if (mat == "lvb") {
      callvb(mat)
    }
    else if (mat == "svt") {
      calsvt(mat)
    }
    else if (mat == "spc") {
      calspc(mat)
    }
    else if (mat == "fp") {
      calfp(mat)
    }
    else if (mat == "math") {
      calmath(mat)
    }
    else if (mat == "snt") {
      calsnt(mat)
    }
    else if (mat == "ses") {
      calses(mat)
    }
    else if (mat == "eps") {
      caleps(mat)
    }
    else if (mat == "emc") {
      calemc(mat)
    }
    else if (mat == "spea") {
      calspea(mat)
    }
    else if (mat == "speb") {
      calspeb(mat)
    } 
    pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
    document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  }
  else {
    document.getElementById(mat + "-b").classList.remove("hide")
    document.getElementById(mat + "-s").className = "hide"
    moygen.splice(ordre.indexOf(mat), 1)
    ordre.splice(ordre.indexOf(mat), 1)
    pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
    document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
    
    
  }
  glien()
}


function modenote(mat) {
  if (document.getElementById("bn" + mat).classList.contains('notselect') == true) {
    document.getElementById("bn" + mat).classList.replace('notselect', 'select')
    document.getElementById("bm" + mat).classList.replace('select', 'notselect')
    document.getElementById("br" + mat).classList.remove("hide")
    document.getElementById("c" + mat).classList.add("hide")
    if (mat == "hg") {
      calhg(mat)
    }
    else if (mat == "ang") {
      calang(mat)
    }
    else if (mat == "lvb") {
      callvb(mat)
    }
    else if (mat == "svt") {
      calsvt(mat)
    }
    else if (mat == "spc") {
      calspc(mat)
    }
    else if (mat == "fp") {
      calfp(mat)
    }
    else if (mat == "math") {
      calmath(mat)
    }
    else if (mat == "snt") {
      calsnt(mat)
    }
    else if (mat == "ses") {
      calses(mat)
    }
    else if (mat == "eps") {
      caleps(mat)
    }
    else if (mat == "emc") {
      calemc(mat)
    }
    else if (mat == "spea") {
      calspea(mat)
    }
    else if (mat == "speb") {
      calspeb(mat)
    }
  }
}


function modemoy(mat) {
  document.getElementById("bm" + mat).classList.replace('notselect', 'select')
  document.getElementById("bn" + mat).classList.replace('select', 'notselect')
  document.getElementById("br" + mat).classList.add("hide")
  document.getElementById("c" + mat).classList.remove("hide")
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + document.getElementById("c" + mat).value
  if (mat == "hg") {
      calhg(mat)
    }
    else if (mat == "ang") {
      calang(mat)
    }
    else if (mat == "lvb") {
      callvb(mat)
    }
    else if (mat == "svt") {
      calsvt(mat)
    }
    else if (mat == "spc") {
      calspc(mat)
    }
    else if (mat == "fp") {
      calfp(mat)
    }
    else if (mat == "math") {
      calmath(mat)
    }
    else if (mat == "snt") {
      calsnt(mat)
    }
    else if (mat == "ses") {
      calses(mat)
    }
    else if (mat == "eps") {
      caleps(mat)
    }
    else if (mat == "emc") {
      calemc(mat)
    }
    else if (mat == "spea") {
      calspea(mat)
    }
    else if (mat == "speb") {
      calspeb(mat)
    }
  glien()
}

function calhg(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notehg.length) {
    result = result + parseFloat(notehg[compte]) * parseFloat(notehgcoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notehgbis.length) {
    resultbis = resultbis + parseFloat(notehgbis[compte]) * parseFloat(notehgcoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res =parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("hg")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}


function calang(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < noteang.length) {
    result = result + parseFloat(noteang[compte]) * parseFloat(noteangcoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < noteangbis.length) {
    resultbis = resultbis + parseFloat(noteangbis[compte]) * parseFloat(noteangcoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("ang")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function callvb(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notelvb.length) {
    result = result + parseFloat(notelvb[compte]) * parseFloat(notelvbcoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notelvbbis.length) {
    resultbis = resultbis + parseFloat(notelvbbis[compte]) * parseFloat(notelvbcoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("lvb")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calsvt(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notesvt.length) {
    result = result + parseFloat(notesvt[compte]) * parseFloat(notesvtcoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notesvtbis.length) {
    resultbis = resultbis + parseFloat(notesvtbis[compte]) * parseFloat(notesvtcoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("svt")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calspc(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notespc.length) {
    result = result + parseFloat(notespc[compte]) * parseFloat(notespccoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notespcbis.length) {
    resultbis = resultbis + parseFloat(notespcbis[compte]) * parseFloat(notespccoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("spc")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calfp(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notefp.length) {
    result = result + parseFloat(notefp[compte]) * parseFloat(notefpcoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notefpbis.length) {
    resultbis = resultbis + parseFloat(notefpbis[compte]) * parseFloat(notefpcoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("fp")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calmath(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notemath.length) {
    result = result + parseFloat(notemath[compte]) * parseFloat(notemathcoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notemathbis.length) {
    resultbis = resultbis + parseFloat(notemathbis[compte]) * parseFloat(notemathcoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("math")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calsnt(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notesnt.length) {
    result = result + parseFloat(notesnt[compte]) * parseFloat(notesntcoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notesntbis.length) {
    resultbis = resultbis + parseFloat(notesntbis[compte]) * parseFloat(notesntcoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("snt")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calses(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < noteses.length) {
    result = result + parseFloat(noteses[compte]) * parseFloat(notesescoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notesesbis.length) {
    resultbis = resultbis + parseFloat(notesesbis[compte]) * parseFloat(notesescoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("ses")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function caleps(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < noteeps.length) {
    result = result + parseFloat(noteeps[compte]) * parseFloat(noteepscoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < noteepsbis.length) {
    resultbis = resultbis + parseFloat(noteepsbis[compte]) * parseFloat(noteepscoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("eps")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calemc(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < noteemc.length) {
    result = result + parseFloat(noteemc[compte]) * parseFloat(noteemccoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < noteemcbis.length) {
    resultbis = resultbis + parseFloat(noteemcbis[compte]) * parseFloat(noteemccoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("emc")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calspea(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notespea.length) {
    result = result + parseFloat(notespea[compte]) * parseFloat(notespeacoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notespeabis.length) {
    resultbis = resultbis + parseFloat(notespeabis[compte]) * parseFloat(notespeacoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("spea")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}

function calspeb(mat) {
  compte = 0
  result = 0
  resultbis = 0
  while (compte < notespeb.length) {
    result = result + parseFloat(notespeb[compte]) * parseFloat(notespebcoef[compte])
    compte += 1
  }
  compte = 0
  while (compte < notespebbis.length) {
    resultbis = resultbis + parseFloat(notespebbis[compte]) * parseFloat(notespebcoef[compte])
    compte += 1
  }
  if (document.getElementById("bn" + mat).classList == "select") {
    res = result / resultbis * 20
  }
  else {
    res = parseFloat(document.getElementById("c" + mat).value)
  }
  oo = ordre.indexOf(mat)
  if (oo == -1) {
    moygen.push(res.toFixed(2))
    ordre.push("speb")
  }
  else {
    moygen[ordre.indexOf(mat)] = res.toFixed(2)
  }
  document.getElementById('moy' + mat).innerHTML = "Moyenne dans cette matière : " + res.toFixed(2)
  pp = moygen.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / moygen.length
  document.getElementById('moyg').innerHTML = "Moyenne Générale : " + pp.toFixed(2)
  glien()
}




function ajouterNhg(mat, val1, val2, val3) {
  nb = notehg.length + 1
  notehg.push(val1)
  notehgbis.push(val2)
  notehgcoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) { 
    nvnote.oninput = function mere() {
      this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
      }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notehg[position - 1] = this.value
      notehgbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notehgcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calhg(mat)
    }
    catch {
      notehg.push(this.value)
      notehgbis.push(document.getElementById('n' + mat + position + "bis").value)
      notehgcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calhg(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notehgbis[position - 1] = this.value
      notehg[position - 1] = document.getElementById('n' + mat + position).value
      notehgcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calhg(mat)
    }
    catch {
      notehgbis.push(this.value)
      notehg.push(document.getElementById('n' + mat + position).value)
      notehgcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calhg(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notehg[position - 1] = document.getElementById('n' + mat + position).value
      notehgbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notehgcoef[position - 1] = this.value
      calhg(mat)
    }
    catch {
      notehg.push(document.getElementById('n' + mat + position).value)
      notehgbis.push(document.getElementById('n' + mat + position + "bis").value)
      notehgcoef.push(this.value)
      calhg(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notehg.splice(np - 1, 1)
    notehgbis.splice(np - 1, 1)
    notehgcoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calhg(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNang(mat, val1, val2, val3) {
  nb = noteang.length + 1
  noteang.push(val1)
  noteangbis.push(val2)
  noteangcoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteang[position - 1] = this.value
      noteangbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      noteangcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calang(mat)
    }
    catch {
      noteang.push(this.value)
      noteangbis.push(document.getElementById('n' + mat + position + "bis").value)
      noteangcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calang(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteangbis[position - 1] = this.value
      noteang[position - 1] = document.getElementById('n' + mat + position).value
      noteangcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calang(mat)
    }
    catch {
      noteangbis.push(this.value)
      noteang.push(document.getElementById('n' + mat + position).value)
      noteangcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calang(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteang[position - 1] = document.getElementById('n' + mat + position).value
      noteangbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      noteangcoef[position - 1] = this.value
      calang(mat)
    }
    catch {
      noteang.push(document.getElementById('n' + mat + position).value)
      noteangbis.push(document.getElementById('n' + mat + position + "bis").value)
      noteangcoef.push(this.value)
      calang(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    noteang.splice(np - 1, 1)
    noteangbis.splice(np - 1, 1)
    noteangcoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calang(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNlvb(mat, val1, val2, val3) {
  nb = notelvb.length + 1
  notelvb.push(val1)
  notelvbbis.push(val2)
  notelvbcoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notelvb[position - 1] = this.value
      notelvbbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notelvbcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      callvb(mat)
    }
    catch {
      notelvb.push(this.value)
      notelvbbis.push(document.getElementById('n' + mat + position + "bis").value)
      notelvbcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      callvb(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notelvbbis[position - 1] = this.value
      notelvb[position - 1] = document.getElementById('n' + mat + position).value
      notelvbcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      callvb(mat)
    }
    catch {
      notelvbbis.push(this.value)
      notelvb.push(document.getElementById('n' + mat + position).value)
      notelvbcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      callvb(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notelvb[position - 1] = document.getElementById('n' + mat + position).value
      notelvbbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notelvbcoef[position - 1] = this.value
      callvb(mat)
    }
    catch {
      notelvb.push(document.getElementById('n' + mat + position).value)
      notelvbbis.push(document.getElementById('n' + mat + position + "bis").value)
      notelvbcoef.push(this.value)
      callvb(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notelvb.splice(np - 1, 1)
    notelvbbis.splice(np - 1, 1)
    notelvbcoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    callvb(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNsvt(mat, val1, val2, val3) {
  nb = notesvt.length + 1
  notesvt.push(val1)
  notesvtbis.push(val2)
  notesvtcoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notesvt[position - 1] = this.value
      notesvtbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notesvtcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calsvt(mat)
    }
    catch {
      notesvt.push(this.value)
      notesvtbis.push(document.getElementById('n' + mat + position + "bis").value)
      notesvtcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calsvt(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notesvtbis[position - 1] = this.value
      notesvt[position - 1] = document.getElementById('n' + mat + position).value
      notesvtcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calsvt(mat)
    }
    catch {
      notesvtbis.push(this.value)
      notesvt.push(document.getElementById('n' + mat + position).value)
      notesvtcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calsvt(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notesvt[position - 1] = document.getElementById('n' + mat + position).value
      notesvtbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notesvtcoef[position - 1] = this.value
      calsvt(mat)
    }
    catch {
      notesvt.push(document.getElementById('n' + mat + position).value)
      notesvtbis.push(document.getElementById('n' + mat + position + "bis").value)
      notesvtcoef.push(this.value)
      calsvt(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notesvt.splice(np - 1, 1)
    notesvtbis.splice(np - 1, 1)
    notesvtcoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calsvt(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNspc(mat, val1, val2, val3) {
  nb = notespc.length + 1
  notespc.push(val1)
  notespcbis.push(val2)
  notespccoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespc[position - 1] = this.value
      notespcbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notespccoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calspc(mat)
    }
    catch {
      notespc.push(this.value)
      notespcbis.push(document.getElementById('n' + mat + position + "bis").value)
      notespccoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calspc(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespcbis[position - 1] = this.value
      notespc[position - 1] = document.getElementById('n' + mat + position).value
      notespccoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calspc(mat)
    }
    catch {
      notespcbis.push(this.value)
      notespc.push(document.getElementById('n' + mat + position).value)
      notespccoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calspc(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespc[position - 1] = document.getElementById('n' + mat + position).value
      notespcbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notespccoef[position - 1] = this.value
      calspc(mat)
    }
    catch {
      notespc.push(document.getElementById('n' + mat + position).value)
      notespcbis.push(document.getElementById('n' + mat + position + "bis").value)
      notespccoef.push(this.value)
      calspc(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notespc.splice(np - 1, 1)
    notespcbis.splice(np - 1, 1)
    notespccoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calspc(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNfp(mat, val1, val2, val3) {
  nb = notefp.length + 1
  notefp.push(val1)
  notefpbis.push(val2)
  notefpcoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notefp[position - 1] = this.value
      notefpbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notefpcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calfp(mat)
    }
    catch {
      notefp.push(this.value)
      notefpbis.push(document.getElementById('n' + mat + position + "bis").value)
      notefpcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calfp(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notefpbis[position - 1] = this.value
      notefp[position - 1] = document.getElementById('n' + mat + position).value
      notefpcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calfp(mat)
    }
    catch {
      notefpbis.push(this.value)
      notefp.push(document.getElementById('n' + mat + position).value)
      notefpcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calfp(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notefp[position - 1] = document.getElementById('n' + mat + position).value
      notefpbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notefpcoef[position - 1] = this.value
      calfp(mat)
    }
    catch {
      notefp.push(document.getElementById('n' + mat + position).value)
      notefpbis.push(document.getElementById('n' + mat + position + "bis").value)
      notefpcoef.push(this.value)
      calfp(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notefp.splice(np - 1, 1)
    notefpbis.splice(np - 1, 1)
    notefpcoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calfp(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNmath(mat, val1, val2, val3) {
  nb = notemath.length + 1
  notemath.push(val1)
  notemathbis.push(val2)
  notemathcoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notemath[position - 1] = this.value
      notemathbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notemathcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calmath(mat)
    }
    catch {
      notemath.push(this.value)
      notemathbis.push(document.getElementById('n' + mat + position + "bis").value)
      notemathcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calmath(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notemathbis[position - 1] = this.value
      notemath[position - 1] = document.getElementById('n' + mat + position).value
      notemathcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calmath(mat)
    }
    catch {
      notemathbis.push(this.value)
      notemath.push(document.getElementById('n' + mat + position).value)
      notemathcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calmath(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notemath[position - 1] = document.getElementById('n' + mat + position).value
      notemathbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notemathcoef[position - 1] = this.value
      calmath(mat)
    }
    catch {
      notemath.push(document.getElementById('n' + mat + position).value)
      notemathbis.push(document.getElementById('n' + mat + position + "bis").value)
      notemathcoef.push(this.value)
      calmath(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notemath.splice(np - 1, 1)
    notemathbis.splice(np - 1, 1)
    notemathcoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calmath(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNsnt(mat, val1, val2, val3) {
  nb = notesnt.length + 1
  notesnt.push(val1)
  notesntbis.push(val2)
  notesntcoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notesnt[position - 1] = this.value
      notesntbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notesntcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calsnt(mat)
    }
    catch {
      notesnt.push(this.value)
      notesntbis.push(document.getElementById('n' + mat + position + "bis").value)
      notesntcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calsnt(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notesntbis[position - 1] = this.value
      notesnt[position - 1] = document.getElementById('n' + mat + position).value
      notesntcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calsnt(mat)
    }
    catch {
      notesntbis.push(this.value)
      notesnt.push(document.getElementById('n' + mat + position).value)
      notesntcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calsnt(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notesnt[position - 1] = document.getElementById('n' + mat + position).value
      notesntbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notesntcoef[position - 1] = this.value
      calsnt(mat)
    }
    catch {
      notesnt.push(document.getElementById('n' + mat + position).value)
      notesntbis.push(document.getElementById('n' + mat + position + "bis").value)
      notesntcoef.push(this.value)
      calsnt(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notesnt.splice(np - 1, 1)
    notesntbis.splice(np - 1, 1)
    notesntcoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calsnt(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNses(mat, val1, val2, val3) {
  nb = noteses.length + 1
  noteses.push(val1)
  notesesbis.push(val2)
  notesescoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteses[position - 1] = this.value
      notesesbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notesescoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calses(mat)
    }
    catch {
      noteses.push(this.value)
      notesesbis.push(document.getElementById('n' + mat + position + "bis").value)
      notesescoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calses(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notesesbis[position - 1] = this.value
      noteses[position - 1] = document.getElementById('n' + mat + position).value
      notesescoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calses(mat)
    }
    catch {
      notesesbis.push(this.value)
      noteses.push(document.getElementById('n' + mat + position).value)
      notesescoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calses(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteses[position - 1] = document.getElementById('n' + mat + position).value
      notesesbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notesescoef[position - 1] = this.value
      calses(mat)
    }
    catch {
      noteses.push(document.getElementById('n' + mat + position).value)
      notesesbis.push(document.getElementById('n' + mat + position + "bis").value)
      notesescoef.push(this.value)
      calses(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    noteses.splice(np - 1, 1)
    notesesbis.splice(np - 1, 1)
    notesescoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calses(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNeps(mat, val1, val2, val3) {
  nb = noteeps.length + 1
  noteeps.push(val1)
  noteepsbis.push(val2)
  noteepscoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteeps[position - 1] = this.value
      noteepsbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      noteepscoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      caleps(mat)
    }
    catch {
      noteeps.push(this.value)
      noteepsbis.push(document.getElementById('n' + mat + position + "bis").value)
      noteepscoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      caleps(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteepsbis[position - 1] = this.value
      noteeps[position - 1] = document.getElementById('n' + mat + position).value
      noteepscoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      caleps(mat)
    }
    catch {
      noteepsbis.push(this.value)
      noteeps.push(document.getElementById('n' + mat + position).value)
      noteepscoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      caleps(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteeps[position - 1] = document.getElementById('n' + mat + position).value
      noteepsbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      noteepscoef[position - 1] = this.value
      caleps(mat)
    }
    catch {
      noteeps.push(document.getElementById('n' + mat + position).value)
      noteepsbis.push(document.getElementById('n' + mat + position + "bis").value)
      noteepscoef.push(this.value)
      caleps(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    noteeps.splice(np - 1, 1)
    noteepsbis.splice(np - 1, 1)
    noteepscoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    caleps(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNemc(mat, val1, val2, val3) {
  nb = noteemc.length + 1
  noteemc.push(val1)
  noteemcbis.push(val2)
  noteemccoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteemc[position - 1] = this.value
      noteemcbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      noteemccoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calemc(mat)
    }
    catch {
      noteemc.push(this.value)
      noteemcbis.push(document.getElementById('n' + mat + position + "bis").value)
      noteemccoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calemc(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteemcbis[position - 1] = this.value
      noteemc[position - 1] = document.getElementById('n' + mat + position).value
      noteemccoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calemc(mat)
    }
    catch {
      noteemcbis.push(this.value)
      noteemc.push(document.getElementById('n' + mat + position).value)
      noteemccoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calemc(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      noteemc[position - 1] = document.getElementById('n' + mat + position).value
      noteemcbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      noteemccoef[position - 1] = this.value
      calemc(mat)
    }
    catch {
      noteemc.push(document.getElementById('n' + mat + position).value)
      noteemcbis.push(document.getElementById('n' + mat + position + "bis").value)
      noteemccoef.push(this.value)
      calemc(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    noteemc.splice(np - 1, 1)
    noteemcbis.splice(np - 1, 1)
    noteemccoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calemc(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNspea(mat, val1, val2, val3) {
  nb = notespea.length + 1
  notespea.push(val1)
  notespeabis.push(val2)
  notespeacoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespea[position - 1] = this.value
      notespeabis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notespeacoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calspea(mat)
    }
    catch {
      notespea.push(this.value)
      notespeabis.push(document.getElementById('n' + mat + position + "bis").value)
      notespeacoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calspea(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespeabis[position - 1] = this.value
      notespea[position - 1] = document.getElementById('n' + mat + position).value
      notespeacoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calspea(mat)
    }
    catch {
      notespeabis.push(this.value)
      notespea.push(document.getElementById('n' + mat + position).value)
      notespeacoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calspea(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespea[position - 1] = document.getElementById('n' + mat + position).value
      notespeabis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notespeacoef[position - 1] = this.value
      calspea(mat)
    }
    catch {
      notespea.push(document.getElementById('n' + mat + position).value)
      notespeabis.push(document.getElementById('n' + mat + position + "bis").value)
      notespeacoef.push(this.value)
      calspea(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notespea.splice(np - 1, 1)
    notespeabis.splice(np - 1, 1)
    notespeacoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calspea(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}

function ajouterNspeb(mat, val1, val2, val3) {
  nb = notespeb.length + 1
  notespeb.push(val1)
  notespebbis.push(val2)
  notespebcoef.push(val3)
  var pos = document.getElementById("bl" + mat)

  var nvnote = document.createElement("input");
  nvnote.type = "number"
  nvnote.id = "n" + mat + nb
  nvnote.value = val1
  nvnote.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespeb[position - 1] = this.value
      notespebbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notespebcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calspeb(mat)
    }
    catch {
      notespeb.push(this.value)
      notespebbis.push(document.getElementById('n' + mat + position + "bis").value)
      notespebcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calspeb(mat)
    }}
  //----
  var nvnote1 = document.createElement("input");
  nvnote1.type = "number"
  nvnote1.id = "n" + mat + nb + "bis"
  nvnote1.value = val2
  nvnote1.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    nvnote1.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  nvnote1.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespebbis[position - 1] = this.value
      notespeb[position - 1] = document.getElementById('n' + mat + position).value
      notespebcoef[position - 1] = document.getElementById('n' + mat + 'coef' + position).value
      calspeb(mat)
    }
    catch {
      notespebbis.push(this.value)
      notespeb.push(document.getElementById('n' + mat + position).value)
      notespebcoef.push(document.getElementById('n' + mat + 'coef' + position).value)
      calspeb(mat)
    }}
  //----
  var coef = document.createElement("input");
  coef.type = "number"
  coef.id = "n" + mat + 'coef' + nb
  coef.value = val3
  coef.className = "note"
  if (navigator.userAgent.match(/safari/i)) {
    coef.oninput = function mere() {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }}
  coef.onchange = function maj() {
    position = this.id.replace(/[^0-9]/g,'')
    try {
      notespeb[position - 1] = document.getElementById('n' + mat + position).value
      notespebbis[position - 1] = document.getElementById('n' + mat + position + "bis").value
      notespebcoef[position - 1] = this.value
      calspeb(mat)
    }
    catch {
      notespeb.push(document.getElementById('n' + mat + position).value)
      notespebbis.push(document.getElementById('n' + mat + position + "bis").value)
      notespebcoef.push(this.value)
      calspeb(mat)
    }}
  //-----
  var btX = document.createElement("input")
  btX.type = "button"
  btX.value = "X"
  btX.id = "n" + mat + "s" + nb
  btX.onclick = function suppn() {
    stop = 0
    var np = this.id.replace(/[^0-9]/g,'')
    lol = parseInt(np)
    long = parseInt(np) + 1
    document.getElementById('n' + mat + 's' + np).remove()
    document.getElementById('n' + mat + 'saut' + np).remove()
    document.getElementById('n' + mat + np).remove()
    document.getElementById('n' + mat + np + 'bis').remove()
    document.getElementById('n' + mat + 'coef' + np).remove()
    notespeb.splice(np - 1, 1)
    notespebbis.splice(np - 1, 1)
    notespebcoef.splice(np - 1, 1)
    while (stop == 0) {
      try {
        document.getElementById('n' + mat + long ).id = 'n' + mat + lol
        document.getElementById('n' + mat + long + 'bis').id = 'n' + mat + lol + 'bis'
        document.getElementById('n' + mat + 's' + long).id = 'n' + mat + 's' + lol
        document.getElementById('n' + mat + 'saut' + long).id = 'n' + mat + 'saut' + lol 
        document.getElementById('n' + mat + 'coef' + long).id = 'n' + mat + 'coef' + lol
        lol += 1
        long += 1
        
      }
      catch {
        stop = 1
      }
    }
    calspeb(mat)
  }
  btX.className = "x"
  
  var saut = document.createElement("br")
  saut.id = "n" + mat + "saut" + nb

  document.getElementById("br" + mat).insertBefore(saut, pos)
  document.getElementById("br" + mat).insertBefore(nvnote, pos)
  document.getElementById("br" + mat).insertBefore(nvnote1, pos)
  document.getElementById("br" + mat).insertBefore(coef, pos)
  document.getElementById("br" + mat).insertBefore(btX, pos)
  
}



function placement() {
  lien = document.getElementById("lien").value.split(',')
  test = 0
  yes = 0
  cb = 1
  cba = 2
  cbb = 3
  test += lien.indexOf('hg')
  test += lien.indexOf('ang')
  test += lien.indexOf('lvb')
  test += lien.indexOf('svt')
  test += lien.indexOf('spc')
  test += lien.indexOf('fp')
  test += lien.indexOf('math')
  test += lien.indexOf('snt')
  test += lien.indexOf('ses')
  test += lien.indexOf('eps')
  test += lien.indexOf('emc')
  test += lien.indexOf('spea')
  test += lien.indexOf('speb')

  if (test >= 78) {
    if (lien[cb] != "ang" && lien[cb] != "m") {
      while (lien[cb] != "ang") {
        ajouterNhg("hg", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("hg-s").className == "hide") {
        matiere("hg")}
      calhg("hg")
    }
    else if (lien[cb] == "m") {
      modemoy('hg')
      document.getElementById("chg").value = lien[cb + 1]
      if (document.getElementById("hg-s").className == "hide") {
        matiere("hg")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "lvb" && lien[cb] != "m") {
      while (lien[cb] != "lvb") {
        ajouterNang("ang", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("ang-s").className == "hide") {
        matiere("ang")}
      calang("ang")
    }
    else if (lien[cb] == "m") {
      modemoy('ang')
      document.getElementById("cang").value = lien[cb + 1]
      if (document.getElementById("ang-s").className == "hide") {
        matiere("ang")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "svt" && lien[cb] != "m") {
      while (lien[cb] != "svt") {
        ajouterNlvb("lvb", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("lvb-s").className == "hide") {
        matiere("lvb")}
      callvb("lvb")
    }
    else if (lien[cb] == "m") {
      modemoy('lvb')
      document.getElementById("clvb").value = lien[cb + 1]
      if (document.getElementById("lvb-s").className == "hide") {
        matiere("lvb")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "spc" && lien[cb] != "m") {
      while (lien[cb] != "spc") {
        ajouterNsvt("svt", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("svt-s").className == "hide") {
        matiere("svt")}
      calsvt("svt")
    }
    else if (lien[cb] == "m") {
      modemoy('svt')
      document.getElementById("csvt").value = lien[cb + 1]
      if (document.getElementById("svt-s").className == "hide") {
        matiere("svt")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "fp" && lien[cb] != "m") {
      while (lien[cb] != "fp") {
        ajouterNspc("spc", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("spc-s").className == "hide") {
        matiere("spc")}
      calspc("spc")
    }
    else if (lien[cb] == "m") {
      modemoy('spc')
      document.getElementById("cspc").value = lien[cb + 1]
      if (document.getElementById("spc-s").className == "hide") {
        matiere("spc")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "math" && lien[cb] != "m") {
      while (lien[cb] != "math") {
        ajouterNfp("fp", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("fp-s").className == "hide") {
        matiere("fp")}
      calfp("fp")
    }
    else if (lien[cb] == "m") {
      modemoy('fp')
      document.getElementById("cfp").value = lien[cb + 1]
      if (document.getElementById("fp-s").className == "hide") {
        matiere("fp")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "snt" && lien[cb] != "m") {
      while (lien[cb] != "snt") {
        ajouterNmath("math", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("math-s").className == "hide") {
        matiere("math")}
      calmath("math")
    }
    else if (lien[cb] == "m") {
      modemoy('math')
      document.getElementById("cmath").value = lien[cb + 1]
      if (document.getElementById("math-s").className == "hide") {
        matiere("math")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

  if (lien[cb] != "ses" && lien[cb] != "m") {
      while (lien[cb] != "ses") {
        ajouterNsnt("snt", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("snt-s").className == "hide") {
        matiere("snt")}
      calsnt("snt")
    }
    else if (lien[cb] == "m") {
      modemoy('snt')
      document.getElementById("csnt").value = lien[cb + 1]
      if (document.getElementById("snt-s").className == "hide") {
        matiere("snt")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "eps" && lien[cb] != "m") {
      while (lien[cb] != "eps") {
        ajouterNses("ses", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("ses-s").className == "hide") {
        matiere("ses")}
      calses("ses")
    }
    else if (lien[cb] == "m") {
      modemoy('ses')
      document.getElementById("cses").value = lien[cb + 1]
      if (document.getElementById("ses-s").className == "hide") {
        matiere("ses")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "emc" && lien[cb] != "m") {
      while (lien[cb] != "emc") {
        ajouterNeps("eps", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("eps-s").className == "hide") {
        matiere("eps")}
      caleps("eps")
    }
    else if (lien[cb] == "m") {
      modemoy('eps')
      document.getElementById("ceps").value = lien[cb + 1]
      if (document.getElementById("eps-s").className == "hide") {
        matiere("eps")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "spea" && lien[cb] != "m") {
      while (lien[cb] != "spea") {
        ajouterNemc("emc", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("emc-s").className == "hide") {
        matiere("emc")}
      calemc("emc")
    }
    else if (lien[cb] == "m") {
      modemoy('emc')
      document.getElementById("cemc").value = lien[cb + 1]
      if (document.getElementById("emc-s").className == "hide") {
        matiere("emc")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != "speb" && lien[cb] != "m") {
      while (lien[cb] != "speb") {
        ajouterNspea("spea", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("spea-s").className == "hide") {
        matiere("spea")}
      calspea("spea")
    }
    else if (lien[cb] == "m") {
      modemoy('spea')
      document.getElementById("cspea").value = lien[cb + 1]
      if (document.getElementById("spea-s").className == "hide") {
        matiere("spea")}
      cb += 2
      cba += 2
      cbb += 2
    }
    cb += 1
    cba += 1
    cbb += 1

    if (lien[cb] != undefined && lien[cb] != "m") {
      while (lien[cb] != undefined) {
        ajouterNspeb("speb", lien[cb], lien[cba], lien[cbb])
        cb += 3
        cba += 3
        cbb += 3
      }
      if (document.getElementById("speb-s").className == "hide") {
        matiere("speb")
      }
      calspeb("speb")
    }
    else if (lien[cb] == "m") {
      modemoy('speb')
      document.getElementById("cspeb").value = lien[cb + 1]
      if (document.getElementById("speb-s").className == "hide") {
        matiere("speb")
      }
    }
    ce = document.getElementById("baj")
    ce.classList.add("yes")
    ce.value = "Importé !"
    setTimeout(() => {  ce.classList.remove("yes"); ce.value = "Importer" }, 3000);
  }
  else {
    ce = document.getElementById("baj")
    if (document.getElementById("lien").value == "") {
      ce.classList.add("no")
      ce.value = "Vide"
      setTimeout(() => {  ce.classList.remove("no"); ce.value = "Importer" }, 3000);
    }
    else {
      ce.classList.add("no")
      ce.value = "Erreur"
      setTimeout(() => {  ce.classList.remove("no"); ce.value = "Importer" }, 3000);
    }
  }
  
  
  // hg,0,1,1,ang,0,1,1,lvb,0,1,1,svt,0,1,1,spc,0,1,1,fp,0,1,1,math,0,1,1,snt,0,1,1,ses,0,1,1,eps,0,1,1,emc,0,1,1,spea,0,1,1,speb,0,1,1
}

function glien() {
  link = []
  cpt = 0
  link.push("hg")
  if (document.getElementById("hg-b").className == "hide" && document.getElementById("bmhg").className == "notselect") {
    while (cpt < notehg.length) {
      link.push(notehg[cpt])
      link.push(notehgbis[cpt])
      link.push(notehgcoef[cpt])
      cpt += 1
    }}
  else if (document.getElementById("hg-b").className == "hide" && document.getElementById("bmhg").className == "select") {
    link.push("m")
    link.push(document.getElementById("chg").value)
  }
  
  
  cpt = 0
  link.push("ang")
  if (document.getElementById("ang-b").className == "hide" && document.getElementById("bmang").className == "notselect") {
    while (cpt < noteang.length) {
      link.push(noteang[cpt])
      link.push(noteangbis[cpt])
      link.push(noteangcoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("ang-b").className == "hide" && document.getElementById("bmang").className == "select") {
    link.push("m")
    link.push(document.getElementById("cang").value)
  }

  cpt = 0
  link.push("lvb")
  if (document.getElementById("lvb-b").className == "hide" && document.getElementById("bmlvb").className == "notselect") {
    while (cpt < notelvb.length) {
      link.push(notelvb[cpt])
      link.push(notelvbbis[cpt])
      link.push(notelvbcoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("lvb-b").className == "hide" && document.getElementById("bmlvb").className == "select") {
    link.push("m")
    link.push(document.getElementById("clvb").value)
  }
  
  cpt = 0
  link.push("svt")
  if (document.getElementById("svt-b").className == "hide" && document.getElementById("bmsvt").className == "notselect") {
    while (cpt < notesvt.length) {
      link.push(notesvt[cpt])
      link.push(notesvtbis[cpt])
      link.push(notesvtcoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("svt-b").className == "hide" && document.getElementById("bmsvt").className == "select") {
    link.push("m")
    link.push(document.getElementById("csvt").value)
  }

  cpt = 0
  link.push("spc")
  if (document.getElementById("spc-b").className == "hide" && document.getElementById("bmspc").className == "notselect") {
    while (cpt < notespc.length) {
      link.push(notespc[cpt])
      link.push(notespcbis[cpt])
      link.push(notespccoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("spc-b").className == "hide" && document.getElementById("bmspc").className == "select") {
    link.push("m")
    link.push(document.getElementById("cspc").value)
  }

  cpt = 0
  link.push("fp")
  if (document.getElementById("fp-b").className == "hide" && document.getElementById("bmfp").className == "notselect") {
    while (cpt < notefp.length) {
      link.push(notefp[cpt])
      link.push(notefpbis[cpt])
      link.push(notefpcoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("fp-b").className == "hide" && document.getElementById("bmfp").className == "select") {
    link.push("m")
    link.push(document.getElementById("cfp").value)
  }

  cpt = 0
  link.push("math")
  if (document.getElementById("math-b").className == "hide" && document.getElementById("bmmath").className == "notselect") {
    while (cpt < notemath.length) {
      link.push(notemath[cpt])
      link.push(notemathbis[cpt])
      link.push(notemathcoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("math-b").className == "hide" && document.getElementById("bmmath").className == "select") {
    link.push("m")
    link.push(document.getElementById("cmath").value)
  }

  cpt = 0
  link.push("snt")
  if (document.getElementById("snt-b").className == "hide" && document.getElementById("bmsnt").className == "notselect") {
    while (cpt < notesnt.length) {
      link.push(notesnt[cpt])
      link.push(notesntbis[cpt])
      link.push(notesntcoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("snt-b").className == "hide" && document.getElementById("bmsnt").className == "select") {
    link.push("m")
    link.push(document.getElementById("csnt").value)
  }

  cpt = 0
  link.push("ses")
  if (document.getElementById("ses-b").className == "hide" && document.getElementById("bmses").className == "notselect") {
    while (cpt < noteses.length) {
      link.push(noteses[cpt])
      link.push(notesesbis[cpt])
      link.push(notesescoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("ses-b").className == "hide" && document.getElementById("bmses").className == "select") {
    link.push("m")
    link.push(document.getElementById("cses").value)
  }

  cpt = 0
  link.push("eps")
  if (document.getElementById("eps-b").className == "hide" && document.getElementById("bmeps").className == "notselect") {
    while (cpt < noteeps.length) {
      link.push(noteeps[cpt])
      link.push(noteepsbis[cpt])
      link.push(noteepscoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("eps-b").className == "hide" && document.getElementById("bmeps").className == "select") {
    link.push("m")
    link.push(document.getElementById("ceps").value)
  }

  cpt = 0
  link.push("emc")
  if (document.getElementById("emc-b").className == "hide" && document.getElementById("bmemc").className == "notselect") {
    while (cpt < noteemc.length) {
      link.push(noteemc[cpt])
      link.push(noteemcbis[cpt])
      link.push(noteemccoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("emc-b").className == "hide" && document.getElementById("bmemc").className == "select") {
    link.push("m")
    link.push(document.getElementById("cemc").value)
  }

  cpt = 0
  link.push("spea")
  if (document.getElementById("spea-b").className == "hide" && document.getElementById("bmspea").className == "notselect") {
    while (cpt < notespea.length) {
      link.push(notespea[cpt])
      link.push(notespeabis[cpt])
      link.push(notespeacoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("spea-b").className == "hide" && document.getElementById("bmspea").className == "select") {
    link.push("m")
    link.push(document.getElementById("cspea").value)
  }

  cpt = 0
  link.push("speb")
  if (document.getElementById("speb-b").className == "hide" && document.getElementById("bmspeb").className == "notselect") {
    while (cpt < notespeb.length) {
      link.push(notespeb[cpt])
      link.push(notespebbis[cpt])
      link.push(notespebcoef[cpt])
      cpt += 1
    }}
    else if (document.getElementById("speb-b").className == "hide" && document.getElementById("bmspeb").className == "select") {
    link.push("m")
    link.push(document.getElementById("cspeb").value)
  }
  
  document.getElementById("acopie").value = link
}

function copie() {
  ce = document.getElementById("bcopie")
  var copyTextarea = document.getElementById("acopie");
  copyTextarea.select();
  document.execCommand("copy");
  if (document.getElementById("acopie").value == "") {
    ce.classList.add("no")
  ce.value = "Vide"
  setTimeout(() => {  ce.classList.remove("no"); ce.value = "Copier" }, 3000);
  }
  else {
    ce.classList.add("yes")
    ce.value = "Copié !"
    setTimeout(() => {  ce.classList.remove("yes"); ce.value = "Copier" }, 3000);
    }
}