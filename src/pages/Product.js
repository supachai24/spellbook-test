import React, { Fragment, useState, useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from "react-router-dom";

const Product = () => {
    let { productId } = useParams();
    const { data, getById, update, del } = useHttp();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price_subunit, setPriceSubunit] = useState('');
    const [price_currency, setPriceCurrency] = useState('');
    const navigate = useNavigate();
    const endPoint = 'products';
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        getById(endPoint, productId);
    }, [])

    useEffect(() => {
        if (!!data) {
            setName(data?.name);
            setDescription(data.description);
            setPriceSubunit(data.price?.subunit);
            setPriceCurrency(data.price?.currency);
        }
    }, [data])

    const validate = (data) => {
        const errors = {};

        if (!data.name?.trim()) {
            errors.name = 'Product name is required';
        }

        if (!data?.price_subunit) {
            errors.price_subunit = 'Price subunit is required';
        }

        if (!data?.price_currency?.trim()) {
            errors.price_currency = 'Price curency is required';
        }

        return errors;
    }

    const postData = () => {
        const data = {
            name,
            description,
            price_subunit,
            price_currency,
        }

        const errors = validate(data);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            update(endPoint, productId, data).then(() => {
                toast.success('Submit success');
            });
        }
    }

    const deleteData = (id) => {
        del(endPoint, id).then(() => {
            toast.success('Submit success');
            setTimeout(() => {
                navigate('/products', { replace: true })
            }, 1000);
        });
    }

    return (
        <Fragment>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <div className="flex justify-between" style={{ alignItems: 'center' }}>
                                <h1 className="flex-auto title">Products</h1>
                                <div className="flex-auto text-right">
                                    <Link to={'/products'} className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Back</Link>
                                </div>
                            </div>
                            <form className="space-y-6 mt-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Product Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={name || ''}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    {errors.name && <p className="text-danger">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                            name="description"
                                            id="description"
                                            cols="30"
                                            rows="3"
                                            value={description || ''}
                                            onChange={(e) => setDescription(e.target.value)}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="price_subunit" className="block text-sm font-medium leading-6 text-gray-900">
                                        Price Subunit
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="price_subunit"
                                            name="price_subunit"
                                            type="text"
                                            required
                                            value={price_subunit || ''}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                            onChange={(e) => setPriceSubunit(e.target.value)}
                                        />
                                    </div>
                                    {errors.price_subunit && <p className="text-danger">{errors.price_subunit}</p>}
                                </div>
                                <div>
                                    <label htmlFor="price_currency" className="block text-sm font-medium leading-6 text-gray-900">
                                        Price Currency
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="price_currency"
                                            name="price_currency"
                                            type="text"
                                            required
                                            value={price_currency || ''}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                            onChange={(e) => setPriceCurrency(e.target.value)}
                                        />
                                    </div>
                                    {errors.price_currency && <p className="text-danger">{errors.price_currency}</p>}
                                </div>

                                <div className="text-right">
                                    <button
                                        type="button"
                                        className="rounded-md bg-indigo-600 mx-2 px-6 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={postData}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-md bg-red-600 px-6 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                        onClick={() => deleteData(productId)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    )
};

export default Product;