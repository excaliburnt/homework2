const instrumentForm = document.querySelector('#instrumentForm')

instrumentForm.addEventListener('submit', handleSubmit)

const details = document.querySelector('#details')

function handleSubmit(ev) {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('#details')
  const instrument= {Instrument: form.instrumentName.value, Company: form.company.value}
  details.prepend(renderList(instrument))

}

function renderListItem(label, value) {
  const item = document.createElement('li')
  item.innerHTML = `${label}: ${value}`

  return item
}

function renderList(personData) {
  const list = document.createElement('ul')
  
  Object.keys(personData).map(function(label) {
    const item = renderListItem(label, personData[label])
    list.appendChild(item)
  })

  return list
}
