
const { ccclass, property } = cc._decorator;

function randomInt(min: number, max: number): number {
  return Math.floor((Math.random() * max) + min);
}

@ccclass
export default class JukeBox extends cc.Component {

  @property({
    min: 0,
    max: 1
  })
  public volume: number = 1;

  // TODO
  @property({
    visible: false
  })
  public random: boolean = true;

  @property([cc.AudioClip])
  public audioClips: cc.AudioClip[] = [];

  private currentIndex: number = -1;

  protected start(): void {
    this.playNext().then(() => {
      if (this.enabled) {
        this.playNext();
      }
    });
  }

  private playNext(): Promise<void> {
    // TODO if random
    this.currentIndex = randomInt(0, this.audioClips.length - 1);
    return new Promise(resolve => {
      const id = cc.audioEngine.play(this.audioClips[this.currentIndex], false, this.volume);
      cc.audioEngine.setFinishCallback(id, () => resolve());
    });
  }

}
