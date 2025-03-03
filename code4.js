gdjs.leveltwoCode = {};
gdjs.leveltwoCode.localVariables = [];
gdjs.leveltwoCode.GDtimesObjects1= [];
gdjs.leveltwoCode.GDtimesObjects2= [];
gdjs.leveltwoCode.GDdoneObjects1= [];
gdjs.leveltwoCode.GDdoneObjects2= [];
gdjs.leveltwoCode.GDcrowObjects1= [];
gdjs.leveltwoCode.GDcrowObjects2= [];
gdjs.leveltwoCode.GDshiftObjects1= [];
gdjs.leveltwoCode.GDshiftObjects2= [];
gdjs.leveltwoCode.GDredtileObjects1= [];
gdjs.leveltwoCode.GDredtileObjects2= [];
gdjs.leveltwoCode.GDwertileObjects1= [];
gdjs.leveltwoCode.GDwertileObjects2= [];
gdjs.leveltwoCode.GDemeraldObjects1= [];
gdjs.leveltwoCode.GDemeraldObjects2= [];
gdjs.leveltwoCode.GDbarrierObjects1= [];
gdjs.leveltwoCode.GDbarrierObjects2= [];
gdjs.leveltwoCode.GDmedalObjects1= [];
gdjs.leveltwoCode.GDmedalObjects2= [];
gdjs.leveltwoCode.GDshadowObjects1= [];
gdjs.leveltwoCode.GDshadowObjects2= [];
gdjs.leveltwoCode.GDtimerObjects1= [];
gdjs.leveltwoCode.GDtimerObjects2= [];
gdjs.leveltwoCode.GDspikeObjects1= [];
gdjs.leveltwoCode.GDspikeObjects2= [];


gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.leveltwoCode.GDshiftObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.leveltwoCode.GDcrowObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.leveltwoCode.GDshiftObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.leveltwoCode.GDcrowObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.leveltwoCode.GDshiftObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.leveltwoCode.GDcrowObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDshiftObjects1Objects = Hashtable.newFrom({"shift": gdjs.leveltwoCode.GDshiftObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.leveltwoCode.GDcrowObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects = Hashtable.newFrom({"crow": gdjs.leveltwoCode.GDcrowObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDemeraldObjects1Objects = Hashtable.newFrom({"emerald": gdjs.leveltwoCode.GDemeraldObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.leveltwoCode.GDmedalObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDtimesObjects1Objects = Hashtable.newFrom({"times": gdjs.leveltwoCode.GDtimesObjects1});
gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDdoneObjects1Objects = Hashtable.newFrom({"done": gdjs.leveltwoCode.GDdoneObjects1});
gdjs.leveltwoCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("done"), gdjs.leveltwoCode.GDdoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.leveltwoCode.GDtimerObjects1);
gdjs.copyArray(runtimeScene.getObjects("times"), gdjs.leveltwoCode.GDtimesObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.leveltwoCode.GDcrowObjects1.length !== 0 ? gdjs.leveltwoCode.GDcrowObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.leveltwoCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDtimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "TIMER") * 100) / 100));
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDmedalObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Scale").setScale(2);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDtimesObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDtimesObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 200);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDdoneObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDdoneObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 280);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDdoneObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDdoneObjects1[i].getBehavior("Scale").setScale(2);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16122644);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16123660);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDcrowObjects1.length;i<l;++i) {
    if ( !(gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDcrowObjects1[k] = gdjs.leveltwoCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDcrowObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDcrowObjects1[k] = gdjs.leveltwoCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16125068);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDcrowObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDcrowObjects1.length;i<l;++i) {
    if ( !(gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDcrowObjects1[k] = gdjs.leveltwoCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16125964);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDcrowObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDcrowObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDcrowObjects1[k] = gdjs.leveltwoCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDcrowObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDcrowObjects1[k] = gdjs.leveltwoCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDcrowObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDcrowObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDcrowObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").getCurrentFallSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDcrowObjects1[k] = gdjs.leveltwoCode.GDcrowObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDcrowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDcrowObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("Animation").setAnimationName("fly");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16128732);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.leveltwoCode.GDredtileObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.leveltwoCode.GDshadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.leveltwoCode.GDwertileObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDredtileObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDwertileObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SWITCH");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TIMER");
}{for(var i = 0, len = gdjs.leveltwoCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDshadowObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.leveltwoCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDshiftObjects1Objects, gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("barrier"), gdjs.leveltwoCode.GDbarrierObjects1);
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.leveltwoCode.GDredtileObjects1);
/* Reuse gdjs.leveltwoCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.leveltwoCode.GDwertileObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SWITCHCOOLDOWN");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.leveltwoCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDredtileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDwertileObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDbarrierObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDbarrierObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.leveltwoCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDshiftObjects1Objects, gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SWITCHCOOLDOWN") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.leveltwoCode.GDredtileObjects1);
/* Reuse gdjs.leveltwoCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.leveltwoCode.GDwertileObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SWITCHCOOLDOWN");
}{for(var i = 0, len = gdjs.leveltwoCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDwertileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDredtileObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.leveltwoCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDshiftObjects1Objects, gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SWITCHCOOLDOWN") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.leveltwoCode.GDredtileObjects1);
/* Reuse gdjs.leveltwoCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.leveltwoCode.GDwertileObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SWITCHCOOLDOWN");
}{for(var i = 0, len = gdjs.leveltwoCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDredtileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDwertileObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("shift"), gdjs.leveltwoCode.GDshiftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDshiftObjects1Objects, gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SWITCHCOOLDOWN") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.leveltwoCode.GDredtileObjects1);
/* Reuse gdjs.leveltwoCode.GDshiftObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.leveltwoCode.GDwertileObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SWITCHCOOLDOWN");
}{for(var i = 0, len = gdjs.leveltwoCode.GDshiftObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDshiftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDwertileObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDredtileObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.leveltwoCode.GDredtileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDredtileObjects1.length;i<l;++i) {
    if ( !(gdjs.leveltwoCode.GDredtileObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDredtileObjects1[k] = gdjs.leveltwoCode.GDredtileObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDredtileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDredtileObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDredtileObjects1[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("redtile"), gdjs.leveltwoCode.GDredtileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDredtileObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDredtileObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDredtileObjects1[k] = gdjs.leveltwoCode.GDredtileObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDredtileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDredtileObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDredtileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDredtileObjects1[i].activateBehavior("Platform", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.leveltwoCode.GDwertileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDwertileObjects1.length;i<l;++i) {
    if ( !(gdjs.leveltwoCode.GDwertileObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDwertileObjects1[k] = gdjs.leveltwoCode.GDwertileObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDwertileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDwertileObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDwertileObjects1[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("wertile"), gdjs.leveltwoCode.GDwertileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDwertileObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDwertileObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDwertileObjects1[k] = gdjs.leveltwoCode.GDwertileObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDwertileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDwertileObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDwertileObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDwertileObjects1[i].activateBehavior("Platform", true);
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
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "leveltwo");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("crow"), gdjs.leveltwoCode.GDcrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("emerald"), gdjs.leveltwoCode.GDemeraldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDcrowObjects1Objects, gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDemeraldObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDcrowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.leveltwoCode.GDshadowObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "TIMER");
}{for(var i = 0, len = gdjs.leveltwoCode.GDcrowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDcrowObjects1[i].getBehavior("PlatformerObject").setAcceleration(0);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDshadowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDshadowObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16141636);
}
}
if (isConditionTrue_0) {
gdjs.leveltwoCode.GDdoneObjects1.length = 0;

gdjs.leveltwoCode.GDmedalObjects1.length = 0;

gdjs.leveltwoCode.GDtimesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDmedalObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 200, "");
}{for(var i = 0, len = gdjs.leveltwoCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("silver");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDtimesObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 200, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.leveltwoCode.mapOfGDgdjs_9546leveltwoCode_9546GDdoneObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 280, "");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("complete");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.leveltwoCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDtimerObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 100);
}
}{for(var i = 0, len = gdjs.leveltwoCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("silver");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TIMER") > 25;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("bronze");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TIMER") <= 20;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);
{for(var i = 0, len = gdjs.leveltwoCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("gold");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDmedalObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").getAnimationName() == "bronze" ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDmedalObjects1[k] = gdjs.leveltwoCode.GDmedalObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDmedalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 4);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDmedalObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").getAnimationName() == "silver" ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDmedalObjects1[k] = gdjs.leveltwoCode.GDmedalObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDmedalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 4);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDmedalObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").getAnimationName() == "silver" ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDmedalObjects1[k] = gdjs.leveltwoCode.GDmedalObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDmedalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 3);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDmedalObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").getAnimationName() == "gold" ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDmedalObjects1[k] = gdjs.leveltwoCode.GDmedalObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDmedalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 2);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDmedalObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").getAnimationName() == "gold" ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDmedalObjects1[k] = gdjs.leveltwoCode.GDmedalObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDmedalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 3);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("medal"), gdjs.leveltwoCode.GDmedalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TIMER");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDmedalObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDmedalObjects1[i].getBehavior("Animation").getAnimationName() == "gold" ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDmedalObjects1[k] = gdjs.leveltwoCode.GDmedalObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDmedalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 4);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("done"), gdjs.leveltwoCode.GDdoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDdoneObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDdoneObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDdoneObjects1[k] = gdjs.leveltwoCode.GDdoneObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDdoneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDdoneObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDdoneObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDdoneObjects1[i].getBehavior("Animation").setAnimationName("hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("done"), gdjs.leveltwoCode.GDdoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDdoneObjects1.length;i<l;++i) {
    if ( !(gdjs.leveltwoCode.GDdoneObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDdoneObjects1[k] = gdjs.leveltwoCode.GDdoneObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDdoneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.leveltwoCode.GDdoneObjects1 */
{for(var i = 0, len = gdjs.leveltwoCode.GDdoneObjects1.length ;i < len;++i) {
    gdjs.leveltwoCode.GDdoneObjects1[i].getBehavior("Animation").setAnimationName("static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("done"), gdjs.leveltwoCode.GDdoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leveltwoCode.GDdoneObjects1.length;i<l;++i) {
    if ( gdjs.leveltwoCode.GDdoneObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.leveltwoCode.GDdoneObjects1[k] = gdjs.leveltwoCode.GDdoneObjects1[i];
        ++k;
    }
}
gdjs.leveltwoCode.GDdoneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelscreen", false);
}}

}


};

