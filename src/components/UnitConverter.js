/*
 *Author: van
 *Date: 2025-01-31 14:31:37
 *LastEditTime: 2025-02-02 16:15:43
 *LastEditors: van
 *Description: 
 *FilePath: \PCB学习\my-website\src\components\UnitConverter.js
 *
 */
import React, { useState } from 'react';

function UnitConverter({ unit1, unit2, conversionFactor }) {
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState(unit1);
    const [toUnit, setToUnit] = useState(unit2);
    const [result, setResult] = useState('');

    const convertUnits = () => {
        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            setResult('Invalid input');
            return;
        }

        let convertedValue;
        if (fromUnit === unit1 && toUnit === unit2) {
            convertedValue = value * conversionFactor;
        } else if (fromUnit === unit2 && toUnit === unit1) {
            convertedValue = value / conversionFactor;
        } else {
            convertedValue = value; // 如果单位相同，直接返回原值
        }

        setResult(`${value} ${fromUnit} is ${convertedValue.toFixed(2)} ${toUnit}`);
    };

    return (
        <div className="container mt-5 fadeIn">
            <div className="card border">
                <div className="card-body">
                    <h5 className="card-title text-center mb-4">Unit Converter</h5>
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="请输入数值"
                                className="form-control"
                            />
                        </div>
                        <div className="col">
                            <select
                                value={fromUnit}
                                onChange={(e) => setFromUnit(e.target.value)}
                                className="form-select"
                            >
                                <option value={unit1}>{unit1}</option>
                                <option value={unit2}>{unit2}</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <span className="fs-5">to</span>
                        </div>
                        <div className="col">
                            <select
                                value={toUnit}
                                onChange={(e) => setToUnit(e.target.value)}
                                className="form-select"
                            >
                                <option value={unit1}>{unit1}</option>
                                <option value={unit2}>{unit2}</option>
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={convertUnits}
                        className="btn btn-primary w-100 mb-3"
                    >
                        转换
                    </button>
                    {result && (
                        <div className="alert alert-success text-center">
                            {result}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UnitConverter;