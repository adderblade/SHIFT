gdjs.startscreenCode = {};
gdjs.startscreenCode.localVariables = [];
gdjs.startscreenCode.GDSTARTObjects1= [];
gdjs.startscreenCode.GDSTARTObjects2= [];
gdjs.startscreenCode.GDCONTROLSObjects1= [];
gdjs.startscreenCode.GDCONTROLSObjects2= [];
gdjs.startscreenCode.GDcrowObjects1= [];
gdjs.startscreenCode.GDcrowObjects2= [];
gdjs.startscreenCode.GDshiftObjects1= [];
gdjs.startscreenCode.GDshiftObjects2= [];
gdjs.startscreenCode.GDredtileObjects1= [];
gdjs.startscreenCode.GDredtileObjects2= [];
gdjs.startscreenCode.GDwertileObjects1= [];
gdjs.startscreenCode.GDwertileObjects2= [];
gdjs.startscreenCode.GDemeraldObjects1= [];
gdjs.startscreenCode.GDemeraldObjects2= [];
gdjs.startscreenCode.GDbarrierObjects1= [];
gdjs.startscreenCode.GDbarrierObjects2= [];
gdjs.startscreenCode.GDmedalObjects1= [];
gdjs.startscreenCode.GDmedalObjects2= [];
gdjs.startscreenCode.GDshadowObjects1= [];
gdjs.startscreenCode.GDshadowObjects2= [];
gdjs.startscreenCode.GDtimerObjects1= [];
gdjs.startscreenCode.GDtimerObjects2= [];
gdjs.startscreenCode.GDspikeObjects1= [];
gdjs.startscreenCode.GDspikeObjects2= [];


gdjs.startscreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("START"), gdjs.startscreenCode.GDSTARTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startscreenCode.GDSTARTObjects1.length;i<l;++i) {
    if ( gdjs.startscreenCode.GDSTARTObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startscreenCode.GDSTARTObjects1[k] = gdjs.startscreenCode.GDSTARTObjects1[i];
        ++k;
    }
}
gdjs.startscreenCode.GDSTARTObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelscreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CONTROLS"), gdjs.startscreenCode.GDCONTROLSObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startscreenCode.GDCONTROLSObjects1.length;i<l;++i) {
    if ( gdjs.startscreenCode.GDCONTROLSObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startscreenCode.GDCONTROLSObjects1[k] = gdjs.startscreenCode.GDCONTROLSObjects1[i];
        ++k;
    }
}
gdjs.startscreenCode.GDCONTROLSObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "controls", false);
}}

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


};

gdjs.startscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startscreenCode.GDSTARTObjects1.length = 0;
gdjs.startscreenCode.GDSTARTObjects2.length = 0;
gdjs.startscreenCode.GDCONTROLSObjects1.length = 0;
gdjs.startscreenCode.GDCONTROLSObjects2.length = 0;
gdjs.startscreenCode.GDcrowObjects1.length = 0;
gdjs.startscreenCode.GDcrowObjects2.length = 0;
gdjs.startscreenCode.GDshiftObjects1.length = 0;
gdjs.startscreenCode.GDshiftObjects2.length = 0;
gdjs.startscreenCode.GDredtileObjects1.length = 0;
gdjs.startscreenCode.GDredtileObjects2.length = 0;
gdjs.startscreenCode.GDwertileObjects1.length = 0;
gdjs.startscreenCode.GDwertileObjects2.length = 0;
gdjs.startscreenCode.GDemeraldObjects1.length = 0;
gdjs.startscreenCode.GDemeraldObjects2.length = 0;
gdjs.startscreenCode.GDbarrierObjects1.length = 0;
gdjs.startscreenCode.GDbarrierObjects2.length = 0;
gdjs.startscreenCode.GDmedalObjects1.length = 0;
gdjs.startscreenCode.GDmedalObjects2.length = 0;
gdjs.startscreenCode.GDshadowObjects1.length = 0;
gdjs.startscreenCode.GDshadowObjects2.length = 0;
gdjs.startscreenCode.GDtimerObjects1.length = 0;
gdjs.startscreenCode.GDtimerObjects2.length = 0;
gdjs.startscreenCode.GDspikeObjects1.length = 0;
gdjs.startscreenCode.GDspikeObjects2.length = 0;

gdjs.startscreenCode.eventsList0(runtimeScene);
gdjs.startscreenCode.GDSTARTObjects1.length = 0;
gdjs.startscreenCode.GDSTARTObjects2.length = 0;
gdjs.startscreenCode.GDCONTROLSObjects1.length = 0;
gdjs.startscreenCode.GDCONTROLSObjects2.length = 0;
gdjs.startscreenCode.GDcrowObjects1.length = 0;
gdjs.startscreenCode.GDcrowObjects2.length = 0;
gdjs.startscreenCode.GDshiftObjects1.length = 0;
gdjs.startscreenCode.GDshiftObjects2.length = 0;
gdjs.startscreenCode.GDredtileObjects1.length = 0;
gdjs.startscreenCode.GDredtileObjects2.length = 0;
gdjs.startscreenCode.GDwertileObjects1.length = 0;
gdjs.startscreenCode.GDwertileObjects2.length = 0;
gdjs.startscreenCode.GDemeraldObjects1.length = 0;
gdjs.startscreenCode.GDemeraldObjects2.length = 0;
gdjs.startscreenCode.GDbarrierObjects1.length = 0;
gdjs.startscreenCode.GDbarrierObjects2.length = 0;
gdjs.startscreenCode.GDmedalObjects1.length = 0;
gdjs.startscreenCode.GDmedalObjects2.length = 0;
gdjs.startscreenCode.GDshadowObjects1.length = 0;
gdjs.startscreenCode.GDshadowObjects2.length = 0;
gdjs.startscreenCode.GDtimerObjects1.length = 0;
gdjs.startscreenCode.GDtimerObjects2.length = 0;
gdjs.startscreenCode.GDspikeObjects1.length = 0;
gdjs.startscreenCode.GDspikeObjects2.length = 0;


return;

}

gdjs['startscreenCode'] = gdjs.startscreenCode;
