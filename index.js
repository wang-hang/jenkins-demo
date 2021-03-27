const envs = [
  {
    key: 'AWP_DEPLOY_VERSION',
    value: '19577'
  },
]


const makeLikeStr = (envs) => {
  const str = envs.map(item => {
    const { key, value} = item
    return `%{%"key"%"${key}"%"value"%"${value}"%}`
  }).join('')
  let fullStr = `%"envs"%[${str}%]%`
  console.log(fullStr)
  return  
}

makeLikeStr(envs)