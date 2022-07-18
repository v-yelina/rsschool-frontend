export type BrushType = 'oil' | 'pencil' | 'crayon' | 'watercolor' | 'airbrush' | 'marker' | 'brush';

export type ColorType =
    | 'black'
    | 'yellow'
    | 'rainbow'
    | 'red'
    | 'blue'
    | 'orange'
    | 'grey'
    | 'brown'
    | 'green'
    | 'purple'
    | 'rose';

export type AuthorType = 'Valiantsina' | 'Veranika' | 'Vasilisa';

export interface Picture {
    title: string;
    year: number;
    price: number;
    salePrice?: number;
    onsale: boolean;
    author: AuthorType;
    brush: BrushType;
    description: string;
    amount: number;
    color: ColorType;
    url: string;
}
