import React, { useState, useEffect } from 'react';
import { FaPlay, FaTimes, FaFilter, FaExpand, FaCompress } from 'react-icons/fa';
import './VideoPortfolio.css';

// Import your After Effects videos from assets
import aeV1 from '../assets/v1.mp4';
import aeV2 from '../assets/v2.mp4';
import aeV3 from '../assets/v3.mp4';
import aeThumb1 from '../assets/ae-thumb1.png';
import aeThumb2 from '../assets/ae-thumb2.jpg';
import aeThumb3 from '../assets/ae-thumb3.jpg';

const VideoPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Video data including imported After Effects projects
  const videos = [
    {
        id: 1,
        title: "Cosmic Adventure",
        description: "A sci-fi short film with advanced VFX",
        thumbnail: "https://via.placeholder.com/800x450", // You should replace this with your actual thumbnail
        videoUrl: require('../assets/cosmic-adventure.mp4'), // Assuming you have this file in assets
        tags: ["short-film", "vfx"],
        year: 2023,
        type: "video" // You might want to change this to match your other local videos
      },
    {
      id: 'ae1',
      title: "Motion Graphics Reel 2023",
      description: "Showcase of my best After Effects animations",
      thumbnail: aeThumb1,
      videoUrl: aeV1,
      tags: ["motion-graphics", "after-effects"],
      year: 2023,
      type: "after-effects"
    },
    {
      id: 'ae2',
      title: "Product Animation",
      description: "3D product reveal animation",
      thumbnail: aeThumb2,
      videoUrl: aeV2,
      tags: ["animation", "after-effects"],
      year: 2023,
      type: "after-effects"
    },
    {
      id: 'ae3',
      title: "Logo Reveal",
      description: "Corporate logo animation",
      thumbnail: aeThumb3,
      videoUrl: aeV3,
      tags: ["logo-animation", "after-effects"],
      year: 2022,
      type: "after-effects"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'short-film', label: 'Short Films' },
    { id: 'after-effects', label: 'After Effects' }
  ];

  const filteredVideos = activeFilter === 'all' 
    ? videos 
    : videos.filter(video => 
        activeFilter === 'after-effects' 
          ? video.type === 'after-effects'
          : video.tags.includes(activeFilter)
      );

  const openLightbox = (video) => {
    setSelectedVideo(video);
    setIsLightboxOpen(true);
    setIsFullscreen(false);
    setLoadingStates(prev => ({ ...prev, [video.id]: true }));
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedVideo(null);
    setIsFullscreen(false);
  };

  const handleVideoLoaded = (videoId) => {
    setLoadingStates(prev => ({ ...prev, [videoId]: false }));
  };

  const handleVideoError = (videoId) => {
    setLoadingStates(prev => ({ ...prev, [videoId]: 'error' }));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Close lightbox when clicking outside content
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isLightboxOpen && e.target.classList.contains('video-lightbox')) {
        closeLightbox();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLightboxOpen]);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          closeLightbox();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, isFullscreen]);

  return (
    <section className="video-portfolio-section" id="video-portfolio">
      <div className="section-header">
        <h2>Cinematic Storytelling & Motion Design</h2>
        <p className="subtitle">Professional video editing and After Effects animations</p>
      </div>

      {/* Desktop Filters */}
      <div className="filter-buttons desktop-filters">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Mobile Filter Dropdown */}
      <div className="mobile-filter-container">
        <button 
          className="mobile-filter-toggle"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <FaFilter /> Filter: {filters.find(f => f.id === activeFilter)?.label}
        </button>
        {showMobileFilters && (
          <div className="mobile-filter-dropdown">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`mobile-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setShowMobileFilters(false);
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        {filteredVideos.map(video => (
          <div 
            key={video.id} 
            className={`video-card ${video.type === 'after-effects' ? 'ae-card' : ''}`}
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
              {video.type === 'after-effects' && (
                <span className="ae-badge">After Effects</span>
              )}
              <span className="video-tag">{video.tags[0]}</span>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <span className="video-year">{video.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Lightbox */}
      {isLightboxOpen && selectedVideo && (
        <div className={`video-lightbox active ${isFullscreen ? 'fullscreen' : ''}`}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
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
                  Loading video...
                </div>
              )}
              
              {loadingStates[selectedVideo.id] === 'error' ? (
                <div className="video-error">
                  Failed to load video. Please try again later.
                </div>
              ) : selectedVideo.videoUrl.includes('youtube') ? (
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => handleVideoLoaded(selectedVideo.id)}
                />
              ) : (
                <video 
                  controls 
                  autoPlay 
                  src={selectedVideo.videoUrl}
                  className="local-video-player"
                  onLoadedData={() => handleVideoLoaded(selectedVideo.id)}
                  onError={() => handleVideoError(selectedVideo.id)}
                />
              )}
            </div>
            {!isFullscreen && (
              <div className="lightbox-info">
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
                <div className="video-meta">
                  <span>{selectedVideo.year}</span>
                  {selectedVideo.type === 'after-effects' && (
                    <span className="ae-tag">After Effects</span>
                  )}
                  <span>{selectedVideo.tags.join(' • ')}</span>
                </div>
              </div>
            )}
            <button 
              className="fullscreen-toggle"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoPortfolio;