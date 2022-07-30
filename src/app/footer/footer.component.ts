import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  circle :{
    top?:string,
    left?:string,
    bottom?:string,
    right?:string,
    height:string,
    width:string,
    color:string,
    radius?:string,
  }[]=[];

  constructor() {

    this.circle = [
      {
      top:(Math.random()*80).toFixed().toString(),
      left:(Math.random()*30).toFixed().toString(),
      height:'9px',
      width:'9px',
      color:'#6C121D',
      radius:'50%'
    },
      {
      top:(Math.random()*80).toFixed().toString(),
      right:(Math.random()*30).toFixed().toString(),
      height:'10px',
      width:'10px',
      color:'#DC2139',
      radius:'50%'
    },
      {
      bottom:(Math.random()*80).toFixed().toString(),
      right:(Math.random()*20).toFixed().toString(),
      height:'7px',
      width:'7px',
      color:'#B39683',
      radius:'50%'
    },
      {
      top:(Math.random()*80).toFixed().toString(),
      left:(Math.random()*20).toFixed().toString(),
      height:'7px',
      width:'7px',
      color:'#07DECA'
    },
      {
      left:(Math.random()*20).toFixed().toString(),
      bottom:(Math.random()*80).toFixed().toString(),
      height:'8px',
      width:'8px',
      color:'#FFD128',
      radius:'50%'
    },
      {
      top:(Math.random()*80).toFixed().toString(),
      right:(Math.random()*20).toFixed().toString(),
      height:'7px',
      width:'7px',
      color:'#07DECA'
    },
    {
      top:(Math.random()*80).toFixed().toString(),
      left:(Math.random()*30).toFixed().toString(),
      height:'9px',
      width:'9px',
      color:'#6C121D',
      radius:'50%'
    },
      {
      top:(Math.random()*80).toFixed().toString(),
      right:(Math.random()*30).toFixed().toString(),
      height:'16px',
      width:'16px',
      color:'#DC2139',
      radius:'50%'
    },
      {
      bottom:(Math.random()*80).toFixed().toString(),
      right:(Math.random()*20).toFixed().toString(),
      height:'10px',
      width:'10px',
      color:'#B39683',
      radius:'50%'
    },
      {
      left:(Math.random()*20).toFixed().toString(),
      bottom:(Math.random()*60).toFixed().toString(),
      height:'8px',
      width:'8px',
      color:'#FFD128',
      radius:'50%'
    },
  ];
   }


  ngOnInit(): void {
  }
  


}
