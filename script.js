const $container = document.getElementById('container')
console.log($container)
const newElements = []

for (let i = 127789; i < 127799; i++) {
  newElements.push(`
    <div class='emoji'>
      <p>
        &#${i}
      </p>
      <p>
        ${i}
      </p>
    </div>
  `)
}

$container.innerHTML = newElements.join('')

const $emojiList = document.querySelectorAll('.emoji')

for (const item of $emojiList) {
  if (item.children[1].textContent === 127797) {
    item.style.backgroundColor = 'lightgrey'
  }
}

// event listener
$container.addEventListener('click', function (event) {
  const value = event.target.closest('div').children[1].textContent
  // console.log(value)

  let name = ''

  // if (value === '127789') {
  //  name = 'Hotdog'
  // } else if (value === '127790') {
  //  name = 'Taco'
  // }

  switch (value) {
    case '127789':
      name = 'Hotdog'
      break
    case '127790':
      name = 'Taco'
      break
  }

  document.getElementsById('preview').innerHTML = `
<p styles= 'font-size:100px'>
  &#${value};
  </p>

  <p>
  ${name}
  </p>
  
  `
})
