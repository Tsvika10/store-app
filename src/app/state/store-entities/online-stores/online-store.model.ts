
export interface OnlineStore {
  id: number;
  title: string;
  productCount: number;
}

export function createOnlineStore(title: string) {
  return {
  } as OnlineStore;
}
