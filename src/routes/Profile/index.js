export default {
  path: 'profile',
  getComponent(nextState, cb){
    require.ensure([], (require) => {
      cb(null, require('./components/Profile').default)
    })
  }
}
