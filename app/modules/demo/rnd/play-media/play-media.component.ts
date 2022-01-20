import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-media',
  templateUrl: './play-media.component.html',
  styleUrls: ['./play-media.component.css']
})
export class PlayMediaComponent implements OnInit {
  

  public audio = new Audio("https://docs.google.com/uc?download=open&id=1J-egV0_CTEVqWOgrPCMV3BBZXWPR-dIs");
  public audio1 = new Audio("https://docs.google.com/uc?download=open&id=16OUadcimdV65yvigTuhqrWo51EURaO-a");
  public audio2 = new Audio("https://docs.google.com/uc?download=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y");
  
  constructor() {
      //this.audio.load();
   }
  //https://drive.google.com/file/d//view?usp=sharing
  ngOnInit() {
    let track_list = [
      {
      id:"195",
      sl: "114",
      name: "114.195. Surah An-Nas (1 - 6)",
      title: "114.195. Surah An-Nas (1 - 6).mp3",
      artist: "Islamic",
      image: "https://docs.google.com/uc?export=open&id=1Vjakr5hhEo8SbWacX7mFnGbtAARkbsyb",
      path: "https://docs.google.com/uc?export=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y",
      path1: "https://docs.google.com/uc?download=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y",
      path2: "https://docs.google.com/uc?export=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y",
      path3: "http://domain.com/folder/file_name.mp3",
      },
    ];
  }
   playList = { 
    'audios' : [
    
    ],
    'videos' : [
    
    ],
    'images' : [{
        'name'  : 'Allah Hoo1',
        'alt' : 'Allah Hoo1',
        'url': 'resources/images/allah-hoo/allah-hoo1.png',
        'more': '<a href="#">more..</a>'
      },{
        'name'  : 'Allah Hoo2',
        'alt' : 'Allah Hoo2',
        'url': 'resources/images/allah-hoo/allah-hoo2.png',
        'more': '<a href="#">more..</a>'
      },{
        'name'  : 'Allah Hoo3',
        'alt' : 'Allah Hoo3',
        'url': 'https://i.pinimg.com/originals/09/3b/75/093b75b0ebd6821b3fbf992eb43670d3.jpg',
        'more': '<a href="#">more..</a>'
      }/*,{
        'name'  : 'Allah Hoo',
        'alt' : 'Allah Hoo',
        'url': 'https://docs.google.com/uc?export=open&id=1Vjakr5hhEo8SbWacX7mFnGbtAARkbsyb',
        'more': '<a href="#">more..</a>'
      }*/
    ]};
  gallery = { 'images' : [
      
    {
      'name'  : 'Darth Vader',
      'alt' : 'A Black Clad warrior lego toy',
      'url': 'gallery/myLittleVader.jpg',
      'credit': '<a href="https://www.flickr.com/photos/legofenris/">legOfenris</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },
  
    {
      'name'  : 'Snow Troopers',
      'alt' : 'Two lego solders in white outfits walking across an icy plain',
      'url': 'gallery/snowTroopers.jpg',
      'credit': '<a href="https://www.flickr.com/photos/legofenris/">legOfenris</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },
  
    {
      'name'  : 'Bounty Hunters',
      'alt' : 'A group of bounty hunters meeting, aliens and humans in costumes.',
      'url': 'gallery/bountyHunters.jpg',
      'credit': '<a href="https://www.flickr.com/photos/legofenris/">legOfenris</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },
    
  ]};

  fileLoad(fileJson) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', fileJson.url);
      request.responseType = 'blob';
  
      request.onload = function() {
        if (request.status == 200) {
          var res = [];
          res[0] = request.response;
          res[1] = fileJson;
          resolve(res);
        } else {
          reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
      };
      request.onerror = function() {
        reject(Error('There was a network error.'));
      };
      request.send();
    });
  }
  
  //var imgSection = document.querySelector('section');
  load = function() {
    let imageList = this.playList.images;
    for(var i = 0; i<=imageList.length-1; i++) {
      this.fileLoad(imageList[i]).then((res)=> {
  
        var imageURL = window.URL.createObjectURL(res[0]);
        /*
        var myImage = document.createElement('img');
        var myFigure = document.createElement('figure');
        var myCaption = document.createElement('caption');
  
        myImage.src = imageURL;
        myImage.setAttribute('alt', res[1].alt);
        myCaption.innerHTML = '<strong>' + res[1].name + '</strong>: Taken by ' + res[1].more;
  
        imgSection.appendChild(myFigure);
        myFigure.appendChild(myImage);
        myFigure.appendChild(myCaption);*/
  
      }, (Error)=> {
        console.log(Error);
      });
    }
  };
  
  imgLoad(imgJSON) {
    // return a promise for an image loading
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', imgJSON.url);
      request.responseType = 'blob';
  
      request.onload = function() {
        if (request.status == 200) {
          var arrayResponse = [];
          arrayResponse[0] = request.response;
          arrayResponse[1] = imgJSON;
          resolve(arrayResponse);
        } else {
          reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
      };
  
      request.onerror = function() {
        reject(Error('There was a network error.'));
      };
  
      // Send the request
      request.send();
    });
  }
  onload() {

    // load each set of image, alt text, name and caption
    for(var i = 0; i<=this.gallery.images.length-1; i++) {
      this.imgLoad(this.gallery.images[i]).then(function(arrayResponse) {
  
        var imageURL = window.URL.createObjectURL(arrayResponse[0]);
        //var myImage = document.createElement('img');
        //var myFigure = document.createElement('figure');
        //var myCaption = document.createElement('caption');
  
        //myImage.src = imageURL;
        //myImage.setAttribute('alt', arrayResponse[1].alt);
        //myCaption.innerHTML = '<strong>' + arrayResponse[1].name + '</strong>: Taken by ' + arrayResponse[1]//.credit;
  
        //imgSection.appendChild(myFigure);
        //myFigure.appendChild(myImage);
        //myFigure.appendChild(myCaption);
  
      }, function(Error) {
        console.log(Error);
      });
    }
  };
  pay(): void {
    this.audio.play();
  }
  stop(): void {
    this.audio.pause();
  }


  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
  playlist = [
    {
      title: "Tha Kar ke",
      link: "https://funksyou.com/fileDownload/Songs/128/13080.mp3"
    },
    {
      title: "Golmal",
      link: "https://funksyou.com/fileDownload/Songs/128/13091.mp3"
    }
  ];
}

/*
https://stackoverflow.com/questions/44883501/play-sound-in-angular-4
playAudio(){
  let audio = new Audio();
  audio.src = "../../../assets/audio/alarm.wav";
  audio.load();
  audio.play();
}
this.playAudio();
*/