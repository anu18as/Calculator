// let car ={
//     price : 1000000,
//     color:"blue",
//     model:2020,
//     seatingCapacity:4
//   }

  // function marriage(jewellery,food,makeup,photoshoot){
  //   this.jewellery=jewellery
  //   this.food=food
  //   this.makeup=makeup
  //   this.photoshoot=photoshoot
  // }
  // var marriage1=new marriage("joy","taj","loreal","happyphoto")
  // console.log(marriage1.jewellery)

  // for(const key in marriage1){
  //   console.log(key+":"+marriage1[key]);
  // }

//   var bike= new Object()
//   bike.name="yamaha"
//   bike.model="rx135"
//   bike.color="blue"
//   bike.price=45000

//   console.log(bike)


  // function employe(empid,empname,salary,designation){
  //   this.empid=empid
  //   this.empname=empname
  //   this.salary=salary
  //   this.designation=designation
  // }
  // var employe1=new employe(8346,"arun",50000,"test engineer")
  // console.log(employe1)


  // for(const key in employe1 ){
  //   console.log(key+":"+employe1[key]);
  // }

  // function vechiles(car,bike,auto,truck){
  //   this.car=car
  //   this.bike=bike
  //   this.auto=auto
  //   this.truck=truck
  // }
  // var vechile1=new vechiles("fourWheeler","twowheeler","threewheeler","sixwheeler")
  // console.log(vechile1)


  // for(const key in vechile1 ){
  //   console.log(key+":"+vechile1[key]);
  // }


  // function studentdetails(name,branch,usn,sem){
  //   this.name=name
  //   this.branch=branch
  //   this.usn=usn
  //   this.sem=sem
  // }
  // var student1=new studentdetails("meghana","ece","1nkece101",8)
  // console.log(student1)


  // for(const key in student1 ){
  //   console.log(key+":"+student1[key]);
  // }


  
//   function  mobile(whatsapp,google,youtube,gallery){
//     this.whatsapp=whatsapp
//     this.google=google
//     this.youtube=youtube
//     this.gallery=gallery
//   }
//   var mobile1=new mobile("text","searchinformation","videos","images")
//   console.log(mobile1)


//   for(const key in mobile1){
//     console.log(key+":"+mobile1[key]);
//   }


  
//   function bank(name,ifsc,loc){
//     this.name=name
//     this.ifsc=ifsc
//     this.loc=loc
    
//   }
//   var bank1 =new bank("SBI","1234sbi","hebbal")
//   console.log(bank)


//   for(const key in bank1){
//     console.log(key+":"+bank1[key]);
//   }
  
  
//   var employe= new Object()
//   employe.name="smith"
//   employe.id=12345
//   employe.salary=20000
//   employe.designation="salesman"

//   console.log(employe)

//  student= new Object()
//  student.name="alice"
//  student.id=12345
//  student.branch="cs"
//  student.sem=8

//   console.log(student)


//   vechile= new Object()
//   vechile.twowheeler="bike"
//   vechile.threewheeler="auto"
//   vechile.fourwheeler="car"
//   vechile.sixwheeler="truck"
 
//    console.log(vechile)


  
  // mobile= new Object()
  // mobile.whatsapp="text"
  // mobile.google="searchinformation"
  // mobile.youtube="videos"
  // mobile.gallery="images"
 
  //  console.log(mobile) 


  //  bank= new Object()
  //  bank.name="SBI"
  //  bank.ifsc="93022sbi"
  //  bank.loc="hebbal"
   
  
  //   console.log(bank) 

  // fetch("https://api.github.com/users")
  // .then(res=>res.json())
  // .then(data =>console.log(data))

  // var x=10
  // var y=12
  // var sum=x+y
  // console.log("the sum  of "+ x + "and" + y +"is" + sum)
  // console.log(`the sum of ${x} and  ${y} is ${sum}`)


//   let kfc={
//     burger:"zinger box meal",
//     coolDrink :"400ml",
//     fries:"fries",
//     chickenwings:12,


//   }
//   console.log(kfc)


//   var converted=JSON.stringify(kfc)
//   console.log(converted)

//   var normal=JSON.parse(converted)
//   console.log(normal)



// fetch("https://api.github.com/users")
// .then(res =>res.json())
// .then(data=>{
//   var tbody =document.querySelector("tbody")
//   data.map((user)=>{
//     var tr=document.createElement("tr")
//     tr.innerHTML =`
//         <td>${user.id}</td>
//         <td>${user.login}</td>
//         <td><img height="200px" src="${user.avatar_url}" alt=""></td>
//     `
//     tbody.appendChild(tr)
//   })
// })


fetch("https://jsionplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
  var tr =document.querySelector("tbody")
  data.map((user)=>{
    var tr=document.createElement("tr")
    tr.innerHTML =`
         <td>${user.id}</td>
         <td>${user.login}</td>
         <td><img height="200px" src="${user.avatar_url}" alt=""></td>
        `    
     tbody.appendChild(tr)
  })
})