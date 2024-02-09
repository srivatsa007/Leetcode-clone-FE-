import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function runTests(userCode, testCases) {
    const results = [];

    try {
        // Wrap the user's code in a function to ensure it's in the global scope
        const wrappedCode = `
      ${userCode}
      //# sourceURL=userCode.js
    `;
        // Evaluate the wrapped code to define the function
        eval(wrappedCode);

        testCases.forEach(({ input, output }) => {
            // Call the user-provided function with the input
            const actualOutput = eval(input);
            const testResult = actualOutput === output ? "Pass" : "Fail";
            results.push({ input, expectedOutput: output, actualOutput, testResult });
        });

        return { success: true, results };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

function App() {
    const [questions, setQuestions] = useState([
        {
            prompt: "Write a function that returns the sum of two numbers.",
            functionName: "sum",
            exampleCode:
                "function sum(a, b) {\n  // Write your implementation here\n}",
            testCases: [
                { input: "sum(2, 3)", output: "5" },
                { input: "sum(-1, 5)", output: "4" },
            ],
        },
        {
            prompt: "Write a function that returns the square of a number.",
            functionName: "square",
            exampleCode:
                "function square(x) {\n  // Write your implementation here\n}",
            testCases: [
                { input: "square(4)", output: "16" },
                { input: "square(3)", output: "9" },
            ],
        },
        {
            prompt: "Write a function that checks if a number is even.",
            functionName: "isEven",
            exampleCode:
                "function isEven(num) {\n  // Write your implementation here\n}",
            testCases: [
                { input: "isEven(4)", output: "true" },
                { input: "isEven(3)", output: "false" },
            ],
        },
    ]);
    const [code, setCode] = useState("");
    const [testResults, setTestResults] = useState(null);

    const handleRunTests = () => {
        const results = questions.map(({ prompt, testCases, functionName }) => {
            return {
                question: prompt,
                testResults: runTests(code, testCases, functionName),
            };
        });
        setTestResults(results);
    };

    return (
        <div className="App">
            <h1>Code Tester</h1>
            <div>
                {questions.map(({ prompt, exampleCode }, index) => (
                    <div key={index}>
                        <h2>
                            Question {index + 1}: {prompt}
                        </h2>
                        <h3>Example Code:</h3>
                        <pre>{exampleCode}</pre>
                    </div>
                ))}
            </div>
            <AceEditor
                mode="javascript"
                theme="monokai"
                onChange={setCode}
                value={code}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="300px"
            />
            <button onClick={handleRunTests}>Run Tests</button>
            {testResults && (
                <div>
                    <h2>Test Results:</h2>
                    {testResults.map((result, index) => (
                        <div key={index}>
                            <h3>Question: {result.question}</h3>
                            {result.testResults.success ? (
                                <div>
                                    {result.testResults.results.map((testResult, idx) => (
                                        <div key={idx}>
                                            <div>Input: {testResult.input}</div>
                                            <div>Expected Output: {testResult.expectedOutput}</div>
                                            <div>Actual Output: {testResult.actualOutput}</div>
                                            <div>Result: {testResult.testResult}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>Test failed: {result.testResults.message}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
