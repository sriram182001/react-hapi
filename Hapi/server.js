const Hapi=require('hapi');
const server=new Hapi.Server();
server.connection({port:8080,host:'localhost',routes:{cors:true}})

const data=[
    {id:1,name:"jim",age:24},
    {id:2,name:"halpret",age:25}
]
server.route({
    path:'/',
    method:'GET',
    handler:(request,reply)=>{
        reply(data)
    }
})
server.start((err)=>{
    if(err){console.log(err);}
    console.log(`server running at ${server.info.uri}`)
})