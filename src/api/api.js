import Data from './reservationInfo2.json';


export function FromData(id){
  return Data.find(info => info.id === Number(id));
}


export function FilterData(id){
  return Data.filter(info => info.id !== id)
}

export function AddedData(newinfo){
  Data.push(newinfo);
  return Data;
}



// console.log(AddedData(newInfo))
// console.log(Data)