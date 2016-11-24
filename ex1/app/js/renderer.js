$('.front').on(
    'dragover',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)

$('.front').on(
    'dragenter',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)

$(".front").on('drop', function (e) {
      e.preventDefault()
      // get the img file from the drop event
      var file = e.originalEvent.dataTransfer.files[0];

       // Only process image files.
      if (file.type.match('image.*')) {
            // display the uploaded img
            $('#img-box').attr("src", file.path);
      } else {
            // display a broken img in the future
      }

      // display the img meta data
      $("#fileName").text("Name: " + file.name);
      $("#fileModified").text("Last Modified: " + file.lastModifiedDate.toLocaleDateString());
      $("#fileType").text("Type: " + file.type);
      $("#fileSize").text("Size: " + Math.round(file.size / Math.pow(1024,2)) + "MB");
})
