interface car {
    model:string;
    colour:string;
}
interface animal {
    name:string;
    coour:string;
}
interface bird {
    name:string;
    canFly:boolean;
}
let allInOne:car|animal|bird={
    model:"2024",
    name:"Aliza",
    canFly:false
}
console.log (allInOne)


interface hospital {
    name:string;
    patientCount:number;
    isDoctorEducated:boolean;
}
interface Marquee {
    location:string;
    seatsCount:number;
    isMarqueeLooksGood:boolean;
}
interface ShoppingMall {
    name:string;
    shops:number;
    parkingAvailable:boolean;
} 
let tripleCategeory:hospital|Marquee|ShoppingMall={
    location:"Governor House",
    shops:50,
    parkingAvailable:true,
    name:"Sir Syed Hospital",
}
console.log(tripleCategeory)


