document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault()
}

document.body.ondrop = (ev) => {
      // get the img file from the drop event
      var file = ev.dataTransfer.files[0];

      // display the img meta data
      document.getElementById("fileName").innerHTML = "Filename: " + file.name;
      document.getElementById("fileModified").innerHTML = "Last modified date: " + file.lastModifiedDate;
      document.getElementById("fileType").innerHTML = "File type: " + file.type;
      document.getElementById("fileSize").innerHTML = "File size: " + Math.round(file.size / Math.pow(1024,2)) + "MB";

      ev.preventDefault()
}