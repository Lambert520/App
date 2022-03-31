//处理token

//存储token
export const setToken = (token)=>{

    sessionStorage.setItem('TOKEN',token);
}
//获取token
export const getToken = ()=>{
    return sessionStorage.getItem('TOKEN');
}
//清除本地存储的token
export const removeToken = ()=>{

    sessionStorage.removeItem('TOKEN');
}