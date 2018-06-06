import { Component, OnInit } from '@angular/core';
import {assertNumber} from '@angular/core/src/render3/assert';




@Component({
  selector: 'app-hot-issues-content',
  templateUrl: './hot-issues-content.component.html',
  styleUrls: ['./hot-issues-content.component.css']
})
export class HotIssuesContentComponent implements OnInit {
   private issuess: issues [] = [
     new issues('我要看病啦，怎么取我的大病历？', '2018.04.20'),
     new issues('我不知道挂哪个科？', '2018.04.20'),
     new issues('邮寄病例？', '2018.04.20'),
     new issues('在哪建卡？', '2018.04.20'),
     new issues('预约的号取不出来？', '2018.04.20'),
     new issues('儿童药房和成人药房在一起吗？', '2018.04.20'),
     new issues('没带医保卡可以看病吗？', '2018.04.20'),
     new issues('六、日可以抽血吗？/周末可以抽血吗？', '2018.04.20'),
     new issues('核磁报告几天可以取？', '2018.04.20'),
     new issues('窗口能不能挂到明天的号？', '2018.04.20'),
   ]

  constructor() {
  }

  ngOnInit() {
  }

}


export class issues {
  constructor(
    private hotissues: string,
    private date: string,
  ) {}
}
