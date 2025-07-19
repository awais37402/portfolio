import React, { useState, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import './VideoPortfolio.css';

// Import video assets
import aeV1 from '../assets/v1.mp4';
import aeV2 from '../assets/v2.mp4';
import aeV3 from '../assets/v3.mp4';
import aeThumb1 from '../assets/ae-thumb1.png';
import aeThumb2 from '../assets/ae-thumb2.jpg';
import aeThumb3 from '../assets/ae-thumb3.jpg';

const VideoPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});

  // Video data
  const videos = [
    {
      id: 'ae1',
      title: "Motion Graphics Reel",
      description: "Professional motion graphics showcase featuring modern animations and transitions.",
      thumbnail: aeThumb1,
      videoUrl: aeV1,
      year: 2023,
      type: "after-effects"
    },
    {
      id: 'ae2',
      title: "Product Animation",
      description: "3D product reveal with smooth camera movements and material effects.",
      thumbnail: aeThumb2,
      videoUrl: aeV2,
      year: 2023,
      type: "after-effects"
    },
    {
      id: 'ae3',
      title: "Corporate Identity",
      description: "Elegant logo animation combining 2D and 3D elements.",
      thumbnail: aeThumb3,
      videoUrl: aeV3,
      year: 2022,
      type: "after-effects"
    }
  ];

  // Open lightbox with selected video
  const openLightbox = (video) => {
    setSelectedVideo(video);
    setIsLightboxOpen(true);
    setLoadingStates(prev => ({ ...prev, [video.id]: true }));
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Handle video loaded
  const handleVideoLoaded = (videoId) => {
    setLoadingStates(prev => ({ ...prev, [videoId]: false }));
  };

  // Handle video error
  const handleVideoError = (videoId) => {
    setLoadingStates(prev => ({ ...prev, [videoId]: 'error' }));
  };

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isLightboxOpen && e.target.classList.contains('video-lightbox')) {
        closeLightbox();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLightboxOpen]);

  return (
    <section className="video-portfolio-section" id="video-portfolio">
      <div className="section-header">
        <h2 className="section-title">
          Motion <span className="highlight">Designs</span>
        </h2>
      </div>

      <div className="video-grid">
        {videos.map(video => (
          <div 
            key={video.id} 
            className="video-card"
            onClick={() => openLightbox(video)}
          >
            <div className="thumbnail-container">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                loading="lazy"
                className="video-thumbnail"
              />
              <div className="play-overlay">
                <FaPlay className="play-icon" />
              </div>
              <span className="ae-badge">After Effects</span>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <span className="video-year">{video.year}</span>
            </div>
          </div>
        ))}
      </div>

      {isLightboxOpen && selectedVideo && (
        <div className="video-lightbox">
          <div 
            className="lightbox-content"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="close-lightbox"
              onClick={closeLightbox}
              aria-label="Close video"
            >
              <FaTimes />
            </button>
            
            <div className="video-player-container">
              {loadingStates[selectedVideo.id] === true && (
                <div className="video-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading video...</p>
                </div>
              )}
              
              {loadingStates[selectedVideo.id] === 'error' ? (
                <div className="video-error">
                  <p>Failed to load video</p>
                </div>
              ) : (
                <video 
                  controls 
                  autoPlay
                  playsInline
                  src={typeof selectedVideo.videoUrl === 'string' ? 
                       selectedVideo.videoUrl : 
                       selectedVideo.videoUrl.default}
                  className="local-video-player"
                  onLoadedData={() => handleVideoLoaded(selectedVideo.id)}
                  onError={() => handleVideoError(selectedVideo.id)}
                />
              )}
            </div>
            
            <div className="lightbox-info">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
              <div className="video-meta">
                <span>{selectedVideo.year}</span>
                <span className="ae-tag">After Effects</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoPortfolio;