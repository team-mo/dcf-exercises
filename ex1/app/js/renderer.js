$('.da').on(
    'dragover',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)

$('.da').on(
    'dragenter',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)

$('.da').on('drop', function (e) {
      e.preventDefault()
      // get the img file from the drop event
      var file = e.originalEvent.dataTransfer.files[0];

       // Only process image files.
      if (file.type.match('image.*')) {
            // display the uploaded img
            $('#img-box').attr('src', file.path);
      } else {
            // display a broken img in the future
            $('#img-box').attr('src', './img/not-img.png');
      }

      // display the img meta data
      $('#fileName').text('Name: ' + file.name);
      $('#fileModified').text('Last Modified: ' + file.lastModifiedDate.toLocaleDateString());
      $('#fileType').text('Type: ' + file.type);
      $('#fileSize').text('Size: ' + Math.round(file.size / Math.pow(1024,2)) + 'MB');
})

/*Add an on click event for image*/
$('.flip-container').on('click', function (e) {
  e.preventDefault()
  if ($(this).hasClass('click')) { 
      $(this).removeClass('click')
  } else {
      $(this).addClass('click')
  }
})

/*
Create visual feedback on the drag and drop feature
*/
$('.da').on('dragenter dragleave', function (e) {
  e.preventDefault()
  if ($(this).hasClass('da-hover')) { 
      $(this).removeClass('da-hover')
  } else {
      $(this).addClass('da-hover')
  }
})
