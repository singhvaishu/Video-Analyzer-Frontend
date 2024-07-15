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
                    dispatch(addResult(response.data));
                }
            }
        }, 1000);
    } catch (error) {
        console.error('Error analyzing video:', error);
        console.error('Error details:', error.response ? error.response.data : error.message);

        setShowProgress(false);
    }
};

