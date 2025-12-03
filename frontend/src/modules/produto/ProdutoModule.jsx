// src/modules/produto/ProdutoModule.jsx
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../components/ui/Pagination';

function ProdutoModule() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`http://localhost:3001/products?page=${page}&limit=${limit}`, {
          signal: controller.signal,
          headers: { 'Accept': 'application/json' },
        });
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || `Erro ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
            if (data.data && data.pagination) {
                setProducts(data.data);
                setPagination(data.pagination);
            } else {
                setProducts(Array.isArray(data) ? data : data?.products ?? []);
                setPagination(null);
            }
        }
      } catch (err) {
        if (isMounted && err.name !== 'AbortError') setError('Não foi possível carregar os produtos.');
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [page, limit]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage.toString(), limit: limit.toString() });
    window.scrollTo(0, 0);
  };

  const handleLimitChange = (newLimit) => {
    setSearchParams({ page: '1', limit: newLimit.toString() });
    window.scrollTo(0, 0);
  };

  if (loading) return <div className="space-y-4"><p>Carregando produtos…</p></div>;
  if (error) return <div className="space-y-4"><p className="text-red-600">{error}</p></div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Produtos</h1>
      {products.length === 0 ? (
        <p className="text-sm text-foreground/80">Nenhum produto encontrado.</p>
      ) : (
        <>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-border rounded-md overflow-hidden">
                <thead className="bg-muted/50">
                <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium w-24">ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Descrição</th>
                    <th className="px-4 py-2 text-right text-sm font-medium w-40">Preço</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-border">
                {products.map((p, idx) => (
                    <tr key={p.idProduct ?? idx} className="odd:bg-muted/30">
                    <td className="px-4 py-2 text-sm">{p.idProduct ?? '-'}</td>
                    <td className="px-4 py-2 text-sm break-words">{p.description ?? 'Produto'}</td>
                    <td className="px-4 py-2 text-sm text-right whitespace-nowrap">
                        {p.price != null
                        ? Number(p.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        : '-'}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            {pagination && (
                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    onPageChange={handlePageChange}
                    itemsPerPage={pagination.itemsPerPage}
                    onItemsPerPageChange={handleLimitChange}
                    totalItems={pagination.totalItems}
                />
            )}
        </>
      )}
    </div>
  );
}

export default ProdutoModule;
