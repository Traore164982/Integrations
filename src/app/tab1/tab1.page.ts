import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('headerwrapper',{read:ElementRef}) headerwrapper:ElementRef
  @ViewChild('condenseheader',{read:ElementRef}) condenseheader:ElementRef
  @ViewChild('overlay') overlay:ElementRef

  recherche = new BehaviorSubject<string>('');
  playlist:any[]= [
    {
    url:"nd3BUvviFJU",
    title:"Ouverture Compte Orange Money"
    },
    {
    url:"p_BaizVFAYg",
    title:"Weeru Teranga la ak Orange Money ! "
    },
    {
    url:"Ilq5McrFfCc",
    title:"Déplafonnement de compte via l'application Orange Money"
    },
    {
      url:"VHvx0EehwFo",
    title:"Le transfert d'argent avec Orange Money Europe"
    },{
      url:"pSNzZ3FXQ-M",
      title:"Sunu Kiosque : Acheter son mouton avec son Kalpé Orange Money"
    },
    {
      url:"SsgQVM5L5vc",
      title:"Sunu Kiosque : Comment s'incrire à Orange Money"
    },{
      url:"Dh8bIP11FfQ",
      title:"Sunu Kiosque : Déposer de l'argent sur son compte Orange Money"
    }
    ];

    search=false;
    inputFired=false;
    t:string='';
    searchFilter:string;
    searchKey:string;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.recherche.subscribe(data=>{
      this.searchKey=data
    })
  }

  filterSearch(event: any){    
    this.searchFilter=(event.target as HTMLInputElement).value;
    this.recherche.next(this.searchFilter); 
  }

  searching(){
    if(this.inputFired){
      return;
    }

    this.inputFired = true;
    const titleToolbar = this.condenseheader.nativeElement.children[0]

    const toolbarFade = this.animationCtrl.create('fade')
    .addElement(this.headerwrapper.nativeElement)
    .fromTo('opacity',1,0)
    .fromTo('height','90px','36px')
    .afterStyles({'z-index':-1});

    const headerFade = this.animationCtrl.create('header')
    .addElement(titleToolbar)
    .fromTo('opacity',1,0)
    .fromTo('height','48px','0px')
    .afterStyles({'z-index':-1});

    const wrapper = this.animationCtrl.create('wrapper')
    .addAnimation([toolbarFade,headerFade])
    .easing('ease-in')
    .duration(200);

    const overlayFade = this.animationCtrl.create('overlay')
    .addElement(this.overlay.nativeElement)
    .fromTo('opacity',0,1)
    .duration(200)

    if (this.search) {
      wrapper.direction('reverse').play()
      overlayFade.direction('reverse')
      .afterStyles({'z-index':0})
      .play();
    }else{
      wrapper.play();
      overlayFade
      .beforeStyles({'z-index':2})
      .play();
    }
    this.inputFired=false;
    this.search = !this.search;
}

}
