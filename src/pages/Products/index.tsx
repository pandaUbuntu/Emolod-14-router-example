import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Layout from "../Layout";
import { createProduct, getAllProducts } from "../../store/slices/productsSlice";

const Products = () => {
    const dispatch = useAppDispatch();

    const { products, isLoading, error } = useAppSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const handleCreateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newProduct = {
            title: formData.get('title') as string,
            price: Number(formData.get('price')),
            description: formData.get('description') as string,
            category: formData.get('category') as string,
            image: formData.get('image') as string
        };

        console.log('Creating product with data:', newProduct);
        const result = dispatch(createProduct(newProduct));

        console.log('Create product result:', result);
    };

    return (
        <Layout title="Наші товари">
            {isLoading && <p>Завантаження...</p>}
            {error && <p style={{ color: 'red' }}>Помилка: {error}</p>}

            <form onSubmit={handleCreateProduct} style={{ marginBottom: '20px' }}>
                {/* Форма для створення нового товару */}
                <div>
                    <div><input type="text" name="title" placeholder="Назва товару" required /></div>
                    <div><input type="number" name="price" placeholder="Ціна" required /></div>
                    <div><input type="text" name="description" placeholder="Опис" required /></div>
                    <div><select name="category" required>
                        <option value="">Виберіть категорію</option>
                        <option value="electronics">Електроніка</option>
                        <option value="clothing">Одяг</option>
                        <option value="books">Книги</option>
                    </select></div>
                    <div><input type="text" name="image" placeholder="URL зображення" required /></div>
                </div>
                <button type="submit">Додати товар</button>
            </form>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p><strong>${product.price}</strong></p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Products;
