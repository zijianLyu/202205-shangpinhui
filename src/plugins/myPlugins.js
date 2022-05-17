let MyPlugin = {}
MyPlugin.install = function(Vue,options){
  console.log('lzj',Vue,options)
  Vue.directive(options.name,(element,b)=>{
    console.log('执行了',element,b)
    element.innerHTML = b.value.toUpperCase()  })
}
export default MyPlugin
