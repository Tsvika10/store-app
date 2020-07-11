import { Product } from '../state/products/product.model';
import { OnlineStore } from '../state/online-stores/online-store.model';

export function setMock(){    
    sessionStorage.setItem('mockProcucts', JSON.stringify(
        [
            {
                id: 0,
                title: 'desk',
                storeId:0,
                price: 200,
                deliveryDate: new Date('8/1/2020'),
                received:false
            },
            {
                id: 1,
                title: 'chair',
                storeId:1,
                price: 50,
                deliveryDate: new Date('9/2/2020'),
                received:false
            },
            {
                id: 2,
                title: 'sofa',
                storeId:1,
                price: 500,
                deliveryDate: new Date('2/2/2020'),
                received:true
            }
        ] as Product[]
    ));
    
    sessionStorage.setItem('mockStores', JSON.stringify(
        [
            {
                id: 0,
                title: 'Amazon',
                productCount: 1
            },
            {
                id: 1,
                title: 'Ebay',
                productCount: 1
            }
        ] as OnlineStore[]
    ));


}
