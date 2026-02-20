export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
    state: string;
    token: string;
    createdAt: Date;
    cart?: CartItem[];
    comments: Comment[]
}

type CartItem = {
    bookId: number;
    quantity: number;
}

export interface UserState {
    id: number | null;
    name: string | null;
    token: string;
    totalCount: number;
    cart?: CartItem[];
}
