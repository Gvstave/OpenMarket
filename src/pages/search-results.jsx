import { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Aside from '../features/search/aside';
import ProductCard from '../shared/ui/product-card';
import { productsList } from '../utils/products_list';
import Search from '../shared/ui/search';

export default function SearchResults() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get('q') ?? '';

    useEffect(() => {
        if (!queryParam.trim()) {
            navigate('/', { replace: true });
        }
    }, [navigate, queryParam]);

    const normalizedQuery = queryParam.trim().toLowerCase();
    const filteredProducts = useMemo(() => {
        if (!normalizedQuery) {
            return productsList;
        }

        return productsList.filter((product) => {
            const name = product.name?.toLowerCase() ?? '';
            const category = product.category?.toLowerCase() ?? '';
            const soldBy = product.soldBy?.toLowerCase() ?? '';

            return (
                name.includes(normalizedQuery) ||
                category.includes(normalizedQuery) ||
                soldBy.includes(normalizedQuery)
            );
        });
    }, [normalizedQuery]);

    return (
        <div className="text-primary-background antialiased min-h-screen flex flex-col justify-between">
            <main className="flex flex-col lg:flex-row gap-8 grow w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div>
                    <Aside />
                </div>
                <section className="space-y-12 right-0 mr-0">
                        <Search className={"sticky top-0 md:hidden py-8"} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-full">
                            {filteredProducts.length === 0 ? (
                                <p className="text-secondary text-center h-full w-full">No results found.</p>
                            ) : (
                                filteredProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} image={product.images} />
                                ))
                            )}
                        </div>
                </section>
            </main>
        </div>
    )
}

