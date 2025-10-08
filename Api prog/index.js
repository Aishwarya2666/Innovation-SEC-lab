const myData  =[
    {
        name:"Aishu",
        image:"https://www.shutterstock.com/image-photo/view-earth-star-galaxy-sunrise-260nw-2474441791.jpg"
    },
    {
        name:"jo",
        image:"https://www.shutterstock.com/image-photo/view-earth-star-galaxy-sunrise-260nw-2474441791.jpg"
    },
]
const con = document.getElementById('container');
for(let i=0;i<myData.length;i++)
    con.innerHTML+= `
<h1>${myData[i].name}</h1>
<img src=${myData[i].image} height="100px"/>`



fetch('https://fakestoreapi.com/products/1')
            .then(res=>            
            res.json()
            )
            .then(data=> {
            for(let i=0;i<myData.length;i++)
            con.innerHTML+= `
            <h1>${myData[i].name}</h1>
            <img src=${myData[i].image} height="100px"/>`
        })