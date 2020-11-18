

export const reverseGeoCoding = async(latitude,longitude)=>{
   const response =  await  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=??`)
    if(!response.ok){
        return 'House No 705';
    }
 const responseData = response.json();
 return responseData;

}