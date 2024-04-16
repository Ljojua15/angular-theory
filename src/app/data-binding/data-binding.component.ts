import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'angular-course-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']

})
export class DataBindingComponent  implements  OnInit{
  @Input() mess :string = ''
  @Output() lengthCount = new EventEmitter<number>();


imgTest=  {
  img: 'https://www.angularjswiki.com/angular/use-ngoptimizedimage-to-improve-image-loading-performance-in-angular/featured.png',
  text: 'angular-course',
  img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0lQRdNBenj-o19hfd7DbEdN_-3k8q6pODqsMZKVMBg&s'
}

angular: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0lQRdNBenj-o19hfd7DbEdN_-3k8q6pODqsMZKVMBg&s'

buttonDisable: boolean = true;

sqClass:string = 'sq-red'
  imgchange = this.imgTest.img2

changeSq(){
  this.sqClass = this.sqClass === 'sq-red' ? 'sq-yellow' : 'sq-red'
}

  isDisabled(){
    this.buttonDisable = !this.buttonDisable
    this.changeSq()

  }

  chngArryImg(){
  this.imgchange = this.imgchange === 'this.imgTest.img' ? 'this.imgTest.img2' : 'this.imgTest.img2'

  }


  ngOnInit() {

  }

  countLength(){
  this.lengthCount.emit(this.mess.length)

  }
}
