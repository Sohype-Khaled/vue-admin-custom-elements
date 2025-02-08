(() => {
  const items = [
    {
      url: 'https://picsum.photos/id/1/200/300',
      thumbnail: 'https://picsum.photos/id/1/200/300',
      downloadUrl: 'https://picsum.photos/id/1/200/300',
      filename: 'image.jpg',
      type: 'image/jpeg',
      group: 'default',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam aspernatur cum debitis, dignissimos, ',
    },
    {
      url: 'https://picsum.photos/id/2/200/300',
      thumbnail: 'https://picsum.photos/id/2/200/300',
      downloadUrl: 'https://picsum.photos/id/2/200/300',
      filename: 'image.jpg',
      type: 'image/jpeg',
      group: 'default',
      caption: 'error et fugiat ipsam laboriosam, maxime molestiae nisi nulla optio pariatur placeat praesentium totam! Accusamus, laborum.',
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      downloadUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      filename: 'ElephantsDream',
      type: 'video/mp4',
      group: 'default',
      caption: 'By Blender Foundation',
    },
    {
      url: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Video',
      thumbnail: 'https://picsum.photos/id/5/200/300',
      downloadUrl: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Video',
      filename: 'video.mp4',
      type: 'video/mp4',
      group: 'default',
      caption: 'Lorem ipsum dolor sit amet, cum debitis, dignissimos, ',
    },
    {
      url: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Audio',
      thumbnail: '',
      downloadUrl: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Audio',
      filename: 'audio.mp3',
      type: 'audio/mpeg',
      group: 'default',
      caption: 'Lorem ipsum dolor sit amet, cum debitis, dignissimos, ',
    },
    {
      url: 'http://localhost:8000/media/invoice.pdf',
      thumbnail: '',
      downloadUrl: 'http://localhost:8000/media/invoice.pdf',
      filename: 'pdf.pdf',
      type: 'application/pdf',
      group: 'default',
      caption: 'Lorem ipsum dolor sit amet, cum debitis, dignissimos, ',
    }
  ]


  const container = document.getElementById('lightbox-container');
  for (const item of items) {
    const lightbox = document.createElement('light-box');
    lightbox.classList.add('image')
    lightbox.setAttribute('item', JSON.stringify(item));

    container.appendChild(lightbox);
  }

  const galleryContainer = document.getElementById('lightbox-gallery-container');

  const gallery = document.createElement('lightbox-gallery');
  gallery.setAttribute('items', JSON.stringify(items));

  galleryContainer.appendChild(gallery);
})()