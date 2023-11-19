// RANI ZIDT HAD LIGNE LI TA7T HAD 'addEventListener' MAKANXI KI5DEM
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submitBtn").addEventListener('click', function() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;

        document.getElementById('errorName').textContent = '';
        document.getElementById('errorEmail').textContent = '';
        

        if (name === "" || email === "" || subject === "" || comment === "") {
            window.alert('Please make sure all fields are filled out.');
            return false;
        }
        
        /*
        let Error = false;
        if (name === "") {
            document.getElementById('errorName').textContent = 'Please enter your name.';
            Error = true;
        }

        if (email === "") {
            document.getElementById('errorEmail').textContent = 'Please enter your email.';
            Error = true;
        }
        return Error;
        */
            
    });
});
