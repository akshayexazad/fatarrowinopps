class Student{
    static i =0;
    constructor(name,age,phonenumber,boardmarks){
        Student.i=Student.i+1;
        this.name= name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.boardmarks=boardmarks
    }
    CheckEligible(){
        if(this.boardmarks>40){
            return ()=>{
                return true;
            }
        }
    }
    setPlacementAge(MinPlacementage){
        console.log(this)
        return (minmarks)=>{
            if(this.boardmarks>minmarks && this.age>MinPlacementage){
                console.log(this.name+"is ready for placement")
            }else{
                console.log(this.name+"is not ready for placement") 
            }
        }
    
    }
}
let akshay = new Student('akshay',26,99999999,30);
let amit = new Student('amit',26,99999999,40);
let aadi = new Student('aadi',26,99999999,45);
console.log(aadi.setPlacementAge(18)(30)) 
let sonu = new Student('sonu',26,99999999,30);
let ravi = new Student('ravi',26,99999999,41);
console.log(Student.i);
