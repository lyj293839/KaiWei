import { post } from "../../api/index";

const All = {}
All.isPhone= function (str) {
    const reg = /^1\d{10}$/
    return reg.test(str)
};
All.isEmail= function (str) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(str)
}
All.goTop= function(){
    // 回到顶部
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  // 实现滚动效果 
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
    if (top <= 0) {
      clearInterval(timeTop);
    }
  }, 10);
}
All.change = function(that){
  if(localStorage.getItem('token')){
    post('/newData').then(res=>{
        if (res && res.code == 200){
          var a = JSON.stringify(res.data)
          localStorage.setItem('newData',a)
          localStorage.setItem('shopNum',res.data.cart_num)
        }
    }).catch(function(error) {
        console.log(error)
    });
  }
}
All.historyProd= function (item) {
  var arr = localStorage.getItem('historyProd')?JSON.parse(localStorage.getItem('historyProd')):[]
  var len = 0
  arr.forEach(res=>{
    if(res.prod_id==item.prod_id){
      len++
    }
  })
  if(len===0){
    arr.push(item);
  }
  if(arr.length>10){
    arr.splice(1,1)
  }
  localStorage.setItem('historyProd',JSON.stringify(arr))
}
All.title_change = function(meta){
  if(meta&&meta.title){
    window.document.title = ('凯为化学-'+meta.title)
  }else{
    window.document.title = '凯为化学'
  }
  sessionStorage.setItem('title',window.document.title)
}
All.forceFileDownload =  function(response, filename) {
  const url = window.URL.createObjectURL(new Blob([response]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename) // or any other extension
  document.body.appendChild(link)
  link.click()
  // eslint-disable-next-line no-unused-vars
  let timeout = setTimeout(function () {
    document.body.removeChild(link)
    // eslint-disable-next-line no-unused-expressions
    window.URL.revokeObjectURL(url)
    // eslint-disable-next-line no-sequences
    , 1000
  })
}
export default All