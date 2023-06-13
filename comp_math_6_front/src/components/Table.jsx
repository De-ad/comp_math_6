import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectError, selectLoading, selectResult} from "../store/slices/resultSlice";

const Table = () => {
    const result = useSelector(selectResult);
    const isLoading = useSelector(selectLoading);
    const hasError = useSelector(selectError);

    if(Object.keys(result).length === 0){
        return null;
    }


    return (
        <div>
            {isLoading ? (
                <div> loading ... </div>
            ) : hasError ? (
                <div>error</div>
            ) : (
                <div className="bg-white rounded-lg flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <tbody>
                                        <tr>
                                        <td> i</td>
                                        {result.xarray.map((item, index) => {
                                            return <td>{index}</td>
                                        })}

                                        </tr>
                                        <tr>
                                            <td> x</td>
                                            {result.xarray.map((item) => {
                                                return <td>{item}</td>
                                            })}

                                        </tr>
                                        <tr>
                                            <td> y euler</td>
                                            {result.eulerY.map((item) => {
                                                return <td>{item}</td>
                                            })}

                                        </tr>
                                        <tr>
                                            <td> y modified euler</td>
                                            {result.modifiedEulerY.map((item) => {
                                                return <td>{item}</td>
                                            })}

                                        </tr>
                                        <tr>
                                            <td> y miln</td>
                                            {result.milnY.map((item) => {
                                                return <td>{item}</td>
                                            })}

                                        </tr>
                                        <tr>
                                            <td>accurate</td>
                                            {result.accurate.map((item) => {
                                                return <td>{item}</td>
                                            })}

                                        </tr>



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;