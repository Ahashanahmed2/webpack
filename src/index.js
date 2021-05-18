// import func from  './text.js';
import './index.html';


// let xhr = new XMLHttpRequest()

// xhr.open('get','https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange =function(e){
// if(xhr.readyState == 4){
//     if(xhr.status == 200){
//         let res = JSON.parse(xhr.response)
//         res.forEach(r => {console.log(r.address.geo.lat);
            
//         });
//     }   else{
//         console.log(xhr.status);
//     }
// }
// }

// xhr.send()

function getXml(url,callback){
const xhr = new XMLHttpRequest()
xhr.open('get',url)

xhr.onreadystatechange =function(e){
    if(xhr.readyState == 4){
        if(xhr.status == 20){
            let res = JSON.parse(xhr.response)
          callback(res)
                
            }
         else{
           console.log(xhr.status);
        }
    }
}

}

xhr.send()
// xhr.onreadystatechange =function(e){
//     if(xhr.readyState == 4){
//         if(xhr.status ==200){
//          let rs = JSON.parse(xhr.response)
//          callback(null,rs)
//         }else{
//           console.log(xhr.status)
//         }
//     }
//     }
getXml('https://jsonplaceholder.typicode.com/users',(err)=>{
    if(err){console.log(err)}
    
})

