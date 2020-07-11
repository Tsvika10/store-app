
export interface OnlineStore {
  id: number;
  title: string;
  productCount: number;
}

let id:number = 2;

export function createOnlineStore(title: string) {
  return {
    title: title,
    id: id++,
    productCount:0
  } as OnlineStore;
}
