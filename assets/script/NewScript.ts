
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

  //#region LIFE-CYCLE CALLBACKS:

  protected onLoad(): void {
    const physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;
    // physicsManager.debugDrawFlags =
    //   cc.PhysicsManager.DrawBits.e_aabbBit |
    //   cc.PhysicsManager.DrawBits.e_jointBit |
    //   cc.PhysicsManager.DrawBits.e_shapeBit;
  }

  //#endregion

}
