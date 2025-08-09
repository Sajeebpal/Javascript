console.log('<-----BMI calculator------->');

let weight = 62;
let height = 1.79;

const bmi = (weight / (height^2)).toFixed(2);

if (bmi>=18.5) {
    if(bmi>=18.5 && bmi<=24.99){
        console.log(bmi, 'You are normal man');

    }
    else if(bmi>=25){
        console.log(bmi, 'You are over weight');
        
    }
}
else{
    console.log(bmi, "You are under weight");
    
}