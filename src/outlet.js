const event = 'popstate'

class Outlet {
   
   constructor(el){
     this.el = el;
   }

   loadModule(url, data){
      const app = url.slice(0)
      System.import(`apps/${app}.js`).then(this.onModuleLoaded.bind(this))
   }

   onModuleLoaded(mod){
     this.el.innerHTML = mod.view
   }

   clearChildren(){
     while(this.el.firstChild){
       this.el.removeChild(this.el.firstChild)
     }
   }

}

export default Outlet
