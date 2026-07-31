// CASE DATA FILE — contains only the specific content for this one case.
// The generic player (case.html) reads this object to run the simulation.
// To build a new case later, copy this file, change the content, and
// give it a new activity_id.

window.CASE_DATA = {

  id: 'jordan_gad_mdd_v1',

  referral: {
    clientLine: 'Jordan R., age 16, 10th grade.',
    referredBy: 'Homeroom teacher, following a conversation with the school counselor.',
    reason: '"Jordan\'s grades have dropped over the last two terms. Teachers report Jordan seems distracted and asks to leave class to go to the nurse\'s office fairly often, usually mentioning a stomachache or headache. A friend mentioned Jordan has been more withdrawn lately. Teacher would like this looked into."',
    background: [
      {
        label: 'Family & Home',
        text: 'Jordan lives with both parents and a younger sibling. The household is generally described as stable and supportive, though Jordan\'s parents mention they\'ve been more stressed than usual lately about household finances — nothing severe, but noticeable dinner-table conversation over the past several months.'
      },
      {
        label: 'Academic History',
        text: 'Prior to this year, Jordan was a consistent, well-organized student — mostly A\'s and B\'s, rarely missing an assignment. The drop in grades over the last two terms represents a real change from that baseline, not a longstanding pattern.'
      },
      {
        label: 'Social Life',
        text: 'Jordan has a small, close-knit group of friends going back to middle school. Recently, Jordan stopped attending a weekly school club that used to be a regular part of the week, and a couple of friends have mentioned Jordan seeming "somewhere else" during hangouts, even while still showing up and talking.'
      },
      {
        label: 'Temperament',
        text: 'Parents describe Jordan as having always been "a bit of a worrier," even as a younger kid — the type to double-check homework was in the backpack three times before leaving for school, or ask a lot of "what if" questions before school trips.'
      },
      {
        label: 'Extracurriculars',
        text: 'Jordan was a member of the competitive swim team and recently stepped back from it, shortly after a big regional meet this past October.'
      },
      {
        label: 'Medical History',
        text: 'Per Jordan\'s medical chart: a physical exam and bloodwork were completed several weeks ago at the family\'s request, including thyroid screening. All results came back within normal limits. No medical cause was identified for the reported stomachaches.'
      }
    ]
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

  collateral: {
    teacher: '"Honestly, my first thought was that something might be going on at home — kids who suddenly seem distracted and withdrawn like this usually have something happening there. I mentioned it to the school counselor, and she said as far as she knew, things at home seemed fine. So I\'m not sure what to make of that."',
    parent: '"Jordan has always been a bit of a worrier, even as a little kid, but this year it feels more constant — a lot more \'what if\' questions before things, even small stuff. Jordan still wants to eat dinner with us, still wants to see friends, so it doesn\'t feel like sadness to us. More like Jordan just can\'t settle down."'
  },

  disorderReference: [
    {
      name: 'Generalized Anxiety Disorder (GAD)',
      summary: 'A pattern of excessive, hard-to-control worry that shows up across several unrelated areas of life (school, relationships, safety of loved ones, etc.) rather than being focused on one specific thing. To meet criteria, the worry needs to be present more days than not for at least six months, and be paired with at least a few physical or cognitive symptoms — things like muscle tension, restlessness or feeling "on edge," poor sleep, or trouble concentrating. The worry itself feels disproportionate to the actual likelihood or impact of what\'s being worried about, and the person often can\'t simply talk themselves out of it.'
    },
    {
      name: 'Major Depressive Disorder (MDD)',
      summary: 'A period of at least two weeks with a persistently low or depressed mood, and/or a marked loss of interest or pleasure in activities that used to feel enjoyable — present most of the day, nearly every day. Other common features include changes in appetite or weight, sleep disturbance, fatigue, feelings of worthlessness or excessive guilt, trouble concentrating, and in more severe cases, thoughts of death. The core distinguishing feature from anxiety is the flattening of mood and interest, rather than a keyed-up, worried energy.'
    },
    {
      name: 'Adjustment Disorder',
      summary: 'Emotional or behavioral symptoms — which can look like anxiety, low mood, or a mix — that develop in direct response to a specific, identifiable stressor (a move, a breakup, a family change) within about three months of that stressor occurring. The reaction is out of proportion to what would normally be expected, or it significantly interferes with daily functioning. The key identifying feature is the clear, traceable link to one triggering event — if symptoms were already present before the stressor, or continue unchanged long after it, adjustment disorder becomes a much weaker fit.'
    },
    {
      name: 'Normal Adolescent Stress (No Diagnosis)',
      summary: 'Not a clinical diagnosis — this is the baseline everything else gets compared against. Teenagers commonly experience stress, worry, or low mood at points without it representing a disorder, especially around exams, social conflict, or big life changes. What separates ordinary stress from a diagnosable condition is typically severity, duration, and functional impact: does it significantly interfere with school, relationships, or daily life, and does it persist well beyond what the situation would normally call for?'
    }
  ],

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
