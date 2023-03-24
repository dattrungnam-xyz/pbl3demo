

const getData = async (url) => {
    const data = await fetch(url,{
      method: "get",
      headers:{
        "Content-Type": "application/json",
      }
    }).then(res => res.json())

    return data;
}
const getDataOnlyAdmin = async (url,token) => {
    const data = await fetch(url,{
      method: "get",
      headers:{
        "Content-Type": "application/json",
        "token": `${token}`,
      }
    }).then(res => res.json())

    return data;
}
export {
  getData,
    getDataOnlyAdmin

}
