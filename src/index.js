import Router from './router'
import Outlet from './outlet'


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
    const outlet = new Outlet(document.querySelector('#outlet'))
    const router = new Router(outlet)
    router.start()


    document.querySelector('#apps').addEventListener('click', (evt) => {
      if(evt.target.tagName !== 'A'){
        return;
      }

      // const appName = evt.target.getAttribute('href').slice(1)
      //loadApp(appName)
      evt.preventDefault()
      router.navigate(evt.target.href)
    })
}


document.addEventListener('DOMContentLoaded', bootShell)
