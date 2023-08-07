import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import { NumericFormat } from 'react-number-format';

const Products = () => {
    const { loading, data, get, del } = useHttp();
    const endPoint = 'products';

    useEffect(() => {
        get(endPoint);
    }, [])

    const getData = () => {
        get(endPoint);
    }

    const deleteData = (id) => {
        del(endPoint, id).then(() => {
            getData();
            toast.success('Submit success');
        });
    }

    return (
        <Fragment>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
                    <div className="relative overflow-x-auto justify-center py-12">
                        <div className="flex justify-between align-middle">
                            <h1 className="px-6 flex-auto title">Products</h1>
                            <div className="flex-auto text-right">
                                <Link to={'new'} className="rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">New Product</Link>
                            </div>
                        </div>

                        <table className="w-full text-sm text-left mt-10">
                            <thead className="text-xs uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created at
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!loading ? (data.map((element, index) => {
                                    return <tr key={index} className="bg-white border-b">
                                        <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                            {element.name}
                                        </td>
                                        <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                            <NumericFormat value={element.price.subunit} displayType={'text'} thousandSeparator={true} suffix={element.price.currency} />
                                        </td>
                                        <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                            {moment(element.created_at).format('DD/MM/YYYY')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`${element.id}/edit`} state={{ element }}>Edit</Link> | <a className="pointer" onClick={() => deleteData(element.id)}>Delete</a>
                                        </td>
                                    </tr>
                                })) : <></>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    )
};

export default Products;