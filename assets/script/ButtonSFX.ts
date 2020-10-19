
const { ccclass, property, requireComponent } = cc._decorator;

@ccclass
@requireComponent(cc.Button)
export default class NewClass extends cc.Component {

  @property(cc.AudioClip)
  public sfx: cc.AudioClip = null;


  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    const button = this.getComponent(cc.Button);
    if (this.sfx) {
      button.node.on('click', this.onClick, this);
    }
  }

  onClick(): void {
    cc.audioEngine.playEffect(this.sfx, false);
  }

}
