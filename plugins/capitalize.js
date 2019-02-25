import Vue from 'vue'

Vue.filter('capitalize', (value) => {
  if (!value) {
    return ''
  }

  const words = value.toString()
    .toLowerCase()
    .split(' ')

  return words.map((l) => {
    if (l.indexOf('/') !== -1) {
      const parts = l.split('/')

      l = parts.map(j => j.charAt(0).toUpperCase() + j.slice(1)).join('/')
    }

    return l.charAt(0).toUpperCase() + l.slice(1)
  }).join(' ')
})
