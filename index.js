function preview(){
  let image = document.getElementById('image');
  if(image.files[0].type == 'image/png' || image.files[0].type == 'image/jpeg'){
    let bold = window.URL.createObjectURL(image.files[0]);
    document.getElementById('imgPreview').src = bold;
  }else{
    alert('Please upload a image ( png or jpg )')
  }
}

function scaleToFill(){
  document.getElementById('imgPreview').style.objectFit = 'cover'
}

function scaleToFit(){
  document.getElementById('imgPreview').style.objectFit = 'contain'
}
