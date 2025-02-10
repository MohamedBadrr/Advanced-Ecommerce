export type TLoading = "idle" | "pending" | "succeeded" | "failed" ;
export type TCategory = {
    id?: number;
    title: string;
    prefix: string;
    img: string;
  }
  export type TProduct = {
    id: number;
    title: string;
    cat_prefix: string;
    price: number;
    img: string;
    quantity?: number;
    max:number;
  }
