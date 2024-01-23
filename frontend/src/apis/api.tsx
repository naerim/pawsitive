import axios from 'axios'

export async  function fetchDogDetails(num:number) {
    const url:string = 'http://localhost:50000'
    return await axios
        .get(`${url}/api/v1/dog/${num}`)
        .then((res)=> res.data)
}
