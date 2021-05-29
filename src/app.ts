import express from 'express';
import{Product} from './product';

const app=express();
const port=3000;
app.use(express.json());//adding a piece of middleware


const products=[
    {id:1,title:'bat'},
    {id:2,title:'badminton'},
    {id:3,title:'ball',},
];

app.get('/',(req,res)=>{
    res.send(ptoclient);
   });

let ptoclient=getProducts();

app.get('/api/product',(req,res)=>{
    res.send(products);
})

app.get('/api/product/:id',(req,res)=>{
  const product=  products.find(c => c.id === parseInt(req.params.id));
  if(!product) res.status(404).send('The product not found');//404
  res.send(product);
})
//while using database this would be done with it
app.post('api/products',(req,res)=>{
  const product = {
      id: products.length+1,
      title:req.body.title,

  };
  
  products.push(product);
  res.send(product);
})


function getProducts(){
    let p=new Product();
    p.Id="p1";
    p.Price=200;
    p.Title="Bat";
    return p;
}

app.listen(port, ()=> {
   console.log('server is running on 3000');
})