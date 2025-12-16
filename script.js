let nom = document.getElementById('nom')
let niveau = document.getElementById('niveau')
let matier = document.getElementById('matier')
let note = document.getElementById('note')
let entrer = document.getElementById('entrer')
let tbody = document.getElementById('tbody')
let mood = 'creat'
let ii
let tbl = []

function creat() {
    let data = {
        name: nom.value,
        nivo: niveau.value,
        filier: matier.value,
        point: note.value
    }
    if (mood === 'creat' && 
        nom.value != '' &&
        niveau.value != '' &&
        matier.value != '') {
        tbl.push(data)
    }
    else if (mood === 'update' && 
        nom.value != '' &&
        niveau.value != '' &&
        matier.value != '') {
            tbl[ii] = data
            entrer.innerHTML = 'entrer'
            mood = 'creat'
    }

    nom.value = ''
    niveau.value = ''
    matier.value = ''
    note.value = ''

    showData()
}

function showData() {
    let table = ''
    for (let i = 0; i < tbl.length; i++) {
        table += `
        <tr>
            <td>${tbl[i].name}</td>
            <td>${tbl[i].nivo}</td>
            <td>${tbl[i].filier}</td>
            <td>${tbl[i].point}</td>
            <td><button onclick='deleteData(${i})'>Suprimer</button></td>
            <td><button onclick='updateData(${i})'>Mise a jour</button></td>
        </tr>
        `
    }
    tbody.innerHTML = table
}

function deleteData(i) {
    tbl.splice(i,1)
    showData()
}

function updateData(i) {
    ii = i
    mood = 'update'
    nom.value = tbl[i].name
    niveau.value = tbl[i].nivo
    matier.value = tbl[i].filier
    note.value = tbl[i].point
    entrer.innerHTML = 'mise a jour'
}