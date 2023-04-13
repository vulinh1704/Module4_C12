declare class ProductService {
    constructor();
    findAll: () => Promise<{
        name: string;
        price: number;
        image: string;
        quantity: number;
    }[]>;
    save: (product: any) => Promise<string>;
}
declare const _default: ProductService;
export default _default;
