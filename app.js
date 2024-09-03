// const os = require('os');

// // info about current user

// const user=os.userInfo()
// //console.log(user);



// // method returns the system uptime in seconds

// console.log(`the system uptime is ${os.uptime()} seconds`);


// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalmem: os.totalmem(),
//     freemem: os.freemem(),
// }

// console.log(currentOs);



// const path = require('path');
// console.log(path.sep);

// const filepath = path.join('./content','sub','test.tzt');
// console.log(filepath);

// const base = path.basename(filepath);
// console.log(base);

// const absolute = path.resolve(__dirname,'content','sub','text.tzt')

// console.log(absolute);

// const { readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/sub/first.txt','utf8');
// const second = readFileSync('./content/sub/second.txt','utf8');

// console.log(first,second);

// writeFileSync('./content/sub/result.txt',
//     `Here is the result  : ${first} and ${second}`,
//      { flag : 'a'}
// );


// const { readFile, writeFile} = require('fs');

// readFile('./content/sub/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     const first = result;
//     readFile('./content/sub/second.txt','utf8',(err,result)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     const second = result;
//     writeFile(
//         './content/sub/result.txt',
//         `Here is the result : ${first}, ${second}`,
//         (err,result)=>{
//             if(err)
//             {
//                 console.log(err);
//                 return;
//             }

//             console.log(result);
//         }
//     )

//     })
// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
//    if(req.url==='/')
//    {
//     res.end('welcome to our web page');
//    }
//    if(req.url==='/about')
//    {
//      res.end('here is our about page ')
//    }
//    res.end(`
//        <h1>oops! page not found</h1>
//        <a href="/">back to home page </a>
//     `)

// })

// server.listen(5000);


const _ = require('lodash')

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);