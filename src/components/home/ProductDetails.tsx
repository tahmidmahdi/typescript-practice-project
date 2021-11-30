import useAsync from 'hooks/useAsync';
import { IProduct } from 'Models/types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useParams } from 'react-router';
import ProductService from 'services/ProductService';
import imageUrlParser from 'utils/imageUrlParser';

interface IParams {
    id: string;
}

const ProductDetails = () => {
    const { id } = useParams<IParams>();
    const { data, isLoading, isSuccess, isError, error } = useAsync<IProduct>(
        () => ProductService.getProductByID(id)
    );
    console.log(data, 'product details');
    const { name, image, description, price } = (data || {}) as IProduct;
    return (
        <div className="product_details_component my-3">
            <Container>
                <div className="wrapper bg-white rounded border">
                    {isLoading && <h3>Loading...</h3>}
                    {isSuccess && (
                        <Row>
                            <Col md={4}>
                                <img
                                    className="w-100"
                                    src={imageUrlParser(image)}
                                    alt={name}
                                />
                            </Col>
                            <Col md={8}>
                                <h3 className="mb-3">{name}</h3>
                                <h1>{price}</h1>
                                <button className="btn btn-primary">
                                    <AiOutlineShoppingCart />
                                    Add To Cart
                                </button>
                                <p className="mt-5">{description}</p>
                            </Col>
                        </Row>
                    )}
                    {isError && <h1>{error}</h1>}
                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;
