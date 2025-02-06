export interface Product {
    _id: string;
    _type: "product";
    name: string;
    image?: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };
    price: number;
    description?: string;
    slug: {
        _type: "slug";
    };


}