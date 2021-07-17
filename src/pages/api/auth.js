import { sign } from 'jsonwebtoken'

export default async function handleRequests(req, res) {
    const secret = process.env.NEXT_PUBLIC_SECRET_KEY

    const { githubUser } = req.body
    const { method } = req

    switch(method) {
        case 'POST':
            const token = sign({
                isAuthenticated: true
            }, secret, {
                expiresIn: '2h'
            })

            return res.json({ res: githubUser, access: token})
        default: 
            return res.status(404).json({ msg: 'Operation not allowed! ;(' })
    }
}