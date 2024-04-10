import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Importing jwtDecode directly
import GoogleMap from './GoogleMap';

function App() {
    const [user, setUser] = useState(null); // Corrected typo and provided initial state

    useEffect(() => {
        if (window.google && window.google.accounts) {
            window.google.accounts.id.initialize({
                client_id: "781916799246-m8jvn31g5vhkh7ttj97e20ib037ud32a.apps.googleusercontent.com",
                callback: handleCallbackResponse 
            });
        
            window.google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "large" }
            );
            
        } else {
            console.error("Google API not loaded.");
        }
    }, []);

    function handleCallbackResponse(response) {
        const idToken = response.credential;
        const decodedToken = jwtDecode(idToken); // Using jwtDecode instead of jwt_decode
        console.log("Decoded ID Token:", decodedToken);
        setUser(decodedToken);
        document.getElementById("signInDiv").hidden= true;
    }
    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden= false;


    }

    return (
        <div className="App">
            <div id="signInDiv"></div>
            {user && Object.keys(user).length !== 0 && (
    <button onClick={handleSignOut}>Sign Out</button>
)}

            
            {user && (
                <div>
                    <img src={user.picture} alt="User Picture" />
                    <h3>{user.name}</h3>
                </div>
            )}
            <GoogleMap />
        </div>
    );
}

export default App;
