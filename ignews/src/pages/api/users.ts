import {NextApiRequest, NextApiResponse } from 'next'
export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Diego'},
        { id: 2, name: 'Pedro'},
        { id: 3, name: 'Ricardo'},
    ]

    return response.json(users)
}