export const isEmptyObject = (obj) => { // kiem tra 1 obj co rong hay khong
  for (let key in obj) {//for in : obj; for of : array
    if(obj.hasOwnProperty(key)) { // kiem tra obj co rong hay khong
      return false;
    }
  }
  return true;
}