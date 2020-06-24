
  generateMap = () => {
   fetch(`/pairs/route`)
   .then((response) => { 
     return response.json() 
   }).then((data) => {
     console.log(data)
   })
 }

 generateMap()



