/***************** 
 * Untitled *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trials_practiseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_practiseLoopBegin(trials_practiseLoopScheduler));
flowScheduler.add(trials_practiseLoopScheduler);
flowScheduler.add(trials_practiseLoopEnd);



flowScheduler.add(Start_experimentRoutineBegin());
flowScheduler.add(Start_experimentRoutineEachFrame());
flowScheduler.add(Start_experimentRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(ThanksRoutineBegin());
flowScheduler.add(ThanksRoutineEachFrame());
flowScheduler.add(ThanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var Intro_text;
var key_start_practise;
var practice_sentenceClock;
var text_p;
var practice_qsClock;
var practise_q;
var qresp_p;
var Start_experimentClock;
var text_2;
var key_start;
var trialClock;
var text;
var qsClock;
var question;
var qresp;
var msg;
var corr;
var ThanksClock;
var feedback;
var end_exp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  Intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Intro_text',
    text: 'Welcome to the experiment!\n\nIn this study, you will be presented with short sentences, one word at a time.\nEvery sentence will first be presented as a series of dashes on the screen, where every dash represents a letter in a word.\nA phrase like "The quick brown fox" will look like this:\n    \n--- ----- ----- ---\n\nWhen you press space, the first word will be displayed, like this:\n    \nThe ----- ----- ---\n\nIf you press space again, the first word will disappear and be replaced by the second, like this:\n    \n--- quick ----- ---\n\nContinuously pressing space will therefore take you to the end of the sentence, one word at a time. \n\nAfter a few sentences, you will be presented with a question, which you will answer with either YES (A, the green button) or NO (S, the red button). As soon as you press the green or the red button you will move on to the next sentence. Not all sentences will be followed by a question!\n \n\nFirst, you will practice on three sentences.\n\nIf you have any questions, now or during the practice, raise your hand and we\'ll come and help you.\n\nPress the red or green button when you are ready to read the practice sentences!\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_start_practise = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_sentence"
  practice_sentenceClock = new util.Clock();
  text_p = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_p',
    text: 'test',
    font: 'Lucida Console',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice_qs"
  practice_qsClock = new util.Clock();
  practise_q = new visual.TextStim({
    win: psychoJS.window,
    name: 'practise_q',
    text: '',
    font: 'Lucida Console',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 10.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  qresp_p = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Start_experiment"
  Start_experimentClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Great! When you press the red or green key again, the experiment will begin and we will register your answers to the questions.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'test ',
    font: 'Lucida Console',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 10, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "qs"
  qsClock = new util.Clock();
  question = new visual.TextStim({
    win: psychoJS.window,
    name: 'question',
    text: '',
    font: 'Lucida Console',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 10, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  qresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from create_msg
  msg = ("Tack f\u00f6r hj\u00e4lpen!" + os.linesep);
  corr = [];
  
  // Initialize components for Routine "Thanks"
  ThanksClock = new util.Clock();
  feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_exp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_start_practise_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    key_start_practise.keys = undefined;
    key_start_practise.rt = undefined;
    _key_start_practise_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(Intro_text);
    InstructionsComponents.push(key_start_practise);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Intro_text* updates
    if (t >= 0.0 && Intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Intro_text.tStart = t;  // (not accounting for frame time here)
      Intro_text.frameNStart = frameN;  // exact frame index
      
      Intro_text.setAutoDraw(true);
    }
    
    
    // *key_start_practise* updates
    if (t >= 0.0 && key_start_practise.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_start_practise.tStart = t;  // (not accounting for frame time here)
      key_start_practise.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_start_practise.clock.reset();
      key_start_practise.start();
      key_start_practise.clearEvents();
    }
    
    if (key_start_practise.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_start_practise.getKeys({keyList: ['a', 's'], waitRelease: false});
      _key_start_practise_allKeys = _key_start_practise_allKeys.concat(theseKeys);
      if (_key_start_practise_allKeys.length > 0) {
        key_start_practise.keys = _key_start_practise_allKeys[_key_start_practise_allKeys.length - 1].name;  // just the last key pressed
        key_start_practise.rt = _key_start_practise_allKeys[_key_start_practise_allKeys.length - 1].rt;
        key_start_practise.duration = _key_start_practise_allKeys[_key_start_practise_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    key_start_practise.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_practise;
function trials_practiseLoopBegin(trials_practiseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_practise = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.xlsx',
      seed: undefined, name: 'trials_practise'
    });
    psychoJS.experiment.addLoop(trials_practise); // add the loop to the experiment
    currentLoop = trials_practise;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_practise of trials_practise) {
      snapshot = trials_practise.getSnapshot();
      trials_practiseLoopScheduler.add(importConditions(snapshot));
      trials_practiseLoopScheduler.add(practice_sentenceRoutineBegin(snapshot));
      trials_practiseLoopScheduler.add(practice_sentenceRoutineEachFrame());
      trials_practiseLoopScheduler.add(practice_sentenceRoutineEnd(snapshot));
      trials_practiseLoopScheduler.add(practice_qsRoutineBegin(snapshot));
      trials_practiseLoopScheduler.add(practice_qsRoutineEachFrame());
      trials_practiseLoopScheduler.add(practice_qsRoutineEnd(snapshot));
      trials_practiseLoopScheduler.add(trials_practiseLoopEndIteration(trials_practiseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_practiseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_practise);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_practiseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'List_1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(qsRoutineBegin(snapshot));
      trialsLoopScheduler.add(qsRoutineEachFrame());
      trialsLoopScheduler.add(qsRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_sentenceComponents;
function practice_sentenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_sentence' ---
    t = 0;
    practice_sentenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('practice_sentence.started', globalClock.getTime());
    // keep track of which components have finished
    practice_sentenceComponents = [];
    practice_sentenceComponents.push(text_p);
    
    for (const thisComponent of practice_sentenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_sentenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_sentence' ---
    // get current time
    t = practice_sentenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_p* updates
    if (t >= 0.0 && text_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_p.tStart = t;  // (not accounting for frame time here)
      text_p.frameNStart = frameN;  // exact frame index
      
      text_p.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_sentenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_sentenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_sentence' ---
    for (const thisComponent of practice_sentenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_sentence.stopped', globalClock.getTime());
    // the Routine "practice_sentence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _qresp_p_allKeys;
var practice_qsComponents;
function practice_qsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_qs' ---
    t = 0;
    practice_qsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('practice_qs.started', globalClock.getTime());
    practise_q.setText(Question);
    qresp_p.keys = undefined;
    qresp_p.rt = undefined;
    _qresp_p_allKeys = [];
    // keep track of which components have finished
    practice_qsComponents = [];
    practice_qsComponents.push(practise_q);
    practice_qsComponents.push(qresp_p);
    
    for (const thisComponent of practice_qsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_qsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_qs' ---
    // get current time
    t = practice_qsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practise_q* updates
    if (t >= 0.0 && practise_q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practise_q.tStart = t;  // (not accounting for frame time here)
      practise_q.frameNStart = frameN;  // exact frame index
      
      practise_q.setAutoDraw(true);
    }
    
    
    // *qresp_p* updates
    if (t >= 0.0 && qresp_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qresp_p.tStart = t;  // (not accounting for frame time here)
      qresp_p.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      qresp_p.clock.reset();
      qresp_p.start();
      qresp_p.clearEvents();
    }
    
    if (qresp_p.status === PsychoJS.Status.STARTED) {
      let theseKeys = qresp_p.getKeys({keyList: ['a', 's'], waitRelease: false});
      _qresp_p_allKeys = _qresp_p_allKeys.concat(theseKeys);
      if (_qresp_p_allKeys.length > 0) {
        qresp_p.keys = _qresp_p_allKeys[_qresp_p_allKeys.length - 1].name;  // just the last key pressed
        qresp_p.rt = _qresp_p_allKeys[_qresp_p_allKeys.length - 1].rt;
        qresp_p.duration = _qresp_p_allKeys[_qresp_p_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_qsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_qsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_qs' ---
    for (const thisComponent of practice_qsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_qs.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(qresp_p.corr, level);
    }
    psychoJS.experiment.addData('qresp_p.keys', qresp_p.keys);
    if (typeof qresp_p.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('qresp_p.rt', qresp_p.rt);
        psychoJS.experiment.addData('qresp_p.duration', qresp_p.duration);
        routineTimer.reset();
        }
    
    qresp_p.stop();
    // the Routine "practice_qs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_start_allKeys;
var Start_experimentComponents;
function Start_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Start_experiment' ---
    t = 0;
    Start_experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Start_experiment.started', globalClock.getTime());
    key_start.keys = undefined;
    key_start.rt = undefined;
    _key_start_allKeys = [];
    // keep track of which components have finished
    Start_experimentComponents = [];
    Start_experimentComponents.push(text_2);
    Start_experimentComponents.push(key_start);
    
    for (const thisComponent of Start_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Start_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Start_experiment' ---
    // get current time
    t = Start_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *key_start* updates
    if (t >= 0.0 && key_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_start.tStart = t;  // (not accounting for frame time here)
      key_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_start.clearEvents(); });
    }
    
    if (key_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_start.getKeys({keyList: ['a', 's'], waitRelease: false});
      _key_start_allKeys = _key_start_allKeys.concat(theseKeys);
      if (_key_start_allKeys.length > 0) {
        key_start.keys = _key_start_allKeys[_key_start_allKeys.length - 1].name;  // just the last key pressed
        key_start.rt = _key_start_allKeys[_key_start_allKeys.length - 1].rt;
        key_start.duration = _key_start_allKeys[_key_start_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Start_experimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Start_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Start_experiment' ---
    for (const thisComponent of Start_experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Start_experiment.stopped', globalClock.getTime());
    key_start.stop();
    // the Routine "Start_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _qresp_allKeys;
var qsComponents;
function qsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'qs' ---
    t = 0;
    qsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('qs.started', globalClock.getTime());
    question.setText(Question);
    qresp.keys = undefined;
    qresp.rt = undefined;
    _qresp_allKeys = [];
    // keep track of which components have finished
    qsComponents = [];
    qsComponents.push(question);
    qsComponents.push(qresp);
    
    for (const thisComponent of qsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function qsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'qs' ---
    // get current time
    t = qsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question* updates
    if (t >= 0.0 && question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question.tStart = t;  // (not accounting for frame time here)
      question.frameNStart = frameN;  // exact frame index
      
      question.setAutoDraw(true);
    }
    
    
    // *qresp* updates
    if (t >= 0.0 && qresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qresp.tStart = t;  // (not accounting for frame time here)
      qresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { qresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { qresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { qresp.clearEvents(); });
    }
    
    if (qresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = qresp.getKeys({keyList: ['a', 's'], waitRelease: false});
      _qresp_allKeys = _qresp_allKeys.concat(theseKeys);
      if (_qresp_allKeys.length > 0) {
        qresp.keys = _qresp_allKeys[_qresp_allKeys.length - 1].name;  // just the last key pressed
        qresp.rt = _qresp_allKeys[_qresp_allKeys.length - 1].rt;
        qresp.duration = _qresp_allKeys[_qresp_allKeys.length - 1].duration;
        // was this correct?
        if (qresp.keys == CorrAns) {
            qresp.corr = 1;
        } else {
            qresp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of qsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function qsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'qs' ---
    for (const thisComponent of qsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('qs.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (qresp.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         qresp.corr = 1;  // correct non-response
      } else {
         qresp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(qresp.corr, level);
    }
    psychoJS.experiment.addData('qresp.keys', qresp.keys);
    psychoJS.experiment.addData('qresp.corr', qresp.corr);
    if (typeof qresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('qresp.rt', qresp.rt);
        psychoJS.experiment.addData('qresp.duration', qresp.duration);
        routineTimer.reset();
        }
    
    qresp.stop();
    // the Routine "qs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_exp_allKeys;
var ThanksComponents;
function ThanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thanks' ---
    t = 0;
    ThanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Thanks.started', globalClock.getTime());
    feedback.setText(msg);
    end_exp.keys = undefined;
    end_exp.rt = undefined;
    _end_exp_allKeys = [];
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    
    // Genereate filename for results 
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment 
    let data0bj = psychoJS._experiment._trialsData;
    
    // Covert data object to CSV 
    let data = [Object.keys(data0bj[0])].concat(data0bj).map(it => { 
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', 
        Accept: '*/*', 
        }, 
        body: JSON.stringify({
            experimentID: 'uClNy6eSF5pF', // ★ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ★ 
            filename: filename, 
            data: data, 
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    // keep track of which components have finished
    ThanksComponents = [];
    ThanksComponents.push(feedback);
    ThanksComponents.push(end_exp);
    
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ThanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thanks' ---
    // get current time
    t = ThanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback* updates
    if (t >= 0.0 && feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback.tStart = t;  // (not accounting for frame time here)
      feedback.frameNStart = frameN;  // exact frame index
      
      feedback.setAutoDraw(true);
    }
    
    
    // *end_exp* updates
    if (t >= 0.0 && end_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_exp.tStart = t;  // (not accounting for frame time here)
      end_exp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_exp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_exp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_exp.clearEvents(); });
    }
    
    if (end_exp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_exp.getKeys({keyList: ['q'], waitRelease: false});
      _end_exp_allKeys = _end_exp_allKeys.concat(theseKeys);
      if (_end_exp_allKeys.length > 0) {
        end_exp.keys = _end_exp_allKeys[_end_exp_allKeys.length - 1].name;  // just the last key pressed
        end_exp.rt = _end_exp_allKeys[_end_exp_allKeys.length - 1].rt;
        end_exp.duration = _end_exp_allKeys[_end_exp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thanks' ---
    for (const thisComponent of ThanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Thanks.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_exp.corr, level);
    }
    psychoJS.experiment.addData('end_exp.keys', end_exp.keys);
    if (typeof end_exp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_exp.rt', end_exp.rt);
        psychoJS.experiment.addData('end_exp.duration', end_exp.duration);
        routineTimer.reset();
        }
    
    end_exp.stop();
    // the Routine "Thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
