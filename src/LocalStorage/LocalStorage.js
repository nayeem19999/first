const getDataFromLocalStorage=()=>{
    const getData=localStorage.getItem('application-details')
    if(getData){
        return JSON.parse(getData)
    }
    return []
}

const setDataInLocalStorage=(id)=>{
    const data = getDataFromLocalStorage()
    const exist = data.find(item=>item === id)
    if(!exist){
        data.push(id)
        localStorage.setItem('application-details', JSON.stringify(data))
    }
}


const removeDataFromLocalStorage=(id)=>{
    const data = getDataFromLocalStorage()
    const filterData = data.filter(da=>da !== id)
    if(filterData){
        data.push(id)
        localStorage.setItem('application-details', JSON.stringify(filterData))
    }

}

export {setDataInLocalStorage,getDataFromLocalStorage,removeDataFromLocalStorage}