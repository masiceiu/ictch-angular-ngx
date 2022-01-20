import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { MediaState } from './../media-state';

@Injectable()
export class PlayMediaService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}
  fileAsBlob() {
    this.http.get('/assets/image.jpg', { responseType: 'blob' })
    .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        var base64data = reader.result;                
            console.log('base64data:',base64data);
      }

      reader.readAsDataURL(res); 
      console.log('res:',res);
    });
  }
  blobFileDownload() {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });
    //this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    //<a [href]="fileUrl" download="file.txt">DownloadFile</a>
  }
  objectUrlPdf() {
    //this.fileName = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");
    //<object width="400" height="400" [attr.data]="fileName" type="application/pdf"></object>
	}
 
	public clearUrl(url) {
		// return this.sanitizer.bypassSecurityTrustUrl(window.location.protocol + '//' + window.location.host + url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
  BlobToBase64() {
    this.http.get('https://avatars0.githubusercontent.com/u/5053266?s=460&v=4', { responseType: 'blob' })
      .pipe(
        switchMap(blob => this.convertBlobToBase64(blob))
      )
      .subscribe(base64ImageUrl => console.log(base64ImageUrl));
  }

  convertBlobToBase64(blob: Blob) {
    return new Observable(observer => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        console.log('Image in Base64: ', event.target.result);
        observer.next(event.target.result);
        observer.complete();
      };

      reader.onerror = (event: any) => {
        console.log("File could not be read: " + event.target.error.code);
        observer.next(event.target.error.code);
        observer.complete();
      };
    });
  }
}
