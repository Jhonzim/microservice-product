import pgp from "pg-promise";
import ProductRepository from "../../application/repository/ProductRepository";
import Product from "../../domain/entity/Product";
import DatabaseConnection from "../database/DatabaseConnection";

// interface adapters
export default class ProductRepositoryDatabase implements ProductRepository {

	constructor (readonly connection: DatabaseConnection) {
	}

	async list(page: number, limit: number): Promise<{ products: Product[], pagination: any }> {
		const offset = (page - 1) * limit;
		const productsData = await this.connection.query("select * from cccat11.product limit $1 offset $2", [limit, offset]);
		const products: Product[] = [];
		for (const productData of productsData) {
			products.push(new Product(productData.id_product, productData.description, parseFloat(productData.price), productData.width, productData.height, productData.length, parseFloat(productData.weight)));
		}
		const [countData] = await this.connection.query("select count(*) as total from cccat11.product", []);
		const totalItems = parseInt(countData.total);
		const totalPages = Math.ceil(totalItems / limit);
		return {
			products,
			pagination: {
				currentPage: page,
				totalPages,
				totalItems,
				itemsPerPage: limit,
				hasNextPage: page < totalPages,
				hasPreviousPage: page > 1
			}
		};
	}

	async get (idProduct: number) {
		const [productData] = await this.connection.query("select * from cccat11.product where id_product = $1", [idProduct]);
		return new Product(productData.id_product, productData.description, parseFloat(productData.price), productData.width, productData.height, productData.length, parseFloat(productData.weight));
	}

}
