import CsvPresenter from "../presenter/CsvPresenter";
import HttpServer from "./HttpServer";
import JsonPresenter from "../presenter/JsonPresenter";
import UsecaseFactory from "../factory/UsecaseFactory";

// interface adapter
export default class HttpController {

	constructor (httpServer: HttpServer, usecaseFactory: UsecaseFactory) {

		httpServer.on("get", "/products", async function (params: any, body: any, headers: any, query: any) {
			const contentType = headers["content-type"] || "application/json";
			const getProducts = usecaseFactory.createGetProducts(contentType);
			const page = query && query.page ? parseInt(query.page) : 1;
			const limit = query && query.limit ? parseInt(query.limit) : 10;
			const output = await getProducts.execute(page, limit);
			return output;
		});

		httpServer.on("get", "/products/:idProduct", async function (params: any, body: any, headers: any) {
			const getProduct = usecaseFactory.createGetProduct();
			const output = await getProduct.execute(params.idProduct);
			return output;
		});
	}
}
