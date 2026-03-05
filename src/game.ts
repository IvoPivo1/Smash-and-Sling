interface IScreen {
update(): void;
draw(): void;
onMousePressed?(): void;
}

class Game {
public currentScreen: IScreen;
public currentLevel: Level | null = null;
public selectedBird: number = 0;
public selectedSprite: p5.Image = images.bird0_idle;
public selectedBirdObject: Bird | null = null;
public explosions: Explosion[] = [];
public dashTrials: DashTrail [] = [];
public selectedLevel: number = 1;
public selectedBirds: Bird[] = [];
public maxBirdsAllowed: number = 1;
public bombDelayActive: boolean = false;
public splitDelayActive: boolean = false;
public unlocked: number[] = [0];
public unlockedBirds: number[] = [0];
public stars: number[] = new Array(10).fill(0);

public feathers: Feather[] = [];
private lastScreen: IScreen | null = null;

constructor() {
this.currentScreen = new HowToScreen();
this.lastScreen = this.currentScreen;
}

public update() {
if (this.currentScreen !== this.lastScreen) {
this.feathers.length = 0;
this.lastScreen = this.currentScreen;
}

this.currentScreen.update();

for (let i = this.feathers.length - 1; i >= 0; i--) {
this.feathers[i].update();
if (this.feathers[i].isDead()) {
this.feathers.splice(i, 1);
}
}
}

public draw() {
this.currentScreen.draw();

for (const f of this.feathers) {
f.draw();
}
}

public onMousePressed() {
this.currentScreen.onMousePressed?.();
}
}
