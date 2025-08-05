

let rubrica = {
  contacts: [
    { nome: 'Nicola', telefono: '3331111111' },
    { nome: 'Lorenzo', telefono: '3332222222' },
    { nome: 'Paola', telefono: '3333333333' },
    { nome: 'Jenny', telefono: '3334444444' }
  ],
  mostraTuttiContatti: function () {
    let out = '';
    for (const contatto of this.contacts) {
      out += `Nome: ${contatto.nome}, Telefono: ${contatto.telefono}\n`;
    }
    document.getElementById('output').textContent = out;
  },
  mostraContattoSingolo: function (nome) {
    const contatto = this.contacts.find(c => c.nome.toLowerCase() === nome.toLowerCase());
    if (contatto) {
      document.getElementById('output').textContent = `Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`;
    } else {
      document.getElementById('output').textContent = `Contatto non trovato per il nome "${nome}"`;
    }
  },
  eliminaContatto: function (nome) {
    const index = this.contacts.findIndex(c => c.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
      this.contacts.splice(index, 1);
      document.getElementById('output').textContent = `Contatto "${nome}" eliminato`;
    } else {
      document.getElementById('output').textContent = `Contatto non trovato per il nome "${nome}"`;
    }
  },
  aggiungiContatto: function (nome, telefono) {
    this.contacts.push({ nome, telefono });
    document.getElementById('output').textContent = `Contatto "${nome}" aggiunto`;
  },
  modificaContatto: function (nome, nuovoTelefono) {
    const contatto = this.contacts.find(c => c.nome.toLowerCase() === nome.toLowerCase());
    if (contatto) {
      contatto.telefono = nuovoTelefono;
      document.getElementById('output').textContent = `Telefono del contatto "${nome}" modificato`;
    } else {
      document.getElementById('output').textContent = `Contatto non trovato per il nome "${nome}"`;
    }
  }
};

function mostraContattoSingolo() {
  rubrica.mostraContattoSingolo(document.getElementById('nomeSingolo').value);
  document.getElementById('nomeSingolo').value = '';
}
function eliminaContatto() {
  rubrica.eliminaContatto(document.getElementById('nomeElimina').value);
  document.getElementById('nomeElimina').value = '';
}
function aggiungiContatto() {
  rubrica.aggiungiContatto(
    document.getElementById('nomeAggiungi').value,
    document.getElementById('telAggiungi').value
  );
  document.getElementById('nomeAggiungi').value = '';
  document.getElementById('telAggiungi').value = '';
}
function modificaContatto() {
  rubrica.modificaContatto(
    document.getElementById('nomeModifica').value,
    document.getElementById('telModifica').value
  );
  document.getElementById('nomeModifica').value = '';
  document.getElementById('telModifica').value = '';
}

const see = document.querySelector('.mostra-contatto').addEventListener('click', mostraContattoSingolo);
const delate = document.querySelector('.elimina-contatto').addEventListener('click', eliminaContatto);
const add = document.querySelector('.aggiungi-contatto').addEventListener('click', aggiungiContatto);
const change = document.querySelector('.modifica-contatto').addEventListener('click', modificaContatto);
const all = document.querySelector('.mostra-tutti').addEventListener('click', () => {
  rubrica.mostraTuttiContatti();
});
