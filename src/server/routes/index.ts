import{Router}from 'express'
import{Pool} from 'pg'

export function createRouter(pool:Pool):Router{
    const router=Router()
    router.get('/api/person/:id',(req,res)=>{
        console.log(req.path)
        console.log(req.params)
        res.sendStatus(200)
    })
    return router
}