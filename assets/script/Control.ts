
const { ccclass, property, requireComponent } = cc._decorator;

enum Player {
  UNKOWN = -1,
  ONE = 0,
  TWO = 1
}

@ccclass
@requireComponent(cc.RigidBody)
export default class Control extends cc.Component {

  @property({
    type: cc.Enum(Player)
  })
  public player: Player = Player.ONE;

  private body: cc.RigidBody;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.body = this.getComponent(cc.RigidBody);

    const leftKey = [cc.macro.KEY.left, cc.macro.KEY.a][this.player];
    const rightKey = [cc.macro.KEY.right, cc.macro.KEY.d][this.player];

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, ({ keyCode }: cc.Event.EventKeyboard) => {
      if (keyCode === leftKey) {
        this.body.applyTorque(2000, true);
        this.body.applyAngularImpulse(50, true);
        // this.body.applyLinearImpulse(cc.v2(8, 0), cc.v2(0.5, 0.5), true);
      } else if (keyCode === rightKey) {
        this.body.applyTorque(-2000, true);
        this.body.applyAngularImpulse(50, true);
        // this.body.applyLinearImpulse(cc.v2(-8, 0), cc.v2(0.5, 0.5), true);
      }
    }, this);
  }

}
