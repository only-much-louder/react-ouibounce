module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactOuibounce',
      externals: {
        react: 'React'
      }
    }
  }
}
