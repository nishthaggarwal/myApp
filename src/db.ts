import { Pool } from "pg";

export const getPersonById=async(pool:Pool,id:number)=>{
   return pool.connect().then(client=> client.query('select profile from person where id=$1',[id]).catch(error=>{
       console.log(`Client error:${error}`)

   })
   )

}