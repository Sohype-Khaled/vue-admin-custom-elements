(() => {
    const data = {
        baseUrl: "http://localhost:8000",
        chunkSize: 5242880,
        isPrivate: false,
        auth: {
            type: "hmac",
            headers: {
                "X-User-HMAC": "OrabG+1HfNMDtflj8/SluAqoYB3b/ebtTR65fIrwtqk=",
                "X-User-Email": "sohype.mop@gmail.com"
            },
        },
        bucket: "nawahmedia",
        displayName: "Thumbnail",
        collectionName: "thumb",
    };
    const container = document.getElementById('btn-upload-container');
    const btnUpload = document.createElement('btn-upload');


    btnUpload.setAttribute('options', JSON.stringify(data));
    btnUpload.setAttribute('teleport-target', '#upload-target');

    container.appendChild(btnUpload);
})()