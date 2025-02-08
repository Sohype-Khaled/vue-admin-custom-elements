(() => {
  const mediaDialogs = [
    {
      title: "Upload Files",
      props: {
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
          model_name: "News",
          object_id: 31
        },
        collectionName: "thumb",
      },
      editable: true,
      withUpload: true,
      deletable: true,
      allowOrdering: true,
      downloadable: true
    },
    {
      title: "Preview Only Files",
      props: {
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
          model_name: "News",
          object_id: 31
        },
        collectionName: "thumb",
      },
      allowOrdering: true,
      deletable: true,
      editable: true,
      downloadable: true
    }
  ]
  const container = document.getElementById('media-dialog-container');
  for (const item of mediaDialogs) {
    const mediaDialog = document.createElement('media-dialog-toggle');
    mediaDialog.setAttribute('options', JSON.stringify(item.props));
    mediaDialog.setAttribute('editable', item.editable ?? false);
    mediaDialog.setAttribute('deletable', item.deletable ?? false);
    mediaDialog.setAttribute('allow-ordering', item.allowOrdering ?? false);
    mediaDialog.setAttribute('with-upload', item.withUpload ?? false);
    mediaDialog.setAttribute('downloadable', item.downloadable ?? false);

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'text-green-400');
    button.textContent = item.title;
    mediaDialog.appendChild(button);
    container.appendChild(mediaDialog);
  }
})()


