import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../json/Gallery.json'; // Adjust the path to the actual location of your JSON file
import '../App.css'; // Make sure to import the CSS file

function Gallery() {
    return (
        <div>
            {/* Videos using iframe for YouTube Shorts */}
            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://res.cloudinary.com/duj4e3i6z/video/upload/v1729599970/video1_bpp0rp.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://res.cloudinary.com/duj4e3i6z/video/upload/v1729599865/video2_vsyt2w.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://res.cloudinary.com/duj4e3i6z/video/upload/v1729599767/video3_tvvp4d.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://res.cloudinary.com/duj4e3i6z/video/upload/v1729599738/video4_jegtei.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            {/* Image Gallery */}
            {images.map((image, index) => (
                <img
                    key={index}
                    className={image.className}
                    src={image.src}
                    alt={image.alt}
                />
            ))}
        </div>
    );
}

export default Gallery;
