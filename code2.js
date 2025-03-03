gdjs.levelscreenCode = {};
gdjs.levelscreenCode.localVariables = [];
gdjs.levelscreenCode.GDlvl1Objects1= [];
gdjs.levelscreenCode.GDlvl1Objects2= [];
gdjs.levelscreenCode.GDlvl2Objects1= [];
gdjs.levelscreenCode.GDlvl2Objects2= [];
gdjs.levelscreenCode.GDlvl3Objects1= [];
gdjs.levelscreenCode.GDlvl3Objects2= [];
gdjs.levelscreenCode.GDcrowObjects1= [];
gdjs.levelscreenCode.GDcrowObjects2= [];
gdjs.levelscreenCode.GDshiftObjects1= [];
gdjs.levelscreenCode.GDshiftObjects2= [];
gdjs.levelscreenCode.GDredtileObjects1= [];
gdjs.levelscreenCode.GDredtileObjects2= [];
gdjs.levelscreenCode.GDwertileObjects1= [];
gdjs.levelscreenCode.GDwertileObjects2= [];
gdjs.levelscreenCode.GDemeraldObjects1= [];
gdjs.levelscreenCode.GDemeraldObjects2= [];
gdjs.levelscreenCode.GDbarrierObjects1= [];
gdjs.levelscreenCode.GDbarrierObjects2= [];
gdjs.levelscreenCode.GDmedalObjects1= [];
gdjs.levelscreenCode.GDmedalObjects2= [];
gdjs.levelscreenCode.GDshadowObjects1= [];
gdjs.levelscreenCode.GDshadowObjects2= [];
gdjs.levelscreenCode.GDtimerObjects1= [];
gdjs.levelscreenCode.GDtimerObjects2= [];
gdjs.levelscreenCode.GDspikeObjects1= [];
gdjs.levelscreenCode.GDspikeObjects2= [];


gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDlvl1Objects1Objects = Hashtable.newFrom({"lvl1": gdjs.levelscreenCode.GDlvl1Objects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDlvl2Objects1Objects = Hashtable.newFrom({"lvl2": gdjs.levelscreenCode.GDlvl2Objects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDlvl3Objects1Objects = Hashtable.newFrom({"lvl3": gdjs.levelscreenCode.GDlvl3Objects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects = Hashtable.newFrom({"medal": gdjs.levelscreenCode.GDmedalObjects1});
gdjs.levelscreenCode.eventsList0 = function(runtimeScene) {

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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDlvl1Objects1.length = 0;

gdjs.levelscreenCode.GDlvl2Objects1.length = 0;

gdjs.levelscreenCode.GDlvl3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDlvl1Objects1Objects, 17, 17, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDlvl2Objects1Objects, 98, 17, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDlvl3Objects1Objects, 179, 17, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDlvl1Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl1Objects1[i].getBehavior("Animation").setAnimationName("static");
}
}{for(var i = 0, len = gdjs.levelscreenCode.GDlvl2Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl2Objects1[i].getBehavior("Animation").setAnimationName("static");
}
}{for(var i = 0, len = gdjs.levelscreenCode.GDlvl3Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl3Objects1[i].getBehavior("Animation").setAnimationName("static");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("lvl1"), gdjs.levelscreenCode.GDlvl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl1Objects1.length;i<l;++i) {
    if ( gdjs.levelscreenCode.GDlvl1Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl1Objects1[k] = gdjs.levelscreenCode.GDlvl1Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl1Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl1Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl1Objects1[i].getBehavior("Animation").setAnimationName("hoverclick");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl1"), gdjs.levelscreenCode.GDlvl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl1Objects1.length;i<l;++i) {
    if ( !(gdjs.levelscreenCode.GDlvl1Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl1Objects1[k] = gdjs.levelscreenCode.GDlvl1Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl1Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl1Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl1Objects1[i].getBehavior("Animation").setAnimationName("static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl1"), gdjs.levelscreenCode.GDlvl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl1Objects1.length;i<l;++i) {
    if ( gdjs.levelscreenCode.GDlvl1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl1Objects1[k] = gdjs.levelscreenCode.GDlvl1Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl1Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl1Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl1Objects1[i].getBehavior("Animation").setAnimationName("hoverclick");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelone", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 17, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("gold");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 17, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("silver");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 17, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("bronze");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("lvl2"), gdjs.levelscreenCode.GDlvl2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl2Objects1.length;i<l;++i) {
    if ( gdjs.levelscreenCode.GDlvl2Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl2Objects1[k] = gdjs.levelscreenCode.GDlvl2Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl2Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl2Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl2Objects1[i].getBehavior("Animation").setAnimationName("hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl2"), gdjs.levelscreenCode.GDlvl2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl2Objects1.length;i<l;++i) {
    if ( !(gdjs.levelscreenCode.GDlvl2Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl2Objects1[k] = gdjs.levelscreenCode.GDlvl2Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl2Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl2Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl2Objects1[i].getBehavior("Animation").setAnimationName("static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl2"), gdjs.levelscreenCode.GDlvl2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl2Objects1.length;i<l;++i) {
    if ( gdjs.levelscreenCode.GDlvl2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl2Objects1[k] = gdjs.levelscreenCode.GDlvl2Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl2Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl2Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl2Objects1[i].getBehavior("Animation").setAnimationName("hover");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "leveltwo", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 98, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("gold");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 98, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("silver");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 98, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("bronze");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("lvl3"), gdjs.levelscreenCode.GDlvl3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl3Objects1.length;i<l;++i) {
    if ( gdjs.levelscreenCode.GDlvl3Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl3Objects1[k] = gdjs.levelscreenCode.GDlvl3Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl3Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl3Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl3Objects1[i].getBehavior("Animation").setAnimationName("hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl3"), gdjs.levelscreenCode.GDlvl3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl3Objects1.length;i<l;++i) {
    if ( !(gdjs.levelscreenCode.GDlvl3Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl3Objects1[k] = gdjs.levelscreenCode.GDlvl3Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl3Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl3Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl3Objects1[i].getBehavior("Animation").setAnimationName("static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl3"), gdjs.levelscreenCode.GDlvl3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelscreenCode.GDlvl3Objects1.length;i<l;++i) {
    if ( gdjs.levelscreenCode.GDlvl3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelscreenCode.GDlvl3Objects1[k] = gdjs.levelscreenCode.GDlvl3Objects1[i];
        ++k;
    }
}
gdjs.levelscreenCode.GDlvl3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.levelscreenCode.GDlvl3Objects1 */
{for(var i = 0, len = gdjs.levelscreenCode.GDlvl3Objects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDlvl3Objects1[i].getBehavior("Animation").setAnimationName("hover");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelthree", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 179, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("gold");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 179, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("silver");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "complete");
}
}
if (isConditionTrue_0) {
gdjs.levelscreenCode.GDmedalObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelscreenCode.mapOfGDgdjs_9546levelscreenCode_9546GDmedalObjects1Objects, 179, 65, "");
}{for(var i = 0, len = gdjs.levelscreenCode.GDmedalObjects1.length ;i < len;++i) {
    gdjs.levelscreenCode.GDmedalObjects1[i].getBehavior("Animation").setAnimationName("bronze");
}
}}

}


};

gdjs.levelscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelscreenCode.GDlvl1Objects1.length = 0;
gdjs.levelscreenCode.GDlvl1Objects2.length = 0;
gdjs.levelscreenCode.GDlvl2Objects1.length = 0;
gdjs.levelscreenCode.GDlvl2Objects2.length = 0;
gdjs.levelscreenCode.GDlvl3Objects1.length = 0;
gdjs.levelscreenCode.GDlvl3Objects2.length = 0;
gdjs.levelscreenCode.GDcrowObjects1.length = 0;
gdjs.levelscreenCode.GDcrowObjects2.length = 0;
gdjs.levelscreenCode.GDshiftObjects1.length = 0;
gdjs.levelscreenCode.GDshiftObjects2.length = 0;
gdjs.levelscreenCode.GDredtileObjects1.length = 0;
gdjs.levelscreenCode.GDredtileObjects2.length = 0;
gdjs.levelscreenCode.GDwertileObjects1.length = 0;
gdjs.levelscreenCode.GDwertileObjects2.length = 0;
gdjs.levelscreenCode.GDemeraldObjects1.length = 0;
gdjs.levelscreenCode.GDemeraldObjects2.length = 0;
gdjs.levelscreenCode.GDbarrierObjects1.length = 0;
gdjs.levelscreenCode.GDbarrierObjects2.length = 0;
gdjs.levelscreenCode.GDmedalObjects1.length = 0;
gdjs.levelscreenCode.GDmedalObjects2.length = 0;
gdjs.levelscreenCode.GDshadowObjects1.length = 0;
gdjs.levelscreenCode.GDshadowObjects2.length = 0;
gdjs.levelscreenCode.GDtimerObjects1.length = 0;
gdjs.levelscreenCode.GDtimerObjects2.length = 0;
gdjs.levelscreenCode.GDspikeObjects1.length = 0;
gdjs.levelscreenCode.GDspikeObjects2.length = 0;

gdjs.levelscreenCode.eventsList0(runtimeScene);
gdjs.levelscreenCode.GDlvl1Objects1.length = 0;
gdjs.levelscreenCode.GDlvl1Objects2.length = 0;
gdjs.levelscreenCode.GDlvl2Objects1.length = 0;
gdjs.levelscreenCode.GDlvl2Objects2.length = 0;
gdjs.levelscreenCode.GDlvl3Objects1.length = 0;
gdjs.levelscreenCode.GDlvl3Objects2.length = 0;
gdjs.levelscreenCode.GDcrowObjects1.length = 0;
gdjs.levelscreenCode.GDcrowObjects2.length = 0;
gdjs.levelscreenCode.GDshiftObjects1.length = 0;
gdjs.levelscreenCode.GDshiftObjects2.length = 0;
gdjs.levelscreenCode.GDredtileObjects1.length = 0;
gdjs.levelscreenCode.GDredtileObjects2.length = 0;
gdjs.levelscreenCode.GDwertileObjects1.length = 0;
gdjs.levelscreenCode.GDwertileObjects2.length = 0;
gdjs.levelscreenCode.GDemeraldObjects1.length = 0;
gdjs.levelscreenCode.GDemeraldObjects2.length = 0;
gdjs.levelscreenCode.GDbarrierObjects1.length = 0;
gdjs.levelscreenCode.GDbarrierObjects2.length = 0;
gdjs.levelscreenCode.GDmedalObjects1.length = 0;
gdjs.levelscreenCode.GDmedalObjects2.length = 0;
gdjs.levelscreenCode.GDshadowObjects1.length = 0;
gdjs.levelscreenCode.GDshadowObjects2.length = 0;
gdjs.levelscreenCode.GDtimerObjects1.length = 0;
gdjs.levelscreenCode.GDtimerObjects2.length = 0;
gdjs.levelscreenCode.GDspikeObjects1.length = 0;
gdjs.levelscreenCode.GDspikeObjects2.length = 0;


return;

}

gdjs['levelscreenCode'] = gdjs.levelscreenCode;
