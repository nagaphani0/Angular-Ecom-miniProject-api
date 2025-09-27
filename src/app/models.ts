export interface productResponse{ message:string,data:any[],result:boolean }

export interface productDataI{
  "productId":number,
  "productSku": string,
  "productName": string,
  "productPrice": number,
  "productShortName": string,
  "productDescription":  string,
  "createdDate": "2025-09-06T00:08:01.153",
  "deliveryTimeSpan": string,
  "categoryId": number,
  "productImageUrl": string,
  "categoryName": string
}
export interface catDataI {
  "categoryId": number,
  "categoryName": string,
  "parentCategoryId": number
}
export interface getCustomerDataI {
  "custId": 0,
  "name": string,
  "mobileNo": string,
  "password": string
}
export interface postCustomerDataI {
  "CustId": 0,
  "Name": string,
  "MobileNo": string,
  "Password": string
}

