// CASE DATA FILE — contains only the specific content for this one case.
// The generic player (case.html) reads this object to run the simulation.
// To build a new case later, copy this file, change the content, and
// give it a new activity_id.

window.CASE_DATA = {

  id: 'jordan_gad_mdd_v1',

  referral: {
    clientLine: 'Jordan R., age 16, 10th grade.',
    referredBy: 'Homeroom teacher, following a conversation with the school counselor.',
    reason: '"Jordan\'s grades have dropped over the last two terms. Teachers report Jordan seems distracted and asks to leave class to go to the nurse\'s office fairly often, usually mentioning a stomachache or headache. A friend mentioned Jordan has been more withdrawn lately. Teacher would like this looked into."'
  },

  questions: [
    {
      id:'sleep', tag:'Sleep & rest',
      text:'Ask about sleep patterns',
      note:'"I have a hard time falling asleep most nights — my mind just keeps going over stuff. I\'m tired a lot during the day."'
    },
    {
      id:'mood', tag:'Mood & interest',
      text:'Ask whether Jordan still enjoys things',
      note:'"I still like hanging out with my friends and playing guitar when I get the chance. I don\'t feel sad, exactly — more like keyed up. It\'s hard to just relax."'
    },
    {
      id:'depression_screen', tag:'Depression screen',
      text:'Ask about hopelessness, self-worth, and appetite',
      note:'"No, I don\'t feel hopeless, or like something\'s wrong with me. I just can\'t relax. My appetite\'s the same as always — I still eat lunch with my friends every day."'
    },
    {
      id:'worry', tag:'Nature of the worry',
      text:'Ask what Jordan worries about',
      note:'"Kind of everything, honestly. Grades, whether my friends are mad at me, if I locked the door, if my parents are okay when they\'re driving. It jumps around. I know some of it doesn\'t make sense but I can\'t turn it off."'
    },
    {
      id:'duration', tag:'Timeline',
      text:'Ask how long this has been going on',
      note:'"Since around the start of the school year — so about seven months now. It\'s not really tied to one specific thing that happened."'
    },
    {
      id:'physical', tag:'Physical symptoms',
      text:'Ask about the stomachaches and headaches',
      note:'"Yeah, my stomach gets tight and my shoulders hurt by the end of the day. The nurse checked me out and said there\'s nothing physically wrong. I also have a hard time focusing in class because my mind keeps drifting back to whatever I\'m worried about."'
    },
    {
      id:'trigger', tag:'Possible trigger',
      text:'Ask if anything specific happened around when this started',
      note:'"There was a big regional swim meet back in October — I was really stressed about that. But thinking about it more... I was already worried about a bunch of unrelated stuff before that, and it hasn\'t let up since the meet ended months ago."'
    },
    {
      id:'safety', tag:'Safety check',
      text:'Ask directly about safety — any thoughts of self-harm',
      note:'"No, nothing like that. I just feel wound up all the time, not hopeless." (Good practice: this is a screening question worth asking in every real interview, regardless of the answer.)'
    }
  ],

  safetyLabel: 'Denies current thoughts of self-harm',

  symptomTruth: {
    excessive_worry:true,
    multiple_domains:true,
    restlessness:true,
    muscle_tension:true,
    concentration:true,
    sleep:true,
    duration:true,
    depressed_mood:false,
    anhedonia:false,
    appetite_change:false,
    worthlessness_hopelessness:false,
    specific_stressor:false
  },

  gadLabels: {
    excessive_worry:'Excessive, hard-to-control worry',
    multiple_domains:'Worry spans multiple areas of life',
    restlessness:'Restlessness or feeling "keyed up"',
    muscle_tension:'Muscle tension',
    concentration:'Trouble concentrating',
    sleep:'Sleep disturbance',
    duration:'Present most days for 6+ months'
  },
  gadColumnTitle: 'Generalized Anxiety — Symptom Checklist',

  mddLabels: {
    depressed_mood:'Depressed or sad mood, most of the day',
    anhedonia:'Loss of interest or pleasure in activities',
    appetite_change:'Significant appetite or weight change',
    worthlessness_hopelessness:'Feelings of worthlessness, guilt, or hopelessness'
  },
  mddColumnTitle: 'Major Depression — Symptom Checklist',

  otherLabels: {
    specific_stressor:'Symptoms tied to one identifiable stressor'
  },

  dxOptions: [
    {
      id:'gad', name:'Generalized Anxiety Disorder',
      blurb:'Persistent, hard-to-control worry across several areas of life, with physical signs like tension or restlessness',
      correct:true,
      explain:`Jordan's pattern fits generalized anxiety well: worry that jumps between several unrelated topics (school, relationships, family safety), lasting well over six months, paired with muscle tension, restlessness, poor sleep, and trouble concentrating — all without the flat, joyless mood or loss of interest that would point toward depression instead. The stomachaches and headaches are common physical companions to chronic worry in teens, which is often why anxiety gets mistaken for a physical illness at first.`
    },
    {
      id:'mdd', name:'Major Depressive Disorder',
      blurb:'Persistent low mood or loss of interest in most activities, most of the day, most days',
      correct:false,
      explain:`Depression was a reasonable hypothesis to test given the grade drop and withdrawal, but Jordan explicitly still enjoys friends and guitar — that preserved interest, combined with a "keyed up" rather than flat or hopeless mood, points away from depression and toward an anxiety pattern instead. Grades slipping and pulling back from friends can be a byproduct of anxiety too, not just depression — which is exactly why it's worth asking about mood and interest directly rather than assuming from the referral note alone.`
    },
    {
      id:'adj', name:'Adjustment Disorder',
      blurb:'Emotional or behavioral symptoms that develop in response to a specific identifiable stressor, within three months of it',
      correct:false,
      explain:`Adjustment disorder is diagnosed in reaction to a specific, identifiable stressor — a move, a breakup, a family event. Jordan's worry isn't tied to one triggering event; it's spread across many unconnected areas of life and has been building gradually for about seven months, which points toward a more generalized pattern rather than a reaction to one specific change.`
    },
    {
      id:'normal', name:'Normal Adolescent Stress — no diagnosis needed',
      blurb:'Everyday stress that comes and goes without significantly interfering with daily functioning',
      correct:false,
      explain:`Some stress is a normal part of being 16 — the difference here is impact and control. Jordan describes worry that's hard to turn off, has lasted months, and is now affecting grades, sleep, and physical health. That combination of duration, uncontrollability, and functional impact is what separates an everyday stressful patch from a pattern worth a clinical picture.`
    }
  ],

  debriefTrapText: 'One note in this case was designed as a trap: the swim meet. It\'s easy to grab onto a specific event mentioned near where symptoms started and assume it\'s the cause — but a real trigger should explain the timing (starts after, often resolves once the stressor passes). Jordan\'s worry did neither. Watching for that gap between "mentioned nearby" and "actually explains it" is a habit worth building early.',

  trapCriterionKey: 'specific_stressor'
};
