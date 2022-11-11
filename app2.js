let name = ["ayesha", "javeria", "hamid","waqar","saba"];
for (let i = 0; i < name.length; i++) {

name[i] = "welcom" + name[i];
console.log(name);

}

let arr  = {
    model: "Golaf",
    make: "voikaswaga",
    year: 1999,
    color: "black",

};
    arr.model = "bmw";

let arrkys = Object.keys(arr);
console.log(arrkys);

for (let key of Object.keys(arr)) {
   console.log(key);
    
}


for (let key of Object.values(arr)) {
    console.log(key);
     
 }
 
for (let i = 0;  i < arrkys.length; i++) {
    console.log(arrkys[i] + ":" + arr[arrkys[i]]);
     
 }
 let arrkys1 = Object.entries(arr);
 console.log(arr);


 let groups = [["martin", "danial", "keith"],["margot", "marina","ali"],["helan", "jonah", "sambi"]];
 for (let i = 0; i < groups.length; i++) {
    let matche = 0;
    

    for (let j = 0;  j < groups[i].length; j++) {
        if(groups[i][j].startsWith("m")){
            matche++;
        } else{
            continue;
        }
        if(matche === 2){
            console.log("the names starting with m");
            console.log(groups[i]);
            break;
        }
        




        
    }    
 }

let step = 3;
for (let index = 0; index < 1000; index += step) {
                if(index > 10){
                    break;
                }
                console.log(index);
    
}


        const myArray = [1, 5,7];
        for(el in myArray){

            console.log(Number(el));
            el =Number(el) + 5;
            console.log(el);
        }
        console.log(myArray)
             function addTowNumber( x, y){
                        let c =  x + y;
                    return  c + " hello";
             }

             let resultArr = [];
             for (let i = 0; i < 10; i++) {
                let result = addTowNumber(i, 2/i);
                let arr = resultArr.push(result);
                
                
             }

                console.log(resultArr);




                function promis1(){
                    return new Promise(function(resolve, reject) {
                        setTimeout(() =>{
                             const erro =false;
                            if(!erro){
                                console.log("Even number")
                                resolve();
                            }else{
                                console.log("Odd number");
                                reject();
                            }
                        }, 200);
                    })
                }

            promis1().then(function(){
                console.log("the problem is resolved");

            }).catch(function(){
                console.log("rejected");
            })







































