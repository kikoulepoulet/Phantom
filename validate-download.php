// Step 1: Get the token from the URL
$token = $_GET['token'];

// Step 2: Call Linkvertise API to validate the token
function validateToken($token) {
    $linkvertise_api_url = "https://api.linkvertise.com/api/v1/link/validate-token";
    $response = file_get_contents($linkvertise_api_url . '?token=' . $token);
    $result = json_decode($response, true);

    return $result['status'] == 'valid';  // Check if the token is valid
}

// Step 3: Perform validation
if (validateToken($token)) {
    // Token is valid, redirect to the correct file
    header('Location: /https://phantom-navy-one.vercel.app/');
} else {
    // Token is invalid, redirect to a dummy file
    header('Location: /dummy-file.zip');
}
