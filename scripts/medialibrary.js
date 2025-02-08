(() => {
  const container = document.getElementById('media-library-collection');

  const data = {
    options: {
      "baseUrl": "http://localhost:8000",
      auth: {
        "type": "hmac",
        "headers": {
          "X-User-HMAC": "OrabG+1HfNMDtflj8/SluAqoYB3b/ebtTR65fIrwtqk=",
          "X-User-Email": "sohype.mop@gmail.com"
        },
      },
      "bucket": "nawahmedia",
      "displayName": "Thumbnail",
      "target": {"app_label": "blogs", "model_name": "News", "object_id": 31},
      "collection-name": "thumb",
    },
    allowOrdering: true,
    deletable: true,
    editable: true,
    downloadable: true,
  };

  const collection = document.createElement('media-collection');
  collection.setAttribute('options', JSON.stringify(data.options));
  collection.setAttribute('editable', data.editable);
  collection.setAttribute('deletable', data.deletable);
  collection.setAttribute('allow-ordering', data.allowOrdering);
  collection.setAttribute('downloadable', data.downloadable);

  container.appendChild(collection)

})()