function ReservationInfo({info}){

  const maskingName = (name) => {
    if(name.length <= 2){     
      return name.replace(name.substring(1),"*");
    };
    return name[0] + "*".repeat(name.substring(1,name.length -1).length) + name[name.length -1] ;
  };

  const maskingNumber = (num) => {
    return num.substring(0,3) + "*".repeat(4) + num.substring(7,11) 
  };

  const CheckingThePassword = () => {
    let myPassword = prompt('비밀번호를 입력하세요. 기본 비밀번호는 전화번호 뒤 4자리입니다.');
    if(myPassword === info.password){
      window.location = `/post/${info.id}`
    }else{
      alert('비밀번호를 다시 확인해주세요.')
    }
  }

  return(
      <tr>
        <td>{info.id}</td>
        <td onClick={() => CheckingThePassword()}>
            {maskingName(info.name)}
        </td>
        <td>{maskingNumber(info.phone)}</td>
      </tr>    
  )
}

export default ReservationInfo;