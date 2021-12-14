export interface ClientIO {
    name: string
    id: string
    admin: boolean
}

export interface OrdersIO {
    id: number
    client: ClientIO
    value: number
}
