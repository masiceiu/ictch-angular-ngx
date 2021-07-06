import { Component, OnInit } from '@angular/core';

export class ServiceFactory
{
  all(p1, p2){}
}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    /*if(!items || !filter) {
      return items;
    }
    // To search values only of "name" variable of your object(item)
    //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    // To search in values of every variable of your object(item)
    return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
    */return items;
    }
}

@Component({
  selector: 'app-setup-product',
  templateUrl: './setup-product.component.html',
  styleUrls: ['./setup-product.component.css'],
  providers:[FilterPipe]
})
export class SetupProductComponent implements OnInit {

  activeTab = 'tab1';serviceFactory:ServiceFactory
    activateTab = function (tab) {
        this.activeTab = tab;
    }
    activatedTab = function (tab) {
        return this.activeTab == tab ? 'active' : '';
    }

    //activeTab = "active";
    categories = [];
    product = {};
    products = [];
    rootScope = {};
    fakeProducts = [
      {
          id: 1, name: "Crushed bones ", code: "PF001", price: "45tk",
          discription: "product details",
          catagory: "Catagory1",
          image1: "http://anubiasbd.com/images/products/stand/a.jpg", image2: "img2",
          image3: "img3", image4: "img4",
          isActive: true,
          pictures: [{ id: 1, name: "Mustard cake ", code: "PF002" }]
      },
      { id: 2, name: "Mustard cake ", code: "PF002", price: "65tk", discription: "product details", catagory: "Catagory1", image1: "img1", image2: "img2", image3: "img3", image4: "img4" },
      { id: 3, name: "Tricho-compost ", code: "PF003", price: "50tk", discription: "product details", catagory: "Catagory2", image1: "img1", image2: "img2", image3: "img3", image4: "img4" },
      { id: 4, name: "Vermicompost ", code: "PF004", price: "70tk", discription: "product details", catagory: "Catagory2", image1: "img1", image2: "img2", image3: "img3", image4: "img4" },
      { id: 5, name: "tablet fertilizer ", code: "PF005", price: "30tk", discription: "product details", catagory: "Catagory3", image1: "img1", image2: "img2", image3: "img3", image4: "img4" },
      { id: 6, name: "Crushed bones ", code: "PF006", price: "120tk", discription: "product details", catagory: "Catagory3", image1: "img1", image2: "img2", image3: "img3", image4: "img4" },
    ];

  constructor(public filter:FilterPipe) { 
    this.products = this.fakeProducts;
  }

  ngOnInit() {
  }
    //add = function () {
    //    //$product.list.push({ id: $product.id, name: $product.name, code: $product.code, price: $product.price, catagory: $product.catagory, discription: $product.discription,});
    //}

    //removeItem = function (x) {
    //    // $product.list.splice(x, 1);
    //}
    selectedFile = {};
    selectFile = function (files, fileName) {
        if (files != null) {
            var file = files[0];
            if (file.type.indexOf('image') > -1/* && fileReaderSupported*/) {
                //console.log('selectFile:', fileReaderSupported);
                setTimeout(function () {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function (e) {
                        setTimeout(function () {
                            this.selectedFile[fileName] = {
                                imgFile: file,
                                fileName: fileName,
                                imgData: e.target.result
                            }
                        });
                    }
                });
            }
        }
    }
    onClick = function (switch_On, obj) {
        switch (switch_On) {
            case "filter":
                //loadProduct(ProductCategories.id);
                break;;
            case 'search':
                //console.log('obj:', obj);
                this.showList = true;
                this.serviceFactory.all('api/EIMS/Product', { take: 50, skip: 0 }).then(function (res) {
                    this.products = res.data;
                    this.showList = false;
                    //console.log('res:', res);
                }, function (ex) {
                    //console.log('ex:', ex);
                });
                break;
            case 'save':
                if (confirm("Are you sure, want to save. confirm?")) {
                    //var files = [];
                    //angular.forEach(selectedFile, function (it) {
                    //    if (it.imgFile) {
                    //        files.push(it.imgFile);
                    //    }
                    //    //console.log('it:', it);
                    //});
                    /*
                    console.log('obj:', obj);
                    console.log('files:', selectedFile);
                   */
                    this.submitDisabled = true;
                    if (obj.productID) {
                        obj.id = obj.productID;
                        this.serviceFactory.update('api/EIMS/Product', obj, this.selectedFile).then(function (res) {
                            //console.log('res:', res);
                            this.req = {};
							this.selectedFile = {};
                            this.submitDisabled = false;
                            this.onClick('search');
                            if (!confirm("Data saved successfully, Want to add more, confirm?")) {
                                setTimeout(function () {
                                    this.angular.element(document.getElementById("tablink1")).triggerHandler('click');
                                }, 0);
                            }
                        }, function (ex) {
                            //console.log('ex:', ex);
                        });
                    } else {
                        this.serviceFactory.create('api/EIMS/Product', obj, this.selectedFile).then(function (res) {
                            //console.log('res:', res);
                            this.req = {};
							this.selectedFile = {};
                            this.submitDisabled = false;
                            this.onClick('search');
                            if (!confirm("Data saved successfully, Want to add more, confirm?")) {
                                setTimeout(function () {
                                    this.angular.element(document.getElementById("tablink1")).triggerHandler('click');
                                }, 0);
                            }
                        }, function (ex) {
                            //console.log('ex:', ex);
                        });
                    }
                }
                break
            case 'update':
                this.req = obj;
                setTimeout(function () {
                    this.angular.forEach(obj.pictures, function (it, i) {
                        var fileName = 'file' + (i + 1);
                        //console.log('fileName:', fileName);
                        this.selectedFile[fileName] = {
                            imgFile: null,
                            fileName: fileName,
                            imgData: this.rootScope.apiBase + it.seoFilenamePath + '/' + it.seoFilename
                        }
                    });
                    this.angular.element(document.getElementById("tablink2")).triggerHandler('click');
                }, 0);
                break;
            case 'edit':
                break;
            case "tabPane":
                this.activeTab = obj;
                break;
            default:

        }
        //var tablink2 = angular.element(document.getElementById("tablink1")).click();
    }
    load = function () {
        //console.log('res:', res);
        this.serviceFactory.all('api/EIMS/Category', { take: 50, skip: 0 }).then(function (res) {
            this.categories = res.data;
            this.onClick('search');
        }, function (ex) {
            //console.log('ex:', ex);
        });
        setTimeout(function () {
            this.angular.element(document.getElementById("tablink1")).triggerHandler('click');
        }, 0);
    }
}