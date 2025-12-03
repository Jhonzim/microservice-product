import Product from "../../domain/entity/Product";

export default interface ProductRepository {
	list (page: number, limit: number): Promise<{ products: Product[], pagination: any }>;
	get (idProduct: number): Promise<Product>;
}
