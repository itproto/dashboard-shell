console.info('shell is loading');

const loadApp = (appName) => {
  System.import(`apps/${appName}.js`).then(
      (res) => {
        let mod = res;
        mod.inc()
        console.info(res)
      },

      (err) => {
        console.error(err)
      }
  )
}

const bootShell = () => {
   document.querySelector('#apps').addEventListener('click', (evt) => {
      if(evt.target.tagName !== 'A'){
        return;
      }
      
      evt.preventDefault()
      const appName = evt.target.getAttribute('href').slice(1)

      loadApp(appName)
   })
}

document.addEventListener('DOMContentLoaded', bootShell)
