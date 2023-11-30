const checkDb =  (email:string | null | undefined) => {
    fetch(`/api/check-db/?email=${email}`, {
        method:'GET'
    }).then((res) => res.json()).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
}

export default checkDb