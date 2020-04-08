export function setSource(crypto) {
    try {
      const src = require(`../assets/icon/${crypto.symbol.toLowerCase()}.svg`)
      return src
    } catch {
      return ''
    }
  }

