import { useState } from "react";
import HttpService from "../services/HttpService";

export default function useHttp() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    return {
        loading,
        data,

        get: async (endPoint) => {
            setLoading(true);
            const responseData = await HttpService.get(endPoint);
            if (responseData) {
                setData(responseData);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        },

        getById: async (endPoint, id) => {
            setLoading(true);
            const responseData = await HttpService.getById(endPoint, id);
            if (responseData) {
                setData(responseData);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        },

        create: async (endPoint, payload) => {
            const responseData = await HttpService.create(endPoint, payload);
            if (responseData) {

            }
        },

        update: async (endPoint, id, payload) => {
            const responseData = await HttpService.update(endPoint, id, payload);
            if (responseData) {
                setData(responseData);
            }
        },

        del: async (endPoint, id) => {
            const responseData = await HttpService.delete(endPoint, id);
            if (responseData) {

            }
        }
    }
}