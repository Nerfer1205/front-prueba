export type Product = {
    id: string;           // Cambia de 'Int' a 'string' si es necesario un formato específico
    name: string;         // Coincide con el nombre original
    description?: string; // Campo opcional (corresponde a 'description')
    price: number;        // Corresponde a 'price'
    image?: string;   // Renombrar 'image' a 'image_url' y hacerlo opcional
};

export type ProductFormData = {
    name: string;
    description?: string;
    price: number;
    image?: string;
};
