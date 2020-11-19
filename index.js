//get

module.exports.get=async url=>{
  const response=await fetch(url,{
    method:"GET",
    headers:{
      "Content-type":"application/json"
    },
  });
  const resData=await response.json();
  return resData;
}

//post
module.exports.post=async (url,data)=>{
  const response=await fetch(url,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(data)
  });
  const resData=await response.json();
  return resData;
}

//PUT
module.exports.put=async (url,data)=>{
  const response=await fetch(url,{
    method:"PUT",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(data)
  });
  const resData=await response.json();
  return resData;
}


//delete
module.exports.delete=async url=>{
  const response=await fetch(url,{
    method:"DELETE",
    headers:{
      "Content-type":"application/json"
    },
 
  });
  const resData=await "删除成功";
  return resData;
}
module.exports.shu=async url=>{
     console.log(url)
}