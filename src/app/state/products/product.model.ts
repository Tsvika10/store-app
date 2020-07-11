
export interface Product {
  id: number;
  title: string;
  storeId:number;
  price: number;
  received: boolean;
  deliveryDate: Date;
}

export let id:number = 3;

export function createProduct(params: Partial<Product>) {
  return {
  } as Product;
}
