export  interface Item {
    name: string
    email: string
    phone: string
    date: string
    id:number
}

export interface IaddTask {
    fetchData:() =>void
}