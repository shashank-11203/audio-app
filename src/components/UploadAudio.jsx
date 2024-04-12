import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import Loader from './Loader';
import './uploadaudio.css';

const UploadAudio = () => {
    const [isFake, setIsFake] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    // const handleSubmit = async (event) => {
    //     event.preventDefault(); // Prevent the default form submission behavior

    //     const formData = new FormData(); // Create a FormData object

    //     // Get the selected file from the file input
    //     const file = event.target.audioFile.files[0];
    //     formData.append('audio', file); // Append the file to FormData with key 'audio'

    //     setLoading(true);
    //     try {
    //         const response = await fetch('http://127.0.0.1:5000/predict', {
    //             method: 'POST',
    //             body: formData
    //         });
    //         const responseData = await response.json();
    //         // console.log(responseData)

    //         setIsFake(responseData.result);
    //         setAudioUrl(URL.createObjectURL(file)); // Create object URL for the uploaded audio file

    //     } catch (error) {
    //         alert('format not supported aupload another audio file');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        const formData = new FormData(); // Create a FormData object
    
        // Get the selected file from the file input
        const file = event.target.audioFile.files[0];
        formData.append('audio', file); // Append the file to FormData with key 'audio'
    
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: formData
            });
            const responseData = await response.json();
            // console.log(responseData)
    
            setIsFake(responseData.result);
            setAudioUrl(URL.createObjectURL(file)); // Create object URL for the uploaded audio file
    
        } catch (error) {
            alert('format not supported, upload another audio file');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div>
            <h1>Is your audio real or Fake?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Select audio file:
                    <input type="file" name="audioFile" accept="audio/*" />
                </label>
                <button type="submit">Upload</button>
            </form>
            {loading ? ( 
                <Loader />
            ) : (
                <>
                    {isFake !== null && (
                        <div>
                            {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
                            <h2>Your uploaded audio file is {isFake}</h2>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default UploadAudio;
