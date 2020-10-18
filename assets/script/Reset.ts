
const { ccclass, requireComponent } = cc._decorator;

@ccclass
@requireComponent(cc.RigidBody)
export default class Reset extends cc.Component {

  private originalPosition: cc.Vec2;

  private body: cc.RigidBody;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.originalPosition = this.node.getPosition().clone();
    this.body = this.getComponent(cc.RigidBody);
  }

  update(dt) {
    if (this.node.getPosition().y < 0) {
      this.reset();
    }
  }

  private reset(): void {
    this.body.linearVelocity = cc.Vec2.ZERO;
    this.body.angularVelocity = 0;
    this.body.active = false;
    this.node.setPosition(this.originalPosition.clone());
    this.body.active = true;
  }

}
