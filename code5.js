gdjs.levelthreeCode = {};
gdjs.levelthreeCode.localVariables = [];
gdjs.levelthreeCode.GDtimesObjects1= [];
gdjs.levelthreeCode.GDtimesObjects2= [];
gdjs.levelthreeCode.GDdoneObjects1= [];
gdjs.levelthreeCode.GDdoneObjects2= [];
gdjs.levelthreeCode.GDrestartObjects1= [];
gdjs.levelthreeCode.GDrestartObjects2= [];
gdjs.levelthreeCode.GDcrowObjects1= [];
gdjs.levelthreeCode.GDcrowObjects2= [];
gdjs.levelthreeCode.GDshiftObjects1= [];
gdjs.levelthreeCode.GDshiftObjects2= [];
gdjs.levelthreeCode.GDredtileObjects1= [];
gdjs.levelthreeCode.GDredtileObjects2= [];
gdjs.levelthreeCode.GDwertileObjects1= [];
gdjs.levelthreeCode.GDwertileObjects2= [];
gdjs.levelthreeCode.GDemeraldObjects1= [];
gdjs.levelthreeCode.GDemeraldObjects2= [];
gdjs.levelthreeCode.GDbarrierObjects1= [];
gdjs.levelthreeCode.GDbarrierObjects2= [];
gdjs.levelthreeCode.GDmedalObjects1= [];
gdjs.levelthreeCode.GDmedalObjects2= [];
gdjs.levelthreeCode.GDshadowObjects1= [];
gdjs.levelthreeCode.GDshadowObjects2= [];
gdjs.levelthreeCode.GDtimerObjects1= [];
gdjs.levelthreeCode.GDtimerObjects2= [];
gdjs.levelthreeCode.GDspikeObjects1= [];
gdjs.levelthreeCode.GDspikeObjects2= [];


gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.levelthreeCode.GDshiftObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.levelthreeCode.GDcrowObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.levelthreeCode.GDshiftObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.levelthreeCode.GDcrowObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.levelthreeCode.GDshiftObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.levelthreeCode.GDcrowObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.levelthreeCode.GDshiftObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.levelthreeCode.GDcrowObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.levelthreeCode.GDshiftObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.levelthreeCode.GDcrowObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.levelthreeCode.GDcrowObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDspikeObjects1Objects = Hashtable.newFrom({"spike": gdjs.levelthreeCode.GDspikeObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.levelthreeCode.GDcrowObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDemeraldObjects1Objects = Hashtable.newFrom({"emerald": gdjs.levelthreeCode.GDemeraldObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelthreeCode.GDmedalObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDtimesObjects1Objects = Hashtable.newFrom({"times": gdjs.levelthreeCode.GDtimesObjects1});
gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDdoneObjects1Objects = Hashtable.newFrom({"done": gdjs.levelthreeCode.GDdoneObjects1});
gdjs.levelthreeCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "startscreen", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelscreen", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("done"), gdjs.levelthreeCode.GDdoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.levelthreeCode.GDmedalObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.levelthreeCode.GDtimerObjects1);
gdjs.copyArray(runtimeScene.getObjects("times"), gdjs.levelthreeCode.GDtimesObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.levelthreeCode.GDcrowObjects1.length !== 0 ? gdjs.levelthreeCode.GDcrowObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.levelthreeCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDtimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "TIMER") * 100) / 100));
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDmedalObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDmedalObjects1[i].getBehavior("Scale").setScale(2);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDtimesObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDtimesObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 200);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDdoneObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDdoneObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 280);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDdoneObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDdoneObjects1[i].getBehavior("Scale").setScale(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "levelthree");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16258636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16259572);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDcrowObjects1.length;i<l;++i) {
    if ( !(gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDcrowObjects1[k] = gdjs.levelthreeCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDcrowObjects1.length;i<l;++i) {
    if ( gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDcrowObjects1[k] = gdjs.levelthreeCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16261484);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDcrowObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDcrowObjects1.length;i<l;++i) {
    if ( !(gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDcrowObjects1[k] = gdjs.levelthreeCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16262764);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDcrowObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDcrowObjects1.length;i<l;++i) {
    if ( gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDcrowObjects1[k] = gdjs.levelthreeCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDcrowObjects1.length;i<l;++i) {
    if ( gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDcrowObjects1[k] = gdjs.levelthreeCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDcrowObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDcrowObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDcrowObjects1.length;i<l;++i) {
    if ( gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").getCurrentFallSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDcrowObjects1[k] = gdjs.levelthreeCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDcrowObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("Animation").setAnimationName("fly");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16265684);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.levelthreeCode.GDredtileObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.levelthreeCode.GDshadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.levelthreeCode.GDwertileObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDredtileObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDwertileObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SWITCH");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TIMER");
}{for(var i = 0, len = gdjs.levelthreeCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshadowObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.levelthreeCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects, gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.levelthreeCode.GDredtileObjects1);
/* Reuse gdjs.levelthreeCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.levelthreeCode.GDwertileObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.levelthreeCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDredtileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDwertileObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.levelthreeCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects, gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.levelthreeCode.GDredtileObjects1);
/* Reuse gdjs.levelthreeCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.levelthreeCode.GDwertileObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.levelthreeCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDwertileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDredtileObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.levelthreeCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects, gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.levelthreeCode.GDredtileObjects1);
/* Reuse gdjs.levelthreeCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.levelthreeCode.GDwertileObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.levelthreeCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDredtileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDwertileObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.levelthreeCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects, gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.levelthreeCode.GDredtileObjects1);
/* Reuse gdjs.levelthreeCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.levelthreeCode.GDwertileObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}{for(var i = 0, len = gdjs.levelthreeCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDwertileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDredtileObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.levelthreeCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDshiftObjects1Objects, gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.levelthreeCode.GDredtileObjects1);
/* Reuse gdjs.levelthreeCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.levelthreeCode.GDwertileObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.levelthreeCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDredtileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDwertileObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.levelthreeCode.GDredtileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDredtileObjects1.length;i<l;++i) {
    if ( !(gdjs.levelthreeCode.GDredtileObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDredtileObjects1[k] = gdjs.levelthreeCode.GDredtileObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDredtileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDredtileObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDredtileObjects1[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.levelthreeCode.GDredtileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDredtileObjects1.length;i<l;++i) {
    if ( gdjs.levelthreeCode.GDredtileObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDredtileObjects1[k] = gdjs.levelthreeCode.GDredtileObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDredtileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDredtileObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDredtileObjects1[i].activateBehavior("Platform", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.levelthreeCode.GDwertileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDwertileObjects1.length;i<l;++i) {
    if ( !(gdjs.levelthreeCode.GDwertileObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDwertileObjects1[k] = gdjs.levelthreeCode.GDwertileObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDwertileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDwertileObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDwertileObjects1[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.levelthreeCode.GDwertileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDwertileObjects1.length;i<l;++i) {
    if ( gdjs.levelthreeCode.GDwertileObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDwertileObjects1[k] = gdjs.levelthreeCode.GDwertileObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDwertileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDwertileObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDwertileObjects1[i].activateBehavior("Platform", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("spike"), gdjs.levelthreeCode.GDspikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects, gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDspikeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDcrowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.levelthreeCode.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.levelthreeCode.GDshadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.levelthreeCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDtimerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshadowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshadowObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDrestartObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16277308);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.levelthreeCode.GDrestartObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDrestartObjects1[i].getBehavior("Text").setText("PRESS R TO RESTART\n\nThe next one's easier, I swear.");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.levelthreeCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("emerald"), gdjs.levelthreeCode.GDemeraldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDcrowObjects1Objects, gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDemeraldObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDcrowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.levelthreeCode.GDshadowObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "TIMER");
}{for(var i = 0, len = gdjs.levelthreeCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDcrowObjects1[i].getBehavior("PlatformerObject").setAcceleration(0);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshadowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelthreeCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDshadowObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16279964);
}
}
if (isConditionTrue_0) {
gdjs.levelthreeCode.GDdoneObjects1.length = 0;

gdjs.levelthreeCode.GDmedalObjects1.length = 0;

gdjs.levelthreeCode.GDtimesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDmedalObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 200, "");
}{for(var i = 0, len = gdjs.levelthreeCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("bronze");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDtimesObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 200, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelthreeCode.mapOfGDgdjs_9546levelthreeCode_9546GDdoneObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 280, "");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("complete");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.levelthreeCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDtimerObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TIMER") > 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() > 3);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.levelthreeCode.GDmedalObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("bronze");
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() > 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.levelthreeCode.GDmedalObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("silver");
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TIMER") <= 11;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() > 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.levelthreeCode.GDmedalObjects1);
{for(var i = 0, len = gdjs.levelthreeCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("gold");
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("done"), gdjs.levelthreeCode.GDdoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDdoneObjects1.length;i<l;++i) {
    if ( gdjs.levelthreeCode.GDdoneObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDdoneObjects1[k] = gdjs.levelthreeCode.GDdoneObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDdoneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDdoneObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDdoneObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDdoneObjects1[i].getBehavior("Animation").setAnimationName("hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("done"), gdjs.levelthreeCode.GDdoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDdoneObjects1.length;i<l;++i) {
    if ( !(gdjs.levelthreeCode.GDdoneObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDdoneObjects1[k] = gdjs.levelthreeCode.GDdoneObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDdoneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelthreeCode.GDdoneObjects1 */
{for(var i = 0, len = gdjs.levelthreeCode.GDdoneObjects1.length ;i < len;++i) {
    gdjs.levelthreeCode.GDdoneObjects1[i].getBehavior("Animation").setAnimationName("static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("done"), gdjs.levelthreeCode.GDdoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelthreeCode.GDdoneObjects1.length;i<l;++i) {
    if ( gdjs.levelthreeCode.GDdoneObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelthreeCode.GDdoneObjects1[k] = gdjs.levelthreeCode.GDdoneObjects1[i];
        ++k;
    }
}
gdjs.levelthreeCode.GDdoneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelscreen", false);
}}

}


};

gdjs.levelthreeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelthreeCode.GDtimesObjects1.length = 0;
gdjs.levelthreeCode.GDtimesObjects2.length = 0;
gdjs.levelthreeCode.GDdoneObjects1.length = 0;
gdjs.levelthreeCode.GDdoneObjects2.length = 0;
gdjs.levelthreeCode.GDrestartObjects1.length = 0;
gdjs.levelthreeCode.GDrestartObjects2.length = 0;
gdjs.levelthreeCode.GDcrowObjects1.length = 0;
gdjs.levelthreeCode.GDcrowObjects2.length = 0;
gdjs.levelthreeCode.GDshiftObjects1.length = 0;
gdjs.levelthreeCode.GDshiftObjects2.length = 0;
gdjs.levelthreeCode.GDredtileObjects1.length = 0;
gdjs.levelthreeCode.GDredtileObjects2.length = 0;
gdjs.levelthreeCode.GDwertileObjects1.length = 0;
gdjs.levelthreeCode.GDwertileObjects2.length = 0;
gdjs.levelthreeCode.GDemeraldObjects1.length = 0;
gdjs.levelthreeCode.GDemeraldObjects2.length = 0;
gdjs.levelthreeCode.GDbarrierObjects1.length = 0;
gdjs.levelthreeCode.GDbarrierObjects2.length = 0;
gdjs.levelthreeCode.GDmedalObjects1.length = 0;
gdjs.levelthreeCode.GDmedalObjects2.length = 0;
gdjs.levelthreeCode.GDshadowObjects1.length = 0;
gdjs.levelthreeCode.GDshadowObjects2.length = 0;
gdjs.levelthreeCode.GDtimerObjects1.length = 0;
gdjs.levelthreeCode.GDtimerObjects2.length = 0;
gdjs.levelthreeCode.GDspikeObjects1.length = 0;
gdjs.levelthreeCode.GDspikeObjects2.length = 0;

gdjs.levelthreeCode.eventsList0(runtimeScene);
gdjs.levelthreeCode.GDtimesObjects1.length = 0;
gdjs.levelthreeCode.GDtimesObjects2.length = 0;
gdjs.levelthreeCode.GDdoneObjects1.length = 0;
gdjs.levelthreeCode.GDdoneObjects2.length = 0;
gdjs.levelthreeCode.GDrestartObjects1.length = 0;
gdjs.levelthreeCode.GDrestartObjects2.length = 0;
gdjs.levelthreeCode.GDcrowObjects1.length = 0;
gdjs.levelthreeCode.GDcrowObjects2.length = 0;
gdjs.levelthreeCode.GDshiftObjects1.length = 0;
gdjs.levelthreeCode.GDshiftObjects2.length = 0;
gdjs.levelthreeCode.GDredtileObjects1.length = 0;
gdjs.levelthreeCode.GDredtileObjects2.length = 0;
gdjs.levelthreeCode.GDwertileObjects1.length = 0;
gdjs.levelthreeCode.GDwertileObjects2.length = 0;
gdjs.levelthreeCode.GDemeraldObjects1.length = 0;
gdjs.levelthreeCode.GDemeraldObjects2.length = 0;
gdjs.levelthreeCode.GDbarrierObjects1.length = 0;
gdjs.levelthreeCode.GDbarrierObjects2.length = 0;
gdjs.levelthreeCode.GDmedalObjects1.length = 0;
gdjs.levelthreeCode.GDmedalObjects2.length = 0;
gdjs.levelthreeCode.GDshadowObjects1.length = 0;
gdjs.levelthreeCode.GDshadowObjects2.length = 0;
gdjs.levelthreeCode.GDtimerObjects1.length = 0;
gdjs.levelthreeCode.GDtimerObjects2.length = 0;
gdjs.levelthreeCode.GDspikeObjects1.length = 0;
gdjs.levelthreeCode.GDspikeObjects2.length = 0;


return;

}

gdjs['levelthreeCode'] = gdjs.levelthreeCode;
