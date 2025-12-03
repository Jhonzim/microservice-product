import DatabaseRepositoryFactory from "../../src/infra/factory/DatabaseRepositoryFactory"
import GetProducts from "../../src/application/usecase/GetProducts"
import JsonPresenter from "../../src/infra/presenter/JsonPresenter"
import SqliteAdapter from "../../src/infra/database/SqliteAdapter"
import { initSqliteSchema } from "../../src/infra/database/sqlite_init"

// main
test("Deve listar os produtos com paginação padrão (SQLite)", async function () {
    const connection = new SqliteAdapter()
    await connection.connect("./catalog_test.sqlite")
    await initSqliteSchema(connection)
    const repositoryFactory = new DatabaseRepositoryFactory(connection)
    const getProducts = new GetProducts(repositoryFactory, new JsonPresenter())
    const output = await getProducts.execute()
    expect(output.data).toHaveLength(10) // Default limit is 10
    expect(output.pagination.currentPage).toBe(1)
    expect(output.pagination.itemsPerPage).toBe(10)
    expect(output.pagination.totalItems).toBe(100)
    await connection.close()
})

test("Deve listar os produtos da página 2 (SQLite)", async function () {
    const connection = new SqliteAdapter()
    await connection.connect("./catalog_test.sqlite")
    await initSqliteSchema(connection)
    const repositoryFactory = new DatabaseRepositoryFactory(connection)
    const getProducts = new GetProducts(repositoryFactory, new JsonPresenter())
    const output = await getProducts.execute(2, 10)
    expect(output.data).toHaveLength(10)
    expect(output.data[0].idProduct).toBe(11)
    expect(output.pagination.currentPage).toBe(2)
    await connection.close()
})

test("Deve listar os produtos com limite customizado (SQLite)", async function () {
    const connection = new SqliteAdapter()
    await connection.connect("./catalog_test.sqlite")
    await initSqliteSchema(connection)
    const repositoryFactory = new DatabaseRepositoryFactory(connection)
    const getProducts = new GetProducts(repositoryFactory, new JsonPresenter())
    const output = await getProducts.execute(1, 20)
    expect(output.data).toHaveLength(20)
    expect(output.pagination.itemsPerPage).toBe(20)
    await connection.close()
})
