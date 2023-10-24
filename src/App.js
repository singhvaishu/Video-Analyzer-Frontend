// import React from 'react';
// import './App.css';
// import Navbar from "./components/Navbar"
// import LandingPage from './components/landing page';
// import Result from './components/Result';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <LandingPage />
//       <Result />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Navbar from "./components/Navbar";
// import LandingPage from './components/landing page';
// import Result from './components/Result';

// function App() {
//   // Define videoData or fetch it from an API or another source
//   const videoData = {
//     subscriberCount: 100000,
//     likes: 5000,
//     comments: 2000,
//     views: 10000,
//     videoThumbnail: 'thumbnail-url',
//     videoName: 'Your Video Title',
//     uploadedOn: 'oct22,2023'
//   };

//   // Define topVideos or fetch it from an API or another source
//   const topVideos = [
//     // Add objects with top video details
//   ];

//   return (
//     <div className="App">
//       <Navbar />
//       <LandingPage />
//       <Result videoData={videoData} topVideos={topVideos} />
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from './components/landing page';
import Result from './components/Result';
import CallbackPopup from './components/Request callback';

function App() {
  const [isCallbackPopupOpen, setCallbackPopupOpen] = useState(false);
  const [isEmailNotificationOpen, setEmailNotificationOpen] = useState(false);

  const [videoData, setVideoData] = useState({
    subscriberCount: 100000,
    likes: 5000,
    comments: 2000,
    views: 10000,
    videoThumbnail: 'thumbnail-url',
    videoName: 'Your Video Title',
    uploadedOn: 'oct22,2023'
  });

  const [topVideos, setTopVideos] = useState([
    // Add objects with top video details
  ]);

  const handleCallbackRequest = (formData) => {
    // Implement the logic to send the callback request
    // You can use the formData, e.g., formData.name and formData.mobile
    // Send a request to your backend to handle the callback request
    // After submitting, you can set isCallbackPopupOpen to false to close the popup
    setCallbackPopupOpen(false);
    // You can also set isEmailNotificationOpen to true to show the email notification
    setEmailNotificationOpen(true);
  };

  return (
    <div className="App">
      <Navbar openCallbackPopup={() => setCallbackPopupOpen(true)} />
      <LandingPage />
      <Result videoData={videoData} topVideos={topVideos} />
      <CallbackPopup
        isOpen={isCallbackPopupOpen}
        onClose={() => setCallbackPopupOpen(false)}
        handleCallbackRequest={handleCallbackRequest}
      />
      {/* You can also include the EmailNotification component here */}
    </div>
  );
}
export default App;