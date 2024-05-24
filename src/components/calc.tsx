import React, { useState } from "react";
import axios from "axios";
import "../App.css";

// Define interface for the data sent to the backend
interface CalculationData {
  num1: number;
  num2: number;
  operation: string;
}

const Calc: React.FC = () => {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [operation, setOperation] = useState<string>("add");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    try {
      // Prepare calculation data
      const data: CalculationData = {
        num1: parseFloat(num1.toString()), // Ensure numeric value
        num2: parseFloat(num2.toString()), // Ensure numeric value
        operation,
      };

      // Send calculation request to backend
      const response = await axios.post<{ result: number }>(
        "http://127.0.0.1:5000/api/calculate",
        data
      );

      // Update result and clear error
      setResult(response.data.result);
      setError(null);
    } catch (err: any) {
      // Handle errors
      setError(err.response ? err.response.data.error : "An error occurred");
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="inputs-container">
        {/* Input fields for number 1, number 2, and operation */}
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Number 1"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Number 2"
        />
        {/* Button to trigger the calculation */}
        <button className="a" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
      {/* Display result if available */}
      {result !== null && (
        <div className="result-container">
          <h2>Result: {result}</h2>
        </div>
      )}
      {/* Display error message if present */}
      {error && (
        <div style={{ color: "red" }}>
          <h2>Error: {error}</h2>
        </div>
      )}
    </div>
  );
};

export default Calc;
