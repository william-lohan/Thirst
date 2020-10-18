
const { ccclass, property, requireComponent } = cc._decorator;

@ccclass
@requireComponent(cc.TiledObjectGroup)
export default class CollisionObjectGroup extends cc.Component {

  //#region LIFE-CYCLE CALLBACKS:

  protected onLoad(): void {
    const objectGroup = this.node.getComponent(cc.TiledObjectGroup);
    objectGroup.getObjects().forEach(object => {
      if (object.type === 3) { // poly line
        const colliderNode = new cc.Node();
        const rigidBody = colliderNode.addComponent(cc.RigidBody);
        rigidBody.type = cc.RigidBodyType.Static;
        rigidBody.awakeOnLoad = true;
        const collider = colliderNode.addComponent(cc.PhysicsPolygonCollider);
        collider.points = object.polylinePoints.map(point => cc.v2(point));
        // this.node.addChild(colliderNode);
        colliderNode.parent = this.node;
      }
    });
  }

  //#endregion

}
