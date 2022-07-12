type BrushType = 'oil' | 'pencil' | 'crayon' | 'watercolor' | 'airbrush' | 'marker' | 'brush';

export interface Picture {
    title: string;
    year: number;
    price: number;
    salePrice?: number;
    onsale: boolean;
    author: string;
    brush: BrushType;
    description: string;
    amount: number;
    color: string;
    url: string;
}
