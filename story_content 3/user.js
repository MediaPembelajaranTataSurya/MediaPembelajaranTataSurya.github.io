function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RRjXCySnxw":
        Script1();
        break;
  }
}

function Script1()
{
  var audio= document.getElementById('bgSong');
audio.src="musicc.mp3";
audio.load();
audio.play();
}

