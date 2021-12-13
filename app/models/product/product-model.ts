/*interface IProductModel {
  id: number;
  Name: string;
  Code: string;
  tags?: string[];
  price: number;
  description: string;
  imageUrl: string;
}*/
export class ProductModel //implements IProductModel
{
    id: number = 0;
    Name: string = "";
    Code: string = "";
    tags?: string[] = [];
    price: number = 0;
    description: string = "";
    imageUrl: string = "";

    constructor(obj: any = null)
    {
        if(obj != null)
        {
            Object.assign(this, obj);
        }
    }
    private item = new ProductModel(
    {
        id: "1", 
        Name: "DoeJohn", 
        Code: "D21ds12x", 
        tags: ["cust2dsa12dsa"], 
        last_name: "", 
        price: 102,
        description: "Idasn2x2#,email@email.com",
        imageUrl: "https://avatars.githubusercontent.com/u/359395?v=4",
    });
    public get one(): ProductModel {
        return this.item;
    }
    public get all(): ProductModel[] {
        return [
        this.item
        ];
    }
}
/*
@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}*/
/*
export const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: 'A competetive phone having awesome functionalities'
  }
];*/
