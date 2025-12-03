import ProductRepository from "../../application/repository/ProductRepository"
import Product from "../../domain/entity/Product"
import DatabaseConnection from "../database/DatabaseConnection"

// SQLite-specific repository (no schema prefix)
export default class ProductRepositorySqlite implements ProductRepository {
    constructor(readonly connection: DatabaseConnection) {}

    async list(page: number, limit: number): Promise<{ products: Product[], pagination: any }> {
        const offset = (page - 1) * limit;
        const productsData = await this.connection.query(
            "select * from product limit ? offset ?",
            [limit, offset]
        )
        const products: Product[] = []
        for (const productData of productsData) {
            products.push(
                new Product(
                    productData.id_product,
                    productData.description,
                    parseFloat(productData.price),
                    productData.width,
                    productData.height,
                    productData.length,
                    parseFloat(productData.weight)
                )
            )
        }
        
        const [countData] = await this.connection.query("select count(*) as total from product", []);
        const totalItems = countData.total;
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

    async get(idProduct: number): Promise<Product> {
        const productsData = await this.connection.query(
            "select * from product where id_product = ?",
            [idProduct]
        )
        const productData = productsData[0]
        return new Product(
            productData.id_product,
            productData.description,
            parseFloat(productData.price),
            productData.width,
            productData.height,
            productData.length,
            parseFloat(productData.weight)
        )
    }
}