gdjs.leveltwoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.leveltwoCode.GDtimesObjects1.length = 0;
gdjs.leveltwoCode.GDtimesObjects2.length = 0;
gdjs.leveltwoCode.GDdoneObjects1.length = 0;
gdjs.leveltwoCode.GDdoneObjects2.length = 0;
gdjs.leveltwoCode.GDcrowObjects1.length = 0;
gdjs.leveltwoCode.GDcrowObjects2.length = 0;
gdjs.leveltwoCode.GDshiftObjects1.length = 0;
gdjs.leveltwoCode.GDshiftObjects2.length = 0;
gdjs.leveltwoCode.GDredtileObjects1.length = 0;
gdjs.leveltwoCode.GDredtileObjects2.length = 0;
gdjs.leveltwoCode.GDwertileObjects1.length = 0;
gdjs.leveltwoCode.GDwertileObjects2.length = 0;
gdjs.leveltwoCode.GDemeraldObjects1.length = 0;
gdjs.leveltwoCode.GDemeraldObjects2.length = 0;
gdjs.leveltwoCode.GDbarrierObjects1.length = 0;
gdjs.leveltwoCode.GDbarrierObjects2.length = 0;
gdjs.leveltwoCode.GDmedalObjects1.length = 0;
gdjs.leveltwoCode.GDmedalObjects2.length = 0;
gdjs.leveltwoCode.GDshadowObjects1.length = 0;
gdjs.leveltwoCode.GDshadowObjects2.length = 0;
gdjs.leveltwoCode.GDtimerObjects1.length = 0;
gdjs.leveltwoCode.GDtimerObjects2.length = 0;
gdjs.leveltwoCode.GDspikeObjects1.length = 0;
gdjs.leveltwoCode.GDspikeObjects2.length = 0;

gdjs.leveltwoCode.eventsList0(runtimeScene);
gdjs.leveltwoCode.GDtimesObjects1.length = 0;
gdjs.leveltwoCode.GDtimesObjects2.length = 0;
gdjs.leveltwoCode.GDdoneObjects1.length = 0;
gdjs.leveltwoCode.GDdoneObjects2.length = 0;
gdjs.leveltwoCode.GDcrowObjects1.length = 0;
gdjs.leveltwoCode.GDcrowObjects2.length = 0;
gdjs.leveltwoCode.GDshiftObjects1.length = 0;
gdjs.leveltwoCode.GDshiftObjects2.length = 0;
gdjs.leveltwoCode.GDredtileObjects1.length = 0;
gdjs.leveltwoCode.GDredtileObjects2.length = 0;
gdjs.leveltwoCode.GDwertileObjects1.length = 0;
gdjs.leveltwoCode.GDwertileObjects2.length = 0;
gdjs.leveltwoCode.GDemeraldObjects1.length = 0;
gdjs.leveltwoCode.GDemeraldObjects2.length = 0;
gdjs.leveltwoCode.GDbarrierObjects1.length = 0;
gdjs.leveltwoCode.GDbarrierObjects2.length = 0;
gdjs.leveltwoCode.GDmedalObjects1.length = 0;
gdjs.leveltwoCode.GDmedalObjects2.length = 0;
gdjs.leveltwoCode.GDshadowObjects1.length = 0;
gdjs.leveltwoCode.GDshadowObjects2.length = 0;
gdjs.leveltwoCode.GDtimerObjects1.length = 0;
gdjs.leveltwoCode.GDtimerObjects2.length = 0;
gdjs.leveltwoCode.GDspikeObjects1.length = 0;
gdjs.leveltwoCode.GDspikeObjects2.length = 0;


return;

}

gdjs['leveltwoCode'] = gdjs.leveltwoCode;
