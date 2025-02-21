(() => {
  const dropZoneInputs = [
    {
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
      target: {
        app_label: "blogs",
        model_name: "Article",
        object_id: 10
      },
      collectionName: "thumb",
    },

    {
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
    }
  ]
  const container = document.getElementById('dropzone-container');
  for (const item of dropZoneInputs) {
    const dropzone = document.createElement('input-dropzone');

    dropzone.style.marginBottom = '20px';
    dropzone.setAttribute('options', JSON.stringify(item));

    container.appendChild(dropzone);
  }
})()


