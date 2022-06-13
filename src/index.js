console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(`${imgUrl}`)
.then(resp => resp.json())
.then(x => {console.log(x.message)
    x.message.forEach(createDog)})
// .then(dog => dog.message.forEach(element => createDog(element)))

function createDog(input) {     
        let list=document.querySelector("#dog-breeds")
        let li =document.createElement("li")
        const img = document.createElement('img')
        img.scr=input
        console.log(input)
        debugger
        list.append(li,img)
  }