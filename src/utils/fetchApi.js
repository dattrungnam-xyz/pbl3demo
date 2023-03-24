const getData = async (url) => {
    const data = await fetch(url,{
      method: "get",
      headers:{
        "Content-Type": "application/json",
      }
    }).then(res => res.json())

    return data;
}
export {
    getData
}
