import requests
import cloudinary

from cloudinary import uploader

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", 
  public_id = "olympic_flag")