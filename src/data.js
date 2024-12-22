export const API_KEY = "AIzaSyBF50v95lRYvdYPOMTlN3RaVB4uJg6ndr8";

export const valueConverter = (val) => {
if(val>=1000000){
return Math.floor(val/1000000)+"M";
} 
else if (val >= 1000){
return Math.floor(val/1000)+"K";
}
else{
    return val
}
}