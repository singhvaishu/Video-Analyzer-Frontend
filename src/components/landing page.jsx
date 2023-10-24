import React, { useState } from 'react';
import './landing page.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addResult } from '../slice/result';

function LandingPage() {
    const [videoLink, setVideoLink] = useState('');
    const [progress, setProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(false);
    const dispatch = useDispatch()

    const handleVideoLinkChange = (event) => {
        setVideoLink(event.target.value);
    };

    const handleAnalysisSubmit = async (event) => {
        event.preventDefault();


        setShowProgress(true);

        try {

            const response = await axios.post('https://vedioanalyzer.onrender.com/analyze', { link: videoLink });

            console.log(response);


            let progressValue = 0;
            const progressInterval = setInterval(() => {
                progressValue += 10;
                setProgress(progressValue);

                if (progressValue >= 100) {
                    clearInterval(progressInterval);

                    setShowProgress(false);

                    if (response.data) {
                        console.log(response.data);
                        dispatch(addResult(response.data))
                    }
                }
            }, 1000);
        } catch (error) {
            console.error('Error analyzing video:', error);
            setShowProgress(false);

        }
    };

    return (
        <div>
            <h1>Discover your earning <br />potential</h1>
            <p>Turn your YouTube expertise into a lucrative income <br />through resource sharing</p>
            <form onSubmit={handleAnalysisSubmit}>
                <input type="text" id="videoLink" placeholder="Enter Youtube Video Link" value={videoLink} onChange={handleVideoLinkChange} required />
                <button type="submit">Analyze</button>
            </form>

            {showProgress && (
                <div>
                    <p>Analysis in Progress:</p>
                    <progress max={100} value={progress}></progress>
                </div>
            )}
        </div>
    );
}

export default LandingPage;
