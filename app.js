(async function main(){
  try {
    throw Error('错误')
  } catch(err){
    console.error(err)
  }
})()