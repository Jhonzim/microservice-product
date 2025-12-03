import React from 'react';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
  itemsPerPageOptions = [10, 20, 50]
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
      <div className="text-sm text-gray-500">
        Mostrando {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)} a {Math.min(currentPage * itemsPerPage, totalItems)} de {totalItems} produtos
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Itens por página:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {itemsPerPageOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 hover:bg-gray-50"
        >
          Anterior
        </button>
        
        <span className="text-sm">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 hover:bg-gray-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
