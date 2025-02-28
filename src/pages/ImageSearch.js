import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';
import * as math from 'mathjs';

const ImageSearch = () => {
    const [file, setFile] = useState(null);
    const [extractedText, setExtractedText] = useState('');
    const [solution, setSolution] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setExtractedText('');
        setSolution('');
        setError('');
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select an image file.');
            return;
        }

        setLoading(true);
        setError('');
        setExtractedText('Processing image...');
        setSolution('');

        try {
            const worker = await createWorker('eng');
            const ret = await worker.recognize(file);
            const text = ret.data.text;
            setExtractedText(text);

            const mathExpression = extractMathExpression(text);
            if (mathExpression) {
                try {
                    const result = math.evaluate(mathExpression);
                    setSolution(`Solution: ${result}`);
                } catch (err) {
                    setSolution('Error: Failed to evaluate expression.');
                }
            } else {
                setSolution('No valid mathematical expression found.');
            }

            await worker.terminate();
        } catch (err) {
            console.error('OCR Error:', err);
            setError('Failed to process image.');
        } finally {
            setLoading(false);
        }
    };

    const extractMathExpression = (text) => {
        const mathRegex = /[\d\s+\-*/()^]+/g;
        const matches = text.match(mathRegex);
        if (matches) {
            return matches.join('').replace(/\s+/g, '');
        }
        return null;
    };

    return (
        <div className="aimath-container">
            <h1 style={{ marginBottom: '10px' }}>Upload image to solve</h1>
            <div style={styles.content}>
                <input type="file" onChange={handleFileChange} accept="image/*" style={styles.fileInput} />
                <button onClick={handleUpload} disabled={loading} style={styles.uploadButton}>
                    {loading ? 'Processing...' : 'Extract & Solve'}
                </button>
                {error && <p style={styles.error}>{error}</p>}
                {extractedText && (
                    <div style={styles.response}>
                        <p style={styles.responseText}><strong>Extracted Text:</strong></p>
                        <pre style={styles.pre}>{extractedText}</pre>
                        {solution && (
                            <>
                                <p style={styles.solutionText}><strong>{solution}</strong></p>
                                {solution !== 'Error: Failed to evaluate expression.' && solution !== 'No valid mathematical expression found.' && (
                                    <p style={styles.explanationText}>Explanation: The mathematical expression {extractMathExpression(extractedText)} was detected and evaluated.</p>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    content: {
        margin: '20px auto',
        padding: '30px',
        background: 'rgba(255, 255, 255, 0.15)',
        width: '50%',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        borderRadius: '15px',
        textAlign: 'center',
    },
    fileInput: {
        margin: '10px 0',
        width: '100%',
        padding: '10px',
        borderRadius: '25px',
        border: 'none',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'white'
    },
    uploadButton: {
        background: 'linear-gradient(90deg, #ff8c00, #ff0080)',
        color: 'white',
        padding: '12px 25px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '25px',
        fontSize: '1.1rem',
        fontWeight: '600',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        marginTop: '20px',
        width: 'auto'
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
    response: {
        marginTop: '20px',
        padding: '20px',
        borderRadius: '15px',
        wordWrap: 'break-word',
        background: 'rgba(255, 255, 255, 0.1)',
        textAlign: 'left'
    },
    responseText: {
        fontWeight: 'bold',
        color: 'white'
    },
    pre: {
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        color: 'white'
    },
    solutionText: {
        fontWeight: 'bold',
        marginTop: '10px',
        color: 'white'
    },
    explanationText: {
        marginTop: '5px',
        fontStyle: 'italic',
        color: '#ccc',
    },
};

export default ImageSearch;