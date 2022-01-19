const cosasQueAprendimos = [
  {
    tema: 'terminal',
    class: '',
  },
  {
    tema: 'node',
    class: '',
  },
  {
    tema: 'oop',
    class: '',
  },
  {
    tema: 'flexbox',
    class: '',
  },
  {
    tema: 'css',
    class: '',
  },
  {
    tema: 'dom',
    class: 'special',
  },
];

function main() {
  //codigo aqui..
  // 1 recorrer el array cosasQueAprendimos[]
  cosasQueAprendimos.forEach(cosa => {
    // 2 crear el li (hijo)
    const nuevoItem = document.createElement('li');
    nuevoItem.innerText = cosa.tema;  //con innerText le agrego texto a esa lista
    nuevoItem.className = cosa.class;
    // 3 agregar el li al padre (ul)
    document.querySelector('ul.lista').appendChild(nuevoItem); // busca al padre 'ul' con la clase "lista" y le ponemos la propiedad agregar hijo llamado "nuevoItem"
  })

}

main();
