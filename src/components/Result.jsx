
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faEye, faTrophy } from '@fortawesome/free-solid-svg-icons';

import './Result.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

function ResultPage({ videoData, topVideos }) {
    const [resultData, setResultData] = useState()
    const { data } = useSelector((state) => state.analysisResult)
    const [videoDataAll, setVideoDataAll] = useState()
    const getVideoDataHandle = async () => {
        const { data } = await axios
            .get('https://vedioanalyzer.onrender.com/Api/get-video', {
                headers: { "Content-type": "multipart/form-date" },
            })
            .then((response) => response)
            .catch((error) => console.log(error))
        console.log(data, 'videodata')
        setVideoDataAll(data && data);
    }
    useEffect(() => {
        getVideoDataHandle()
    }, [])
    useEffect(() => {
        console.log(data, 'data')
        setResultData(data && data)
    }, [data])


    if (!videoData) {
        return <div>Loading...</div>;
    }

    const likes = resultData?.data?.likes;
    const comments = resultData?.data?.comments;
    const subscriberCount = resultData?.data?.subscriberCount;
    const views = resultData?.data?.views;

    // Calculate earnings using the specified formula
    const earnings = Math.min(subscriberCount, views) + 10 * comments + 5 * likes;

    // Calculate video rank based on earnings 
    const rank = getVideoRank(earnings);

    function getVideoRank(earnings) {

        if (earnings >= 1000) {
            return 'Gold';
        } else if (earnings >= 500) {
            return 'Silver';
        } else {
            return 'Bronze';
        }
    }
    function handleButtonClick() {

        alert('Button clicked!');
    }

    return (
        <div>
            {resultData && resultData.data && (
                <>
                    <h2>Analysis Result</h2>

                    <div className="result-container">
                        {/* Flex 1 */}

                        <div className="flex-1">
                            <div className="video-rank" >
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faTrophy} /> Top earner video</p>



                                <div className="thumbnail-container">
                                    <img src={resultData?.data?.thumbnail && resultData?.data?.thumbnail} alt="Video Thumbnail" />

                                    <p className="small-text">Uploaded On: {resultData?.data?.uploadedOn && resultData?.data?.uploadedOn}</p>
                                </div>
                            </div>

                            <div className="video-details-white">
                                <p>{resultData?.data?.title && resultData?.data?.title}</p>
                                <p><FontAwesomeIcon icon={faThumbsUp} />{resultData?.data?.likes && resultData?.data?.likes} </p>
                                <p><FontAwesomeIcon icon={faComment} />  {resultData?.data?.comments && resultData?.data?.comments}</p>
                                <p><FontAwesomeIcon icon={faEye} />  {resultData?.data?.views && resultData?.data?.views}</p>
                            </div>
                        </div>

                        <div className="flex-2">
                            <div className="card">
                                <div className="card-header">

                                </div>
                                <p className="earnings-value">₹ {earnings}</p>
                                <div className="card-body">
                                    <button className="button" onClick={handleButtonClick}>Check How</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 
            <p>Video Rank: {rank}</p> */}

                    <h2>Other Videos Potentials</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Title</th>
                                <th>Thumbnail</th>
                                <th>Views</th>
                                <th>Likes</th>
                                <th>Comments</th>
                                <th>Uploaded On</th>
                                <th>Estimated Earnings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {videoDataAll?.map((video, index) => (
                                <tr key={index} style={{ color: '#fff' }}>
                                    <td>{index + 1}</td>
                                    <td>{video.title}</td>
                                    <td>
                                        <img src={video.thumbnail} alt="Video Thumbnail" />
                                    </td>
                                    <td>{video.views}</td>
                                    <td>{video.likes}</td>
                                    <td>{video.comments}</td>
                                    <td>{video.uploadedOn}</td>
                                    <td>₹ {Math.min(video.subscriberCount, video.views) + 5 * video.likes + 10 * video.comments}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )};
        </div>
    );
}

export default ResultPage;
