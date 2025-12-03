import Presenter from "../../infra/presenter/Presenter";
import ProductRepository from "../repository/ProductRepository";
import RepositoryFactory from "../factory/RepositoryFactory";

export default class GetProducts {
	productRepository: ProductRepository;

	constructor (repositoryFactory: RepositoryFactory, readonly presenter: Presenter) {
		this.productRepository = repositoryFactory.createProductRepository();
	}

	async execute (page: number = 1, limit: number = 10): Promise<any> {
		const { products, pagination } = await this.productRepository.list(page, limit);
		const output: Output[] = [];
		for (const product of products) {
			output.push({
				idProduct: product.idProduct,
				description: product.description,
				price: product.price
			});
		}
		return {
			data: this.presenter.present(output),
			pagination
		};
	}
}

type Output = {
	idProduct: number,
	description: string,
	price: number
}
