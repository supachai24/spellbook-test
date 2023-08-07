import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Products from "../pages/Products";
import Product from "../pages/Product";
import NewProduct from "../pages/NewProduct";
import NotFound from "../pages/NotFound";

const AppRouters = () => (
    <Fragment>
        <Routes>
            <Route path="products" exact element={<Products />} />
            <Route path="products/new" exact element={<NewProduct />} />
            <Route path="products/:productId/edit" exact element={<Product />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Fragment>
);

export default AppRouters;