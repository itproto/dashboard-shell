const event = 'popstate'

class Router {
   
   constructor(outlet){
     this.outlet = outlet
     this._onChanged = this.onChanged.bind(this)
     this.onChanged()
   }

   onChanged(){
     const path = window.location.pathname
     this.outlet.loadModule(path)
     console.info(path);
   }

   start(){
     window.addEventListener(event, this._onChanged)
   }
   
   stop(){
     window.removeEventListener(event, this._onChanged)
   }

   navigate(url){
     window.history.pushState(null, null, url)
     return this._onChanged()
   }
}

export default Router
