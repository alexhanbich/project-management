import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  tabKey: string = '1'
  // tagKeyList: string[] = []
  onTabClick(key: string) {
    this.tabKey = key;
  }
  // onTagClick(key: string) {
  //   if (this.tagKeyList.includes(key)) {
  //     const index = this.tagKeyList.indexOf(key);
  //     if (index !== -1) {
  //       this.tagKeyList.splice(index, 1);
  //     }
  //   }
  //   this.tagKeyList.push(key)
  // }

}
