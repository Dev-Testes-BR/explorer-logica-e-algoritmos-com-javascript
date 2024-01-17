// class Patient {
//   constructor(name, age, weight, height) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//     this.height = height;
//   }
// }

const Patient = function(name, age, weight, height){
  this.name = name
  this.age = age
  this.weight = weight
  this.height = height
}

const patients = [
  new Patient("Luiz", 20, 100, 190),
  new Patient("Alexandra", 27, 70, 170),
  new Patient("Carlos", 42, 90, 180)
]

let patientNames = []

for (let patient of patients) {
  patientNames.push(patient.name)
}

alert(patientNames)
