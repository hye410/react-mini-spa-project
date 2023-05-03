import Data from './reservationInfo.json';

const AddedData = JSON.parse(sessionStorage.getItem('Data')) || Data;

export function FromData(id){
  return AddedData.find(info => info.id === Number(id));
}


export function FilterData(id){
  return AddedData.filter(info => info.id !== id)
}


