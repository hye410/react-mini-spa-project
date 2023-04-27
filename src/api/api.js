import Data from './reservationInfo2.json';


export function FromData(id){
  return Data.find(info => info.id === Number(id));
}


export function FilterData(id){
  return Data.filter(info => info.id !== id)
}