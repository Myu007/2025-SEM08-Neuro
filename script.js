const questions = [
  {
    question: "Case of 40-year-old male presents with transient dysphagia, episodic headache and increased senstivity to light. He also feels some weakness on the left side of body. What is your diagnosis?",
    answers: [
      { text: "Retinal migraine", correct: true },
      { text: "Ophthalmoplegic migraine", correct: false },
      { text: "Migraine sine migraine", correct: false },
      { text: "Focal migraine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year-old woman complains of a constant headache that is worse in the morning and improves throughout the day. She has a history of intermittent visual disturbances and reports recent episodes of scalp tenderness. Her ESR is elevated. What is the most likely diagnosis?",
    answers: [
      { text: "Temporal arteritis", correct: true },
      { text: "Migraine", correct: false },
      { text: "Tension-type headache", correct: false },
      { text: "Cluster headache", correct: false },
      { text: "Intracranial hypertension", correct: false },
    ],
  },
  {
    question: "A 24-year-old female, Ms.Deepa, with a previous history of recurrent headaches, originally diagnosed 12 months earlier as migraine without aura. The patient has returned to her primary care physician for medical follow-up of her migraines and to discuss options for therapy. Which of the following drug(s) can be used as a prophylaxis for migraine?",
    answers: [
      { text: "Amitriptyline", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Sumatriptan", correct: false },
      { text: "Ergotamine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 28-year-old female presents to her physician complaining of recurrent headaches. She describes them as throbbing, unilateral, and often accompanied by nausea, vomiting, and sensitivity to light and sound. These episodes typically last from 4 to 72 hours and are often preceded by visual disturbances such as flashing lights or blind spots. What is the most likely diagnosis for this patient?",
    answers: [
      { text: "Migraine", correct: true },
      { text: "Cluster headache", correct: false },
      { text: "Tension-type headache", correct: false },
      { text: "Sinus headache", correct: false },
      { text: "Trigeminal neuralgia", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman presents with a history of recurrent headaches, which are typically unilateral and throbbing. The headaches last between 4-72 hours and are associated with nausea, vomiting, and photophobia. She often notices visual disturbances (aura) before the headache starts. What is the most likely diagnosis?",
    answers: [
      { text: "Migraine", correct: true },
      { text: "Cluster headache", correct: false },
      { text: "Tension-type headache", correct: false },
      { text: "Sinus headache", correct: false },
      { text: "Trigeminal neuralgia", correct: false },
    ],
  },
  {
    question: "A 40-year-old man presents with a severe headache that started suddenly while he was at work. He describes the pain as \"the worst headache of his life.\" The pain is located around his neck and back of the head. He also reports nausea and photophobia. On examination, his blood pressure is elevated, and he has a stiff neck. What is the most likely diagnosis?",
    answers: [
      { text: "Subarachnoid hemorrhage", correct: true },
      { text: "Tension-type headache", correct: false },
      { text: "Cluster headache", correct: false },
      { text: "Migraine", correct: false },
      { text: "Temporal arteritis", correct: false },
    ],
  },
  {
    question: "Pathology of which of the following system can lead to disorders of autonomic nervous system?",
    answers: [
      { text: "Either pero-ipheral or central nervous system", correct: true },
      { text: "Central nervous system", correct: false },
      { text: "nan", correct: false },
      { text: "Peripheral nervous system", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "All are examples of upper motor neuron lesion except",
    answers: [
      { text: "Anterior horn cell disease", correct: true },
      { text: "Multiple sclerosis", correct: false },
      { text: "Prion disease", correct: false },
      { text: "Tuberous sclerosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old man presents with rapid, involuntary muscle contractions that cause twisting and repetitive movements, particularly in his neck and shoulders. These movements are often worsened by stress. He has no history of trauma or neurological diseases. What is the most likely diagnosis?",
    answers: [
      { text: "Dystonia", correct: true },
      { text: "Tardive dyskinesia", correct: false },
      { text: "Parkinson’s disease", correct: false },
      { text: "Huntington’s disease", correct: false },
      { text: "Essential tremor", correct: false },
    ],
  },
  {
    question: "Pseudotumor cerebri occurs due to which vitamin toxicity?",
    answers: [
      { text: "A", correct: true },
      { text: "B12", correct: false },
      { text: "E", correct: false },
      { text: "D", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "UMN lesion is characterized by",
    answers: [
      { text: "Weakness & spasticity", correct: true },
      { text: "Fasciculations", correct: false },
      { text: "Rigidity", correct: false },
      { text: "Localized muscle atrophy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old woman presents with difficulty initiating movement and a \"shuffling\" walk. She also reports stiffness in her arms and legs, particularly when trying to move. On examination, she has a mask-like facial expression, resting tremor in both hands, and rigidity. What is the most likely diagnosis?",
    answers: [
      { text: "Parkinson's disease", correct: true },
      { text: "Huntington's disease", correct: false },
      { text: "Multiple sclerosis", correct: false },
      { text: "Amyotrophic lateral sclerosis (ALS)", correct: false },
      { text: "Wilson's disease", correct: false },
    ],
  },
  {
    question: "A 55-year-old man presents with involuntary, jerky movements of his hands, legs, and face. These movements occur at irregular intervals and are worsened by stress. He has a family history of similar symptoms. Genetic testing reveals a mutation in the HTT gene. What is the most likely diagnosis?",
    answers: [
      { text: "Huntington's disease", correct: true },
      { text: "Parkinson’s disease", correct: false },
      { text: "Essential tremor", correct: false },
      { text: "Myoclonus", correct: false },
      { text: "Tardive dyskinesia", correct: false },
    ],
  },
  {
    question: "A 60-year-old woman presents with difficulty swallowing, slurred speech, and muscle weakness in her arms and legs. She has noticed progressive weakness over the last year. On examination, she has atrophy and fasciculations in her upper and lower limbs. What is the most likely diagnosis?",
    answers: [
      { text: "Amyotrophic lateral sclerosis (ALS)", correct: true },
      { text: "Multiple sclerosis", correct: false },
      { text: "Guillain-Barré syndrome", correct: false },
      { text: "Myasthenia gravis", correct: false },
      { text: "Muscular dystrophy", correct: false },
    ],
  },
  {
    question: "A 72-year-old lady presents with nausea and vomiting and a headache for the one day. She describes the pain as one-sided and accompanied by a painful red eye, worse at night with blurring. What is the diagnosis?",
    answers: [
      { text: "Glaucoma", correct: true },
      { text: "SUNCT", correct: false },
      { text: "Migraine with Aura", correct: false },
      { text: "Cluster headache", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 61-year-old female patient presents to your clinic due to sudden episodes of left-sided facial pain for the last two days. She states that the pain feels like a 'sharp stabbing' and is a 9/10 in terms of intensity. The pain lasts about 5-10 seconds and then dissipates rapidly. The pain is often brought on by talking and cold wind. Her past medical history is significant for depression and type 2 DM. What is the diagnosis?",
    answers: [
      { text: "Trigeminal neuralgia", correct: true },
      { text: "SUNCT syndrome", correct: false },
      { text: "Giant cell arteritis", correct: false },
      { text: "paroxysmal hemicrania", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old woman experiences a dull, bilateral headache that lasts for hours. She describes the pain as a \"tight band\" around her head. The headaches are not associated with nausea, vomiting, or light sensitivity. She often experiences them during periods of high stress. What is the most likely diagnosis?",
    answers: [
      { text: "Tension-type headache", correct: true },
      { text: "Cluster headache", correct: false },
      { text: "Migraine", correct: false },
      { text: "Trigeminal neuralgia", correct: false },
      { text: "Temporal arteritis", correct: false },
    ],
  },
  {
    question: "A 60-year-old man presents with a new onset headache that is persistent and located over the temples. The headache is associated with jaw claudication, fatigue, and weight loss. His erythrocyte sedimentation rate (ESR) is elevated. What is the most likely diagnosis?",
    answers: [
      { text: "Temporal arteritis", correct: true },
      { text: "Migraine", correct: false },
      { text: "Tension-type headache", correct: false },
      { text: "Cluster headache", correct: false },
      { text: "Sinus headache", correct: false },
    ],
  },
  {
    question: "A 33-year-old woman with no significant medical history presented with complaints of headache which she described as a characteristic 'thunderclap headache'. All of the following are the differential diagnosis for 'thunderclap headache' except",
    answers: [
      { text: "Acute aneurismal haemorrhage", correct: true },
      { text: "Brain stem encephalitis", correct: false },
      { text: "Acute ischemia of mid brain", correct: false },
      { text: "Meningitis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 22-years-old man presents with a history of a headache for 6 months which is mainly in the frontal region, occasionally associated with nausea. He has been taking paracetamol 3g per day, Hydroxycodeine 50 mg 3 times a day and Aspirin 300 mg 3 times a day for a headache but only with temporary relief from symptoms no focal signs on neurological examinations. What is the diagnosis?",
    answers: [
      { text: "Analgesic abuse headache", correct: true },
      { text: "Migraine", correct: false },
      { text: "Depression associated headache", correct: false },
      { text: "Cluster headache", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman presents with a headache that lasts for 30 minutes to an hour, occurring around the same time every day for several weeks. The pain is localized to the right eye and is associated with redness, tearing, and nasal congestion. She reports the pain often wakes her up at night. What is the most likely diagnosis?",
    answers: [
      { text: "Cluster headache", correct: true },
      { text: "Tension-type headache", correct: false },
      { text: "Migraine", correct: false },
      { text: "Sinus headache", correct: false },
      { text: "Trigeminal neuralgia", correct: false },
    ],
  },
  {
    question: "A 45-year-old man presents with a headache that has been gradually worsening over the past few weeks. The pain is described as a constant, dull ache on both sides of the head. He also complains of neck stiffness and photophobia. What is the most likely diagnosis?",
    answers: [
      { text: "Cervicogenic headache", correct: true },
      { text: "Tension-type headache", correct: false },
      { text: "Migraine", correct: false },
      { text: "Sinus headache", correct: false },
      { text: "Temporal arteritis", correct: false },
    ],
  },
  {
    question: "A right-sided disc herniation at the LS-51 level typically causes which among the following symptoms?",
    answers: [
      { text: "Low back pain and right sciatica", correct: true },
      { text: "Weakness of dorsiflexion of the right foot", correct: false },
      { text: "A preserved right ankle jerk", correct: false },
      { text: "Diminution of sensation over themedial aspect of the right foot, including the great toe", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 55-year-old man presents with chronic neck pain that has been worsening over the past few months. He reports stiffness and decreased range of motion in his neck. On examination, there is tenderness over the cervical spine, and radiographs show degenerative changes at C5-C6. He also complains of tingling in his fingers. What is the most likely diagnosis?",
    answers: [
      { text: "Cervical spondylosis", correct: true },
      { text: "Cervical radiculopathy", correct: false },
      { text: "Whiplash injury", correct: false },
      { text: "Thoracic outlet syndrome", correct: false },
      { text: "Multiple sclerosis", correct: false },
    ],
  },
  {
    question: "A 70-year-old woman presents with progressive lower back pain and difficulty walking. The pain is worse with standing and walking, but improves when she bends forward or sits down. She also complains of numbness and weakness in her legs. MRI of the lumbar spine reveals narrowing of the spinal canal. What is the most likely diagnosis?",
    answers: [
      { text: "Spinal stenosis", correct: true },
      { text: "Lumbar disc herniation", correct: false },
      { text: "Spondylolisthesis", correct: false },
      { text: "Ankylosing spondylitis", correct: false },
      { text: "Sacroiliitis", correct: false },
    ],
  },
  {
    question: "A 45-year-old man presents with severe, localized neck pain that radiates to his right shoulder and arm. The pain began after a car accident where his head was jerked backward. He also reports weakness and tingling in his right hand. On examination, there is decreased sensation over the C6 dermatome, and reflexes are diminished in the right upper limb. What is the most likely diagnosis?",
    answers: [
      { text: "Cervical radiculopathy", correct: true },
      { text: "Whiplash injury", correct: false },
      { text: "Thoracic outlet syndrome", correct: false },
      { text: "Carpal tunnel syndrome", correct: false },
      { text: "Brachial plexus injury", correct: false },
    ],
  },
  {
    question: "A 46-year-old woman presented with a 25-year history of epilepsy. She had a history of focal impaired awareness with cognitive changes and behavioral arrest progressing to bilateral tonic-clonic seizures. Magnetic resonance imaging displayed asymmetry of the hippocampus, with a prominent right temporal horn of the lateral ventricle. Which of the following is the most efficacious treatment for this patient?",
    answers: [
      { text: "Amygdalo hippocampectomy", correct: true },
      { text: "Levetiracetam", correct: false },
      { text: "Primidone", correct: false },
      { text: "Vagus nerve stimulation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year patient recalls episodes where he smells a pungent odor, started sweating and loses consciousness. His family member says while unconscious he was having facial twitching with lip smacking movements. What is the most probable diagnosis?",
    answers: [
      { text: "Focal seizures", correct: true },
      { text: "Hysteria", correct: false },
      { text: "Atonic seizures", correct: false },
      { text: "Myoclonic seizures", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 24-year-old, married woman with history of seizures was recently diagnosed as a case of complex partial seizures. Which of the following anticonvulsive agent would be the MOST appropriate agent as first-line therapy in such patients?",
    answers: [
      { text: "Lamotrigine", correct: true },
      { text: "Carbamazepine", correct: false },
      { text: "Topiramate", correct: false },
      { text: "Phenytoin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 21-year-old man complains of seizures in the left arm, with progression to the left side of the face and left leg. He does not lose consciousness. What type of seizures does the patient describe?",
    answers: [
      { text: "Jacksonian seizure", correct: true },
      { text: "Generalized seizure", correct: false },
      { text: "Epileptic seizure", correct: false },
      { text: "Non-epileptic seizure", correct: false },
      { text: "Focal seizure", correct: false },
    ],
  },
  {
    question: "A patient had a head injury in road traffic accident and had lost consciousness instantaneously. After few minutes he regains consciousness. Spontaneous eye opening without any muscular weakness and is fully aware of his surroundings. GCS score is E4V5M6 . However, the patient continues to complain headache, dizziness, nausea, faintness and an episode of emesis. What is the severity of his head injury?",
    answers: [
      { text: "Minor head injury", correct: true },
      { text: "Severe head injury", correct: false },
      { text: "Intermediate severity", correct: false },
      { text: "None of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old is admitted with loss of consciousness after cocaine over-dosage. On examination BP= 200/100 with GCS of 7 /15. The right-sided pupil is dilated and shows a sluggish reaction to light. Which is not recommended for this patient?",
    answers: [
      { text: "Initiate sodium nitroprusside to achieve MAP below 130 mmHg", correct: true },
      { text: "B Administer hypertonic fluids to maintain sodium of 145mEq/dl", correct: false },
      { text: "Administer mannitol at 1g/kg body weight", correct: false },
      { text: "Neuromuscular paralysis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year-old man is brought to the emergency department after being found unconscious at home. His blood pressure is 120/80 mmHg, heart rate is 80 bpm, and respiratory rate is 12/min. On examination, the patient is unresponsive to verbal stimuli but opens his eyes in response to pain (Glasgow Coma Scale of 8). His pupils are 3 mm and react to light. CT scan of the brain reveals no acute abnormalities. What is the most likely cause of his coma?",
    answers: [
      { text: "Drug overdose", correct: true },
      { text: "Stroke", correct: false },
      { text: "Hypoglycemia", correct: false },
      { text: "Traumatic brain injury", correct: false },
      { text: "Subarachnoid hemorrhage", correct: false },
    ],
  },
  {
    question: "A 50-year-old woman is brought to the hospital after a witnessed seizure followed by a prolonged period of unconsciousness. On arrival, she is unresponsive, with a Glasgow Coma Scale score of 7. She has a history of hypertension and diabetes. Blood tests show a blood glucose level of 30 mg/dL. What is the most likely cause of her coma?",
    answers: [
      { text: "Hypoglycemia", correct: true },
      { text: "Brain tumor", correct: false },
      { text: "Meningitis", correct: false },
      { text: "Stroke", correct: false },
      { text: "Hepatic encephalopathy", correct: false },
    ],
  },
  {
    question: "Hemiplegia is commonly associated with infarction of the area of distribution of the",
    answers: [
      { text: "Middle cerebral artery", correct: true },
      { text: "Anterior cerebral artery", correct: false },
      { text: "Posterior cerebral artery", correct: false },
      { text: "Anterior communicating artery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the most common site of aneurysmal subarachnoid hemorrhage?",
    answers: [
      { text: "Anterior communicating artery", correct: true },
      { text: "Basilar artery", correct: false },
      { text: "Posterior communicating artery", correct: false },
      { text: "Middle cerebral artery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 68-year-old woman presents with sudden-onset right-sided weakness and slurred speech. Her symptoms started approximately 30 minutes ago while she was watching television. She has a history of hypertension and type 2 diabetes mellitus. On examination, she has right-sided hemiparesis and dysarthria. Her MRI of the brain reveals a hyperintense lesion in the left middle cerebral artery (MCA) territory. What is the most likely diagnosis?",
    answers: [
      { text: "Left hemispheric ischemic stroke", correct: true },
      { text: "Transient ischemic attack (TIA)", correct: false },
      { text: "Right hemispheric ischemic stroke", correct: false },
      { text: "Subarachnoid hemorrhage", correct: false },
      { text: "Intracerebral hemorrhage", correct: false },
    ],
  },
  {
    question: "A 50-year-old woman with a history of atrial fibrillation presents with sudden onset of visual disturbance in her right visual field, difficulty speaking, and a right-sided hemiparesis. She also reports dizziness and difficulty maintaining balance. On examination, she has a left homonymous hemianopia and dysarthria. Brain MRI reveals an infarct in the posterior cerebral artery (PCA) distribution. What is the most likely diagnosis?",
    answers: [
      { text: "Left-sided ischemic stroke in the posterior cerebral artery (PCA) territory", correct: true },
      { text: "Right-sided ischemic stroke in the middle cerebral artery (MCA) territory", correct: false },
      { text: "Transient ischemic attack (TIA)", correct: false },
      { text: "Subarachnoid hemorrhage", correct: false },
      { text: "Vestibular migraine", correct: false },
    ],
  },
  {
    question: "A patient had a head injury in road traffic accident and had lost consciousness instantaneously. After few minutes he regains consciousness. Spontaneous eye opening without any muscular weakness and is fully aware of his surroundings. GCS score is E4V5M6 . However, the patient continues to complain headache, dizziness, nausea, faintness and an episode of emesis. What is the severity of his head injury?",
    answers: [
      { text: "Minor head injury", correct: true },
      { text: "Severe head injury", correct: false },
      { text: "Intermediate severity", correct: false },
      { text: "None of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "All are seen in Kluver Bucy syndrome except",
    answers: [
      { text: "Seizures", correct: true },
      { text: "Hypersexuality", correct: false },
      { text: "Metamorphopsia", correct: false },
      { text: "Visual agnosia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year-old woman fell down the stairs. His face shows abrasions and wounds. You have determined that she opens her eyes only when presented with a painful stimulus, responds slurred to questions, makes isolated sounds and does not follow your instructions, but localizes pain when presented with a painful stimulus. Calculate level of consciousness on the Glasgow Coma Scale.",
    answers: [
      { text: "Score 9", correct: true },
      { text: "Score 13", correct: false },
      { text: "Score 15", correct: false },
      { text: "Score 8", correct: false },
      { text: "Score 3", correct: false },
    ],
  },
  {
    question: "A 60-year-old woman fell down the stairs. She sustained a moderate head injury. What kind of examination would you suggest?",
    answers: [
      { text: "CT of the brain", correct: true },
      { text: "MRI of the brain", correct: false },
      { text: "Electroneuromyography", correct: false },
      { text: "Electroencephalography", correct: false },
      { text: "Lumbar puncture", correct: false },
    ],
  },
  {
    question: "Which of the following statement is false with respect to demyelinating disorders?",
    answers: [
      { text: "Involves biochemical abnormality of myelin", correct: true },
      { text: "More common in females", correct: false },
      { text: "Multiple sclerosis is an autoimmune disease of the central nervous system", correct: false },
      { text: "Multiple Sclerosis is most common type of demyelinating disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient was treated for mantle cell Hodgkin lymphoma with radiation therapy. After 6 months he develops an electric shock-like pain along the spine on flexing his neck. What is the diagnosis?",
    answers: [
      { text: "Cervical spinal cord pathology", correct: true },
      { text: "Cervical arthritis", correct: false },
      { text: "Multiple sclerosis", correct: false },
      { text: "Spinal cord compression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 65-year-old woman is brought to the clinic for memory problems. On examination, she displays difficulty recalling recent events and exhibits poor short-term memory. What brain abnormality is most likely to be found in Alzheimer’s disease?",
    answers: [
      { text: "Decreased hippocampal volume", correct: true },
      { text: "Enlarged ventricles", correct: false },
      { text: "Increased brain glucose metabolism", correct: false },
      { text: "Cerebellar atrophy", correct: false },
      { text: "Frontal lobe atrophy", correct: false },
    ],
  },
  {
    question: "A 71-year-old male with a family history of Alzheimer’s disease is diagnosed with mild cognitive impairment (MCI). Which of the following is most associated with progression from MCI to Alzheimer’s disease?",
    answers: [
      { text: "Presence of APOE ε4 allele", correct: true },
      { text: "Hyperlipidemia", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Age", correct: false },
      { text: "Physical activity", correct: false },
    ],
  },
  {
    question: "A 68-year-old man is diagnosed with Alzheimer’s disease. Which of the following medications would most likely be prescribed for managing his cognitive symptoms?",
    answers: [
      { text: "Donepezil", correct: true },
      { text: "Levodopa", correct: false },
      { text: "Lithium", correct: false },
      { text: "Sertraline", correct: false },
      { text: "Haloperidol", correct: false },
    ],
  },
  {
    question: "A 33-year male with numbness from the lower trunk to the distal extremities was diagnosed with multiple sclerosis. He was started with glucocorticoids with some improvement in his symptoms. Which one of the following is not predictive of long-term disability in such patients?",
    answers: [
      { text: "Optic neuritis in the first 2 years", correct: true },
      { text: "Incomplete recovery from relapses", correct: false },
      { text: "Length of intervals between relapses", correct: false },
      { text: "Frequency of relapses", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 38-year-old woman with sensory disturbances, muscle weakness & visual disturbances was diagnosed with Multiple Sclerosis recently. The physician is evaluating her neurological status with Expanded disability severity score (EDSS). What does a score of 9 in EDSS signify?",
    answers: [
      { text: "Patient is bedridden, can talk, can drink", correct: true },
      { text: "Death of patient due to multiple sclerosis", correct: false },
      { text: "Patient is bedridden, can't talk, can’t drink", correct: false },
      { text: "Patient walks normally, shows no disability", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 58-year-old woman presenting with right arm weakness, paraparesis, and increased reflexes. T1w MRI with contrast, coronal view showed dumbbell schwannoma at C3-C4 level with bone erosion of the vertebral body. The characteristic 'Schwannoma of spinal nerve roots' is associated with?",
    answers: [
      { text: "Neurofibromatosis 1", correct: true },
      { text: "Neurofibromatosis 2", correct: false },
      { text: "Turcot syndrome", correct: false },
      { text: "Li - Fraumeni syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 68-year-old female presents with memory loss, difficulty recalling recent events, and confusion. She becomes easily agitated and occasionally gets lost in familiar places. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Alzheimer’s disease", correct: true },
      { text: "Depression", correct: false },
      { text: "Vascular dementia", correct: false },
      { text: "Frontotemporal dementia", correct: false },
      { text: "Parkinson’s disease dementia", correct: false },
    ],
  },
  {
    question: "A 72-year-old man presents with difficulty remembering names of familiar people and forgetting appointments. He has no difficulty performing daily tasks. What cognitive test would be most appropriate to assess his memory?",
    answers: [
      { text: "Montreal Cognitive Assessment (MoCA)", correct: true },
      { text: "Mini-Mental State Examination (MMSE)", correct: false },
      { text: "Clock Drawing Test", correct: false },
      { text: "Trail Making Test", correct: false },
      { text: "Neuropsychological testing", correct: false },
    ],
  },
  {
    question: "Blood supply area of the middle cerebral artery:",
    answers: [
      { text: "Most of the internal capsule", correct: true },
      { text: "The medial surface of the frontal and parietal lobes", correct: false },
      { text: "Occipital lobes", correct: false },
      { text: "Brainstem", correct: false },
      { text: "Cerebellum", correct: false },
    ],
  },
  {
    question: "Triple H therapy is done in?",
    answers: [
      { text: "SAH", correct: true },
      { text: "SDH", correct: false },
      { text: "EDH", correct: false },
      { text: "Intraparenchymal bleed", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 69-year-old hypertensive patient suddenly developed facial muscle weakness, slurred speech, and weakness in the right extremities after sleeping. Select the vascular basin most likely to be affected:",
    answers: [
      { text: "Left middle cerebral artery", correct: true },
      { text: "Right internal carotid artery", correct: false },
      { text: "Right middle cerebral artery", correct: false },
      { text: "Left posterior cerebral artery", correct: false },
      { text: "Left internal carotid artery", correct: false },
    ],
  },
  {
    question: "Lateral medullary syndrome is caused by thrombosis of",
    answers: [
      { text: "Anterior inferior cerebral artery", correct: true },
      { text: "PCA", correct: false },
      { text: "Anterior inferior cerebral artery", correct: false },
      { text: "Basilar artery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Mr X is a 70-year-old male who presents with a one-year history of progressive ataxia, urinary incontinence and memory loss. He is otherwise asymptomatic. He has no significant past medical history and is not on any medication. What is the most likely diagnosis?",
    answers: [
      { text: "Normal pressure hydrocephalus", correct: true },
      { text: "Cerebellar astrocytoma", correct: false },
      { text: "Lewy body dementia", correct: false },
      { text: "Multiple sclerosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 72-year-old male with a history of diabetes and hypertension presents with memory impairment, apathy, and difficulty with language. His wife notes that he has become more impulsive and socially inappropriate. MRI reveals significant atrophy of the frontal and temporal lobes. Which condition is most likely?",
    answers: [
      { text: "Frontotemporal dementia", correct: true },
      { text: "Alzheimer's disease", correct: false },
      { text: "Parkinson's disease", correct: false },
      { text: "Vascular dementia", correct: false },
      { text: "Creutzfeldt-Jakob disease", correct: false },
    ],
  },
  {
    question: "29 yrs male was brought to OPD by his wife giving history of aggressive behaviour with decreased social interaction and lack of self-care. O/E grasp reflex present, CT scan would be showing lesion of which lobe?",
    answers: [
      { text: "Frontal lobe", correct: true },
      { text: "Occipital", correct: false },
      { text: "Temporal", correct: false },
      { text: "Parietal", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 55-year-old man presents with symptoms of rigidity, bradykinesia, and resting tremor. He also has a significant cognitive decline, with difficulty in memory and problem-solving. An MRI of the brain is unremarkable. His symptoms do not meet the criteria for Alzheimer’s disease, but they are suggestive of a movement disorder with cognitive dysfunction. What is the most likely diagnosis?",
    answers: [
      { text: "Lewy body dementia", correct: true },
      { text: "Progressive supranuclear palsy", correct: false },
      { text: "Frontotemporal dementia", correct: false },
      { text: "Parkinson's disease dementia", correct: false },
      { text: "Alzheimer's disease", correct: false },
    ],
  },
  {
    question: "Which of the following is least likely to occur in multiple sclerosis",
    answers: [
      { text: "Absence of oligoclonal bands in CSF", correct: true },
      { text: "Bilateral visual loss", correct: false },
      { text: "Complete tranaction of cord", correct: false },
      { text: "Poor recovery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A study without which a diagnosis of multiple sclerosis cannot be confirmed:",
    answers: [
      { text: "MRI of the brain.", correct: true },
      { text: "CT of the brain", correct: false },
      { text: "Electroneuromyography", correct: false },
      { text: "Electroencephalography", correct: false },
      { text: "Lumbar puncture", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman presented with double vision, divergent strabismus, right-sided ptosis. Administration of proserin did not change the clinical picture; ENMG without abnormalities. MR angiography: no pathology was revealed. MRI of the brain: multiple foci of demyelination paraventricularly and in the area of the brain stem. Blood sugar analysis: 4.2 mmol/l. Choose the most likely diagnosis:",
    answers: [
      { text: "Multiple sclerosis", correct: true },
      { text: "Myasthenia gravis", correct: false },
      { text: "Aneurysm of the internal carotid artery", correct: false },
      { text: "Diabetic neuropathy", correct: false },
      { text: "Acute cerebral circulation disorder of ischemic nature in the brainstem", correct: false },
    ],
  },
  {
    question: "A 32-year-old patient shows signs of spastic paraparesis, impaired coordination in the left limbs, pelvic organ dysfunction, and pallor of the temporal halves of the optic discs. Choose the most likely diagnosis:",
    answers: [
      { text: "Multiple sclerosis", correct: true },
      { text: "Tumor of the left cerebellar hemisphere", correct: false },
      { text: "Spinal cord tumor", correct: false },
      { text: "Ischemic stroke", correct: false },
      { text: "Encephalitis", correct: false },
    ],
  },
  {
    question: "A 25-year-old female patient came to the doctor because she felt unsteady when walking. She had a history of retrobulbar neuritis twice. The neurologist found evidence of cerebellar lesions and 2-sided lesions of the pyramidal pathways. Choose the most likely diagnosis:",
    answers: [
      { text: "Cerebellar tumor", correct: true },
      { text: "Tumor of cranio-vertebral junction", correct: false },
      { text: "Multiple sclerosis", correct: false },
      { text: "Encephalitis", correct: false },
      { text: "Ischemic stroke", correct: false },
    ],
  },
  {
    question: "Which of the following will manifest as \"pachymeningitis hemorrhagica interna\"?",
    answers: [
      { text: "Subdural hematoma", correct: true },
      { text: "Epidural hematoma", correct: false },
      { text: "Subarachnoid haemorrhage", correct: false },
      { text: "Brain infraction", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 12-year-old patient was admitted to the clinic with a high body temporeatura of 39.5 g, headache, vomiting, consciousness of 10 points on the Glasgow Coma Scale, occipital muscle rigidity, and positive Kernig's symptom. The general blood count shows an inflammatory reaction due to a high neutrophil count. What treatment should be performed?",
    answers: [
      { text: "Antiedema", correct: true },
      { text: "Anticoagulants", correct: false },
      { text: "Antibiotics", correct: false },
      { text: "Anticonvulsants", correct: false },
      { text: "Antiretroviral drugs", correct: false },
    ],
  },
  {
    question: "A 20 year old patient presents with headache, vomiting, Glasgow coma scale consciousness of 12 points, occipital muscle rigidity and positive Kernig's symptom, what investigation should be performed?",
    answers: [
      { text: "Liquor analysis", correct: true },
      { text: "MRI", correct: false },
      { text: "Urinanalysis", correct: false },
      { text: "EEG", correct: false },
      { text: "Blood analysis", correct: false },
    ],
  },
  {
    question: "Which nerve is most commonly involved in uncal herniation?",
    answers: [
      { text: "IIIrd", correct: true },
      { text: "Vith", correct: false },
      { text: "Ixth", correct: false },
      { text: "XIIth", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which is not affected in lesion of posterior column of spinal cord?",
    answers: [
      { text: "Temperature sense", correct: true },
      { text: "Romberg's sign", correct: false },
      { text: "Vibration sense", correct: false },
      { text: "Ataxia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Brown Séquard syndrome, not involved is",
    answers: [
      { text: "Contralateral posterior column", correct: true },
      { text: "Ipsilateral pyramidal tract", correct: false },
      { text: "Contralateral spinothalamic", correct: false },
      { text: "Ipsilateral planter extensor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 59-year-old patient gradually develops spastic tetraparesis with 2-sided Babinski's pathologic symptoms, marked muscle hypotrophy and fibrillary twitches. Choose the disease that should be excluded first of all:",
    answers: [
      { text: "Amyotrophic lateral sclerosis", correct: true },
      { text: "Multiple sclerosis, spinal form", correct: false },
      { text: "Myasthenia gravis", correct: false },
      { text: "Myasthenic syndrome", correct: false },
      { text: "Multiple sclerosis, cerebral form", correct: false },
    ],
  },
  {
    question: "If Wernicke’s area is damaged in the dominant hemisphere, it will result in?",
    answers: [
      { text: "Irrelevant and rapid speech", correct: true },
      { text: "No effect on speech", correct: false },
      { text: "Speech with difficulty in articulation", correct: false },
      { text: "Incomprehension of written language", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Dose of methylprednisolone following spine injury:",
    answers: [
      { text: "30mg/kg within 3 hrs of injury", correct: true },
      { text: "45mg/kg within 6 hrs of injury", correct: false },
      { text: "50mg/kg within 9 hrs of injury", correct: false },
      { text: "60mg/kg within 12 hrs of injury", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Hypotension in Acute Spinal Cord Injury is due to?",
    answers: [
      { text: "Loss of Sympathetic tone", correct: true },
      { text: "Orthostatic Hypotension", correct: false },
      { text: "Orthostatic Hypotension", correct: false },
      { text: "loss of parasymparhic tone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old patient felt marked weakness in the legs, pain on the inner surface of the thigh at the moment of weight lifting, urinary disturbance occurred. On examination: peripheral asymmetric inferior paraparesis, hypoesthesia in the area of the perineum and on the inner surface of the thighs. Choose the most informative methods of examination:",
    answers: [
      { text: "MRI", correct: true },
      { text: "X-ray", correct: false },
      { text: "CT", correct: false },
      { text: "Liquor analysis", correct: false },
      { text: "EEG", correct: false },
    ],
  },
  {
    question: "Select the symptoms characteristic of Guillain-Barré syndrome:",
    answers: [
      { text: "Peripheral tetraparesis", correct: true },
      { text: "Central tetraparesis", correct: false },
      { text: "Peripheral monoparesis", correct: false },
      { text: "Central hemiparesis", correct: false },
      { text: "Central monoparesis", correct: false },
    ],
  },
  {
    question: "Guillain-Baret polyneuropathy is characterized by an inflammatory lesion caused by (choose the correct answer)",
    answers: [
      { text: "Viruses", correct: true },
      { text: "Bacteria", correct: false },
      { text: "Fungi", correct: false },
      { text: "Trauma", correct: false },
      { text: "Vascular ischemia", correct: false },
    ],
  },
  {
    question: "Select the mechanisms underlying the pathogenesis of diabetic polyneuropathy:",
    answers: [
      { text: "Vascular damage to peripheral nerves", correct: true },
      { text: "Peripheral nerve damage", correct: false },
      { text: "Lesion of spinal cord roots", correct: false },
      { text: "Muscle damage", correct: false },
      { text: "Lesion of the anterior horn of the spinal cord", correct: false },
    ],
  },
  {
    question: "A 48-year-old patient complains of a sensation of irritation on the skin of the legs, which began with the feet and over 6 months progressed to the shins, knees thighs. What diagnosis do you suggest?",
    answers: [
      { text: "Extramedullary spinal cord tumor", correct: true },
      { text: "Intramedullary tumor of the spinal cord", correct: false },
      { text: "Spinal cord abscess", correct: false },
      { text: "Epiduritis", correct: false },
      { text: "Multiple sclerosis", correct: false },
    ],
  },
  {
    question: "A 68-year-old woman had an elevated t to 38.5, severe headache, photophobia. Meningeal symptom complex was detected in an infectious disease hospital and liquor was analyzed. In the liquor analysis: turbid, 1200 kl/mL, neutrophils predominate, protein-0.99 g/L. Choose the most likely diagnosis:",
    answers: [
      { text: "Meningitis", correct: true },
      { text: "Subarachnoid hemorrhage", correct: false },
      { text: "Intraventricular hemorrhage", correct: false },
      { text: "Encephalitis", correct: false },
      { text: "Brain tumor", correct: false },
    ],
  },
  {
    question: "True about GBS are all except",
    answers: [
      { text: "Sensory loss", correct: true },
      { text: "Ascending paralysis", correct: false },
      { text: "Cyto albumen disassociation", correct: false },
      { text: "Flaccidity", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Best Treatment of GBS is",
    answers: [
      { text: "Plasmapheresis", correct: true },
      { text: "Intravenous Steroids", correct: false },
      { text: "Dialysis", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Select a symptom NOT characteristic of polyneuropathy:",
    answers: [
      { text: "High tendon reflexes", correct: true },
      { text: "Peripheral paresis of hands, feet", correct: false },
      { text: "Dpecreased sensitivity in the distal parts of the limbs", correct: false },
      { text: "Vegetative disorders in the distal parts of the limbs", correct: false },
      { text: "Pain along the course of nerves", correct: false },
    ],
  },
  {
    question: "Duchenne muscular dystrophy is an X-linked recessive disease that most commonly affects:",
    answers: [
      { text: "Boys only", correct: true },
      { text: "Girls only", correct: false },
      { text: "More boys than girls", correct: false },
      { text: "More girls than boys", correct: false },
      { text: "Same for girls and boys", correct: false },
    ],
  },
  {
    question: "What does the concept of treatment for muscular dystrophy include?",
    answers: [
      { text: "Physical and orthopedic therapy", correct: true },
      { text: "Thymectomy", correct: false },
      { text: "Immunosuppressants", correct: false },
      { text: "Immunoglobulin therapy", correct: false },
      { text: "Plasmapheresis", correct: false },
    ],
  },
  {
    question: "Gene for myotonic dystrophy is coded on chromosome number",
    answers: [
      { text: "19", correct: true },
      { text: "20", correct: false },
      { text: "21", correct: false },
      { text: "24", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Duchenne muscular dystrophy is а ...",
    answers: [
      { text: "Lesion of a muscle", correct: true },
      { text: "Lesion of the anterior root of the spinal cord", correct: false },
      { text: "Lesion of the nerve", correct: false },
      { text: "Lesion of the anterior horn of the spinal cord", correct: false },
      { text: "Lesion of the neuromuscular transmission", correct: false },
    ],
  },
  {
    question: "A patient present with unilateral painful ophthalmoplegia. Imaging revealed an enlargement of cavernous sinus on the affected side. The likely diagnosis is:",
    answers: [
      { text: "Tolosa-Hunt syndrome", correct: true },
      { text: "Cavernous sinus thrombosis", correct: false },
      { text: "Gradenigo syndrome", correct: false },
      { text: "Orbital Pseudotumor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient's visual field is being tested by confrontation field testing,during which you noticed an abnormality. On wiggling one finger of one hand, patient is able see normally and can tell the correct side, but when fingers of both hands on both sides are wiggled simultaneously, patient is able to appreciate the movement of only right side and the left hand appears to him as stationary.This phenomenon is called?",
    answers: [
      { text: "Visual inattention", correct: true },
      { text: "Homonymous hemianopia", correct: false },
      { text: "Simultanagnosia", correct: false },
      { text: "Somatoparaphrenia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The gag reflex is checked in a 65-year-old woman with diabetes mellitus. When the right side of the pharynx is touched with a tongue blade, the palate elevates symmetrically. When the left side of the pharynx is touched, the palate does not elevate at all.Which of the following cranial nerves is most likely to be responsible for this?",
    answers: [
      { text: "9th cranial nerve", correct: true },
      { text: "8", correct: false },
      { text: "10", correct: false },
      { text: "12", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A lesion of the following cranial nerve is manifested by facial pain:",
    answers: [
      { text: "Trigeminal", correct: true },
      { text: "Oculomotor", correct: false },
      { text: "Facial", correct: false },
      { text: "Accessory", correct: false },
      { text: "Olfactory", correct: false },
    ],
  },
  {
    question: "A 12-year-old female patient complains of weakness in the left leg. She is acutely ill, does not know the cause. But she notes that before the onset of complaints, she was picking berries while sitting on her knees. In the neurological status, the left Achilles reflex is preserved. Left-sided steppage gait. What's your presumptive diagnosis?",
    answers: [
      { text: "Peroneal neuropathy", correct: true },
      { text: "Ulnar neuropathy", correct: false },
      { text: "Sciatic neuropathy", correct: false },
      { text: "Tibial neuropathy", correct: false },
      { text: "Radial nerve neuropathy", correct: false },
    ],
  },
  {
    question: "In a 30-year-old male patient, examination of neurological status revealed the following signs: muscle strength in the left hand 3 points, areflexia in the left hand, decreased muscle tone in the left hand, trophic disorders on the skin of the fingers of the left hand. Highlight the correct syndrome from the suggested answers.",
    answers: [
      { text: "Flaccid monoparesis", correct: true },
      { text: "Central monoparesis", correct: false },
      { text: "Central diparalysis", correct: false },
      { text: "Flaccid diparesis", correct: false },
      { text: "Polyneuropathy", correct: false },
    ],
  },
  {
    question: "A 12 year old girl, complains of drooling and spilling of fluids from the mouth, from the right corner of the mouth, right eye not closing and right eyebrow drooping. No paresis or paralysis has been detected in the arms and legs. What investigation should be performed?",
    answers: [
      { text: "Otoscopy", correct: true },
      { text: "CT", correct: false },
      { text: "EEG", correct: false },
      { text: "ENMG", correct: false },
      { text: "MRI", correct: false },
    ],
  },
  {
    question: "A 46-year-old woman with history of intermittent weakness and muscle fatigue which worsened with activity was diagnosed as a case of Myasthenia Gravis. She presented with complaints of persistent cough associated with shortness of breath. On workup, CT Chest shows anterior mediastinal mass. What could be the possible diagnosis?",
    answers: [
      { text: "Thymoma", correct: true },
      { text: "Retrosternal goiter", correct: false },
      { text: "Hilar Lymphadenopathy", correct: false },
      { text: "Hilar Lymphadenopathy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 65-year-old male comes to the OPD complaining of ongoing double vision which is worse when he is watching TV in the evening. He has also noticed that he feels weaker towards the end of the day and that his face is slightly puffy. On inspection, there is a partial ptosis of the left eye lid and his mouth hangs slightly open at rest. On examination, there are visibly distended neck veins. What is the most likely diagnosis?",
    answers: [
      { text: "Myasthenia gravis", correct: true },
      { text: "GBS", correct: false },
      { text: "Amitriptyline", correct: false },
      { text: "Methysergide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Myasthenia refers to peripheral disorders of. What is impaired in any form of myasthenia?",
    answers: [
      { text: "Lesion of the neuromuscular transmission", correct: true },
      { text: "Lesion of the anterior root of the spinal cord", correct: false },
      { text: "Lesion of the nerve", correct: false },
      { text: "Lesion of a muscle", correct: false },
      { text: "Lesion of the anterior horn of the spinal cord", correct: false },
    ],
  },
  {
    question: "A 63-year-old woman with T2DM, hypertension presented to your hospital with complaints of sudden onset right eye ptosis and diplopia, worse at the end of the day. She also had history of fatigue, intermittent muscle weakness for the past 1 month. Initial investigations were done. A probable diagnosis of Myasthenia Gravis made. Which of the following is not useful for the above diagnosis?",
    answers: [
      { text: " Voltage gated calcium channel antibodies", correct: true },
      { text: "Lambert Eaton syndrome", correct: false },
      { text: "Paraneoplastic cerebellar degeneration", correct: false },
      { text: "Multiple system atrophy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman is diagnosed with ocular myasthenia gravis. She weighs 60 kg. You've prescribed prednisolone in tablet form. The dosage is 0.005 g in 1 tablet. Choose the correct daily dose.",
    answers: [
      { text: "12 tablets per day", correct: true },
      { text: "1 tablets per day", correct: false },
      { text: "24 tablets per day", correct: false },
      { text: "48 tablets per day", correct: false },
      { text: "50 tablets per day", correct: false },
    ],
  },
  {
    question: "Case of 36-year-old female presents with Diplopia and ptosis, which usually develops after the headache. She had multiple such attacks in the past. What is your diagnosis?",
    answers: [
      { text: "Focal migraine", correct: true },
      { text: "Retinal migraine", correct: false },
      { text: "Migraine sine migraine", correct: false },
      { text: "Ophthalmoplegic migraine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old man presents with a severe, unilateral headache that is described as stabbing and is associated with lacrimation, rhinorrhea, and ptosis. The headaches typically occur in the early morning hours. What is the most likely diagnosis?",
    answers: [
      { text: "Cluster headache", correct: true },
      { text: "Tension-type headache", correct: false },
      { text: "Migraine", correct: false },
      { text: "Trigeminal neuralgia", correct: false },
      { text: "Temporal arteritis", correct: false },
    ],
  },
  {
    question: "What is drug of choice for acute attack of migraine",
    answers: [
      { text: "Sumatriptan", correct: true },
      { text: "Caffeine", correct: false },
      { text: "Amitriptyline", correct: false },
      { text: "Methysergide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Types of migraine: Case of 46-year-old female comes to you with history of visual disturbances without headache. She also has nausea, vomiting and aura. What is your diagnosis?",
    answers: [
      { text: "Migraine sine migraine", correct: true },
      { text: "Retinal migraine", correct: false },
      { text: "Ophthalmoplegic migraine", correct: false },
      { text: "Focal migraine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 55-year-old woman presents with a dull, bilateral headache that has been gradually worsening over the past 6 months. The headache is constant and typically worsens in the morning, and she reports associated symptoms of nausea and visual disturbances. Her medical history includes hypertension. What is the most likely diagnosis?",
    answers: [
      { text: "Brain tumor", correct: true },
      { text: "Temporal arteritis", correct: false },
      { text: "Tension-type headache", correct: false },
      { text: "Migraine", correct: false },
      { text: "Cervicogenic headache", correct: false },
    ],
  },
  {
    question: "A 30-year-old man presents with sudden-onset excruciating pain around his right eye, associated with tearing, redness, and nasal congestion. The headache episodes last for 30-60 minutes and occur multiple times a day, especially at night. He also reports restlessness during the attacks. What is the most likely diagnosis?",
    answers: [
      { text: "Cluster headache", correct: true },
      { text: "Sinus headache", correct: false },
      { text: "Tension-type headache", correct: false },
      { text: "Trigeminal neuralgia", correct: false },
      { text: "Migraines", correct: false },
    ],
  },
  {
    question: " You are working as a palliative medicine resident in a tertiary institution. A group of children diagnosed with cancers came to you for follow-up. Which of the following brain tumor has the worst prognosis in children?",
    answers: [
      { text: "Cerebellar astrocytoma", correct: true },
      { text: "Brainstem glioma", correct: false },
      { text: "Craniopharyngioma", correct: false },
      { text: "Pineal body tumor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Medulloblastoma most commonly occurs in the",
    answers: [
      { text: "Cerebellum", correct: true },
      { text: "Medulla", correct: false },
      { text: "Cerebral hemisphere", correct: false },
      { text: "Spinal cord", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with dermatomyositis reports improvement of symptoms on steroids for last 6 months. Labs did today show Creatine kinase of 1300 Units/L. What is the next step in the management?",
    answers: [
      { text: "Continue the same dose of steroids", correct: true },
      { text: "Raise dose of steroids", correct: false },
      { text: "Start mycophenolate", correct: false },
      { text: "Perform muscle biopsy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old man presents with sudden, involuntary jerking movements of his upper limbs that occur in episodes. These movements are not rhythmic and are sometimes associated with a feeling of muscle stiffness. The patient has no family history of neurological disease. What is the most likely diagnosis?",
    answers: [
      { text: "Myoclonus", correct: true },
      { text: "Tardive dyskinesia", correct: false },
      { text: "Essential tremor", correct: false },
      { text: "Huntington’s disease", correct: false },
      { text: "Hemiballismus", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman presents with difficulty holding objects, particularly when she is stressed. She has noticed that her hands shake when she reaches for items, but her tremor improves when she is at rest. On examination, the tremor is most prominent when she extends her arms. What is the most likely diagnosis?",
    answers: [
      { text: "Essential tremor", correct: true },
      { text: "Parkinson’s disease", correct: false },
      { text: "Cerebellar tremor", correct: false },
      { text: "Dystonia", correct: false },
      { text: "Resting tremor", correct: false },
    ],
  },
  {
    question: "A 50-year-old man with a history of diabetes presents with sudden-onset weakness in his right arm and leg. On examination, he has spasticity, hyperreflexia, and a positive Babinski sign on the right side. The weakness does not improve with rest. What is the most likely diagnosis?",
    answers: [
      { text: "Stroke (hemiparetic)", correct: true },
      { text: "Multiple sclerosis", correct: false },
      { text: "Guillain-Barré syndrome", correct: false },
      { text: "Amyotrophic lateral sclerosis (ALS)", correct: false },
      { text: "Parkinson’s disease", correct: false },
    ],
  },
  {
    question: "A 70-year-old woman presents with difficulty walking and frequent falls. She has rigidity in her neck and arms, along with a shuffling gait. There is no tremor. On examination, she has difficulty turning in bed and making small, quick steps. What is the most likely diagnosis?",
    answers: [
      { text: "Normal pressure hydrocephalus", correct: true },
      { text: "Parkinson’s disease", correct: false },
      { text: "Cerebellar ataxia", correct: false },
      { text: "Huntington’s disease", correct: false },
      { text: "Progressive supranuclear palsy", correct: false },
    ],
  },
  {
    question: "A 45-year-old man presents to emergency room with Progressive atrophy and weakness of hands. On further examination he is found to have brisk jaw jerk, Fasciculations,",
    answers: [
      { text: "Weakness and spasticity", correct: true },
      { text: "Fasciculation's", correct: false },
      { text: "Rigidity", correct: false },
      { text: "Muscle atrophy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug can you use for acute attack of migraine",
    answers: [
      { text: "Sumatriptan", correct: true },
      { text: "Caffeine", correct: false },
      { text: "Amitriptyline", correct: false },
      { text: "Methysergide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Case of 36-year-old female presents with Diplopia and ptosis, which usually develops after the headache. She had multiple such attacks in the past. What is your diagnosis?",
    answers: [
      { text: "Ophthalmoplegic migraine", correct: true },
      { text: "Retinal migraine", correct: false },
      { text: "Migraine sine migraine", correct: false },
      { text: "Focal migraine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 29-year-old woman presents with recurrent headaches that typically last for 4-72 hours. The pain is described as pulsating and unilateral. She reports nausea, vomiting, and a sensitivity to light and sound during these episodes. The headaches are sometimes preceded by visual disturbances, such as flashing lights. What is the most likely diagnosis?",
    answers: [
      { text: "Migraine", correct: true },
      { text: "Cluster headache", correct: false },
      { text: "Tension-type headache", correct: false },
      { text: "Temporal arteritis", correct: false },
      { text: "Sinus headache", correct: false },
    ],
  },
  {
    question: "A 55-year-old man reports having a severe headache behind his right eye, accompanied by tearing, nasal congestion, and redness of the eye. The headaches occur in clusters, lasting 30 minutes to 2 hours, and typically occur at night. He has a history of similar episodes. What is the most likely diagnosis?",
    answers: [
      { text: "Cluster headache", correct: true },
      { text: "Tension-type headache", correct: false },
      { text: "Migraine", correct: false },
      { text: "Cervicogenic headache", correct: false },
      { text: "Sinus headache", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman presented with complaints of sudden onset headache which she described as a characteristic 'thunderclap headache'. She has no \significant medical history. On examination, her pupils were dilated bilaterally. These findings are consistent with the diagnosis of?",
    answers: [
      { text: "Acute aneurismal haemorrhage", correct: true },
      { text: "Brain stem encephalitis", correct: false },
      { text: "Acute ischemia of mid brain", correct: false },
      { text: "Meningitis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 32-year-old obese woman presented with complaints of headache associated with nausea & 2episodes of vomiting over 1 week duration. She also complained of pulsatile tinnitus & transient visual changes. Fundoscopic examination revealed features of papilledema. The physician suspected this as a case of idiopathic intracranial hypertension. What is the drug of choice for the above diagnosis?",
    answers: [
      { text: "Acetazolamide", correct: true },
      { text: "Glycerol", correct: false },
      { text: "Mannitol", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 24-year-old woman presents with a history of recurrent, severe, unilateral headaches associated with nausea, vomiting, and visual disturbances (auras). The headaches are typically triggered by bright lights or strong odors. What is the most likely diagnosis?",
    answers: [
      { text: "Migraine", correct: true },
      { text: "Cluster headache", correct: false },
      { text: "Sinus headache", correct: false },
      { text: "Tension-type headache", correct: false },
      { text: "Trigeminal neuralgia", correct: false },
    ],
  },
  {
    question: "A 50-year-old woman experiences recurrent headaches with a sensation of pressure in her face and forehead. She reports nasal congestion and facial tenderness. The headaches are worse when she bends over. What is the most likely diagnosis?",
    answers: [
      { text: "Sinus headache", correct: true },
      { text: "Tension-type headache", correct: false },
      { text: "Migraine", correct: false },
      { text: "Cluster headache", correct: false },
      { text: "Cervicogenic headache", correct: false },
    ],
  },
  {
    question: "A 48-year-old woman has a lower back pain and hypoesthesia in the left 51 dermatomal distribution (left calf and lateral left foot). What is the most likely cause?",
    answers: [
      { text: "A lesion at the right L4-LS interspace", correct: true },
      { text: "Pathology where the nerve exits the spinal canal immediately above the pedicle of S3 vertebra", correct: false },
      { text: "A lesion at the right L4-LS interspace", correct: false },
      { text: "Compression by the LS lamina", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following tests is abnormal in patients with ALS (Amyotrophic Lateral Sclerosis)?",
    answers: [
      { text: "Electromyography", correct: true },
      { text: "MRI whole spine", correct: false },
      { text: "CT whole Spine", correct: false },
      { text: "V.E.P", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old woman presents with a sudden onset of severe lower back pain radiating down her left leg. The pain started after she lifted a heavy box at work. She describes the pain as sharp and stabbing, with occasional numbness and tingling in her left foot. Physical examination reveals a positive straight leg raise test. What is the most likely diagnosis?",
    answers: [
      { text: "Lumbar disc herniation", correct: true },
      { text: "Spinal stenosis", correct: false },
      { text: "Sacroiliac joint dysfunction", correct: false },
      { text: "Osteoarthritis of the spine", correct: false },
      { text: "Fibromyalgia", correct: false },
    ],
  },
  {
    question: "A 46-year-old woman presented with a 25-year history of epilepsy. She had a history of focal impaired awareness with cognitive changes and behavioral arrest progressing to bilateral tonic-clonic seizures. Magnetic resonance imaging displayed asymmetry of the hippocampus, with a prominent right temporal horn of lateral ventricle. Which of the following is the probable diagnosis?",
    answers: [
      { text: "Medial temporal lobe epilepsy", correct: true },
      { text: ". Lennox Gastaut syndrome", correct: false },
      { text: "Rolandic epilepsy", correct: false },
      { text: "Epilepsia Partialis Continua", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What percentage of patients with head injury develop long-term epilepsy?",
    answers: [
      { text: "5", correct: true },
      { text: "10", correct: false },
      { text: "15", correct: false },
      { text: "20", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Commonest presentation of neurocysticercosis is",
    answers: [
      { text: "Seizures", correct: true },
      { text: "Focal neurological deficits", correct: false },
      { text: "Dementia", correct: false },
      { text: "Radiculopathy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 18-year-old man complains of cramps in his left arm and leg. He then loses consciousness and does not remember anything. After the seizure, when he regains consciousness, he notices that his left arm and leg do not move for about an hour. EEG showed epileptiform activity in the frontal-central region on the right side. MRI of the brain shows no abnormalities. What happened to the patient after the seizure?",
    answers: [
      { text: "Todd's palsy", correct: true },
      { text: "Epileptic seizure", correct: false },
      { text: "Ischemic stroke", correct: false },
      { text: "Hemorrhagic stroke", correct: false },
      { text: "Hysterical seizure", correct: false },
    ],
  },
  {
    question: "A woman complains that her sister, who is 18 years old, has already fallen 3 times, lost consciousness, had cramps in her limbs, bit her tongue, foamed at the mouth and wet herself. The seizure lasts 2 minutes; after the seizure, the sister sleeps for about an hour. What investigation should be performed?",
    answers: [
      { text: "Electroencephalography", correct: true },
      { text: "CT of the brain", correct: false },
      { text: "Electroneuromyography", correct: false },
      { text: "MRI of the brain", correct: false },
      { text: "Lumbar puncture", correct: false },
    ],
  },
  {
    question: "A 64-year-old, male unconscious patient was brought in with a history of high-grade fever. The attender recalls history of double vision, dysphagia, and unsteady gait in the patient. The medical history of the patient was hypertension for the past 13years & he is on antihypertensives. On examination, his temperature was 102.8 degrees Fahrenheit & bilateral pinpoint pupils are noted. What would be the probable diagnosis?",
    answers: [
      { text: "Brain stem lesion", correct: true },
      { text: "Cerebellar lesion", correct: false },
      { text: "Thalamic lesions", correct: false },
      { text: "Internal capsule lesio", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old man presents with excessive daytime sleepiness, despite having a full 8 hours of sleep at night. He reports episodes of falling asleep uncontrollably during meetings or while watching TV. He also describes vivid dreams and muscle weakness in his legs during these episodes, especially after laughing or during emotional stress. What is the most likely diagnosis?",
    answers: [
      { text: "Narcolepsy", correct: true },
      { text: "Insomnia", correct: false },
      { text: "Sleep apnea", correct: false },
      { text: "Restless leg syndrome", correct: false },
      { text: "Periodic limb movement disorder", correct: false },
    ],
  },
  {
    question: "A 60-year-old male diabetic and hypertensive patient was found unconscious in the morning. On examination pulse rate is 120/min, BP=160/100 mm Hg. What is the next step to be done for management?",
    answers: [
      { text: "Check blood glucose", correct: true },
      { text: "Order CT scan", correct: false },
      { text: "Give intravenous mannitol", correct: false },
      { text: "Immediately reduce BP with anti-hypertensives", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year-old woman presents with difficulty falling asleep and staying asleep, particularly in the early morning hours. She frequently wakes up feeling unrested, and her sleep is interrupted by frequent nocturnal awakenings. She has a history of depression and often worries about her sleep patterns. What is the most likely diagnosis?",
    answers: [
      { text: "Insomnia", correct: true },
      { text: "Obstructive sleep apnea", correct: false },
      { text: "Narcolepsy", correct: false },
      { text: "Sleepwalking", correct: false },
      { text: "REM sleep behavior disorder", correct: false },
    ],
  },
  {
    question: "The most common cause of subarachnoid haemorrhage is",
    answers: [
      { text: "Hypertension", correct: true },
      { text: "Cavernous angioma", correct: false },
      { text: "Aneurysm", correct: false },
      { text: "Arterio-venous malformation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following will manifest as \"pachymeningitis hemorrhagica interna\"?",
    answers: [
      { text: "Subdural hematoma", correct: true },
      { text: "Epidural hematoma", correct: false },
      { text: "Subarachnoid hemorrhage", correct: false },
      { text: "Brain infraction", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 72-year-old man presents with sudden onset of severe headache, nausea, and vomiting, followed by confusion and right-sided weakness. His blood pressure is elevated, and he has a history of atrial fibrillation. On examination, he has right-sided hemiplegia and a Glasgow Coma Scale (GCS) of 14. CT scan of the brain reveals an intracerebral hemorrhage in the right frontal lobe. What is the most likely cause of this patient's condition?",
    answers: [
      { text: "Hypertensive intracerebral hemorrhage", correct: true },
      { text: "Embolic ischemic stroke", correct: false },
      { text: "Subarachnoid hemorrhage", correct: false },
      { text: "Transient ischemic attack (TIA)", correct: false },
      { text: "Cerebellar infarction", correct: false },
    ],
  },
  {
    question: "A 60-year-old man presents with sudden-onset left-sided weakness and difficulty understanding speech. He reports that the symptoms started about 45 minutes ago. He has a history of smoking and hyperlipidemia. On examination, he has left-sided hemiparesis and Wernicke's aphasia. A CT scan of the brain shows no acute hemorrhage. What is the most likely diagnosis?",
    answers: [
      { text: "Left-sided ischemic stroke in the middle cerebral artery (MCA) territory", correct: true },
      { text: "Subarachnoid hemorrhage", correct: false },
      { text: "Transient ischemic attack (TIA)", correct: false },
      { text: "Right-sided ischemic stroke in the anterior cerebral artery (ACA) territory", correct: false },
      { text: "Multiple sclerosis", correct: false },
    ],
  },
  {
    question: "An 18-year-old male was involved in a traffic accident and was found on the road near a crosswalk. His face shows abrasions and wounds. You have determined he is opening his eyes (eye opening), responding to questions (speech), and following your instructions (movements). The level of consciousness on the Glasgow Coma Scale is a score of 13. What kind of head trauma did the man suffer?",
    answers: [
      { text: "Moderate head trauma", correct: true },
      { text: "Superficial head trauma", correct: false },
      { text: "Mild head trauma", correct: false },
      { text: "No head trauma", correct: false },
      { text: "Severe head trauma", correct: false },
    ],
  },
  {
    question: "A 25-year-old man was involved in a traffic accident and was found on the road near a crosswalk. There are visible abrasions and wounds on his face. You have determined that he opens his eyes independently, he responds to questions, but is confused about the present date and year. When you ask him to raise his hands, he does not comply. However, he localizes pain well. Calculate the level of consciousness on the Glasgow Coma Scale.",
    answers: [
      { text: "Score 13", correct: true },
      { text: "Score 15", correct: false },
      { text: "Score 10", correct: false },
      { text: "Score 8", correct: false },
      { text: "Score 3", correct: false },
    ],
  },
  {
    question: "A head injured patient, who opens eyes to painful stimulus, is confused and localizes to pain. What is the Glasgow coma score",
    answers: [
      { text: "11", correct: true },
      { text: "9", correct: false },
      { text: "7", correct: false },
      { text: "13", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Cortical blindness is seen in lesion of which lobe?",
    answers: [
      { text: "Occipital", correct: true },
      { text: "Parietal", correct: false },
      { text: "Frontal", correct: false },
      { text: "Temporal", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statement is false with respect to demyelinating disorders?",
    answers: [
      { text: "Involves biochemical abnormality of myelin", correct: true },
      { text: "More common in females", correct: false },
      { text: "Multiple sclerosis is an autoimmune disease of the central nervous system", correct: false },
      { text: "Multiple Sclerosis is most common type of demyelinating disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40yr old male presented with altered mental status, seizures, and vomiting. He has no h/o fever, neck stiffness. On CECT ring-enhancing lesion at gray-white interface is seen. General hygiene was poor and he has multiple dental caries. What is the next best step in the management of this patient?",
    answers: [
      { text: "Urgent parenteral antibiotics", correct: true },
      { text: "Placement of ICP monitor", correct: false },
      { text: "Lumbar puncture", correct: false },
      { text: "Craniotomy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 33-year male with numbness from the lower trunk to the distal extremities was diagnosed with multiple sclerosis. He was started with glucocorticoids with some improvement in his symptoms. Which one of the following is not predictive of long-term disability in such patients?",
    answers: [
      { text: "Optic neuritis in the first 2 years", correct: true },
      { text: "Incomplete recovery from relapses", correct: false },
      { text: "Length of intervals between relapses", correct: false },
      { text: "Frequency of relapses", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient has had recurrent optic neuritis bilaterally with transverse myelitis. Visual acuity in right eye is 6/60 and left eye is 6/18. Patient showed a 50°'1<> response to steroids. Diagnosis is?",
    answers: [
      { text: "Neuromyelitis Optica", correct: true },
      { text: "Subacute combined degeneration of spinal cord (SACD)", correct: false },
      { text: "Post cerebral artery stroke", correct: false },
      { text: "Neuro-syphilis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 38-year-old woman with sensory disturbances, muscle weakness & visual disturbances was diagnosed with Multiple Sclerosis recently. The physician is evaluating her neurological status with Expanded disability severity score (EDSS). What does a score of 9 in EDSS signify?",
    answers: [
      { text: "Patient is bedridden, can talk, can drink", correct: true },
      { text: "Death of patient due to multiple sclerosis", correct: false },
      { text: "Patient is bedridden, can't talk, can’t drink", correct: false },
      { text: "Patient walks normally, shows no disability", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 78-year-old female is diagnosed with Alzheimer's disease and experiences occasional aggression and agitation. What is the most appropriate initial management for these behavioral symptoms?",
    answers: [
      { text: "Family education and behavioral interventions", correct: true },
      { text: "Cholinesterase inhibitors", correct: false },
      { text: "Cognitive-behavioral therapy", correct: false },
      { text: "Antidepressants", correct: false },
      { text: "Antipsychotic medication", correct: false },
    ],
  },
  {
    question: "A 72-year-old woman with Alzheimer's disease begins to show signs of paranoia and delusions. What is the most appropriate intervention for these symptoms?",
    answers: [
      { text: "Administer antipsychotics", correct: true },
      { text: "Provide family counseling", correct: false },
      { text: "Start a cholinesterase inhibitor", correct: false },
      { text: "Initiate an antidepressant", correct: false },
      { text: "Refer for cognitive-behavioral therapy", correct: false },
    ],
  },
  {
    question: "A 70-year-old female with AlA 70-year-old female with Alzheimer’s disease is found to have significantly reduced levels of acetylcholine in the brain. Which of the following drug classes would likely be most effective in this patient?",
    answers: [
      { text: "Cholinesterase inhibitors", correct: true },
      { text: "Selective serotonin reuptake inhibitors (SSRIs)", correct: false },
      { text: "NMDA receptor antagonists", correct: false },
      { text: "Benzodiazepines", correct: false },
      { text: "Dopamine agonists", correct: false },
    ],
  },
  {
    question: "A 78-year-old woman with Alzheimer’s disease exhibits difficulty recognizing faces and understanding visual-spatial relationships. Which cognitive domain is primarily affected in her case?",
    answers: [
      { text: "Visuospatial ability", correct: true },
      { text: "Executive function", correct: false },
      { text: "Attention", correct: false },
      { text: "Language", correct: false },
      { text: "Memory", correct: false },
    ],
  },
  {
    question: "A 67-year-old man with a family history of Alzheimer’s disease has been diagnosed with mild cognitive impairment. He expresses concern about developing Alzheimer's. What would be the most appropriate next step?",
    answers: [
      { text: "Recommend lifestyle changes", correct: true },
      { text: "Perform neuroimaging", correct: false },
      { text: "Begin antipsychotic medication", correct: false },
      { text: "Perform genetic testing for APOE", correct: false },
      { text: "Start cholinesterase inhibitors", correct: false },
    ],
  },
  {
    question: "29 yrs male was brought to OPD by his wife giving history of aggressive behaviour with decreased social interaction and lack of self-care. O/E grasp reflex present, CT scan would be showing lesion of which lobe?",
    answers: [
      { text: "Frontal lobe", correct: true },
      { text: "Occipital", correct: false },
      { text: "Temporal", correct: false },
      { text: "Parietal", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Focal symptom characteristic of right middle cerebral artery occlusion:",
    answers: [
      { text: "Left-sided hemiparesis", correct: true },
      { text: "Right-sided hemiparesis", correct: false },
      { text: "Right-sided homonymous hemianopsia", correct: false },
      { text: "Ataxia", correct: false },
      { text: "Nystagmus", correct: false },
    ],
  },
  {
    question: "The patient is 72 years old, suffers from arterial hypertension, she does not take permanent hypotensive therapy. This morning there appeared awkwardness and numbness in the left upper extremity, facial asymmetry (lowering of the left corner of the mouth). Select the vascular basin most likely to be affected:",
    answers: [
      { text: "Right middle cerebral artery", correct: true },
      { text: "Left posterior cerebral artery", correct: false },
      { text: "Right posterior cerebral artery", correct: false },
      { text: "Right middle cerebral artery", correct: false },
      { text: "Basic artery", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman presented with headaches and difficulty with gait. The physical examination was notable for bilateral papilledema. Sagittal MRI showed the lesion located in the posterior third ventricle that strongly enhances with gadolinium. Surgical excision showed that the lesion was a pinealoma. The gland involved is supplied by?",
    answers: [
      { text: "Posterior choroidal arteries", correct: true },
      { text: "Tuberothalamic artery", correct: false },
      { text: ". Recurrent artery of Heubner", correct: false },
      { text: "Lenticulostriate artery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient is unable to solve mathematical calculations, which part of his brain is damaged?",
    answers: [
      { text: "Parietal lobe", correct: true },
      { text: "Frontal lobe", correct: false },
      { text: "Temporale lobe", correct: false },
      { text: "Occipital lobe", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 70-year-old woman with a history of progressive memory loss, difficulty recognizing familiar faces, and changes in personality presents for evaluation. Neuroimaging shows atrophy in the temporal and parietal lobes. Which of the following findings is most likely to be present in her brain tissue?",
    answers: [
      { text: "Tau tangles and amyloid plaques", correct: true },
      { text: "Lewy bodies", correct: false },
      { text: "Huntington inclusions", correct: false },
      { text: "Prion plaques", correct: false },
      { text: "Glial cell tumors", correct: false },
    ],
  },
  {
    question: "A 47yrs old female c/o headache, changes in vision, seizures from past 2yrs. Now she has developed weakness rt. side of body. A CT scan was being ordered by the physician which showed well circumscribed mass abutting the skull in left hemisphere. On contrast enhanced MRI shows -What is the next step in management of this patient?",
    answers: [
      { text: "Surgical excision", correct: true },
      { text: "Chemotherapy with Adriamycin", correct: false },
      { text: "Cerebral angiography with tumor embolization", correct: false },
      { text: "Preoperative radiation therapy followed by surgical excision", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 72-year-old woman presents with progressive memory loss, difficulty with spatial orientation, and frequent disorientation. Her family reports that she has become increasingly repetitive in conversation and has difficulty recalling recent events. On examination, she appears disheveled and is unaware of the time or place. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Alzheimer's disease", correct: true },
      { text: "Frontotemporal dementia", correct: false },
      { text: "Parkinson's disease", correct: false },
      { text: "Huntington's disease", correct: false },
      { text: "Amyotrophic lateral sclerosis", correct: false },
    ],
  },
  {
    question: "What treatments are not used for myasthenia gravis?",
    answers: [
      { text: "Immunosuppressants", correct: true },
      { text: "Thymectomy", correct: false },
      { text: "Plasmapheresis", correct: false },
      { text: "Immunoglobulin therapy", correct: false },
      { text: "Antiretroviral therapy", correct: false },
    ],
  },
  {
    question: "A 13-year-old adolescent has been diagnosed with structural epilepsy, focal tonic-clonic seizures, and Todd's palsy. What type of medication should be offered to the patient?",
    answers: [
      { text: "Finlepsin (Carbamazepine)", correct: true },
      { text: "Depakine (Convulex)", correct: false },
      { text: "Levetiracetam (Keppra)", correct: false },
      { text: "Phenobarbital (Luminal", correct: false },
      { text: "Diazepam (Relanium)", correct: false },
    ],
  },
  {
    question: "All are clinical features of myasthenia gravis, EXCEPT",
    answers: [
      { text: "Absent deep tendon reflexes", correct: true },
      { text: "Spontaneus remission", correct: false },
      { text: "Proximal muscle involvement", correct: false },
      { text: "Worsen by exertion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 38-year-old woman with sensory disturbances, muscle weakness & visual disturbances was diagnosed with Multiple Sclerosis recently. The physician is evaluating her neurological status with Expanded disability severity score (EDSS). What does a score of 9 in EDSS signify?",
    answers: [
      { text: "Patient is bedridden, can talk, can drink", correct: true },
      { text: "Death of patient due to multiple sclerosis", correct: false },
      { text: "Patient is bedridden, can't talk, can’t drink", correct: false },
      { text: "Patient walks normally, shows no disability", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Best predictor in the GCS",
    answers: [
      { text: "Motor response", correct: true },
      { text: "Eye opening", correct: false },
      { text: "Eye opening", correct: false },
      { text: "All", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The number of cells in the normal composition of the liquor (in 1 mm3):",
    answers: [
      { text: "2024-05-01 00:00:00", correct: true },
      { text: "2015-10-01 00:00:00", correct: false },
      { text: "20-30", correct: false },
      { text: "40-50", correct: false },
      { text: "60-70", correct: false },
    ],
  },
  {
    question: "This condition is the primary indication for a cerebrospinal fluid study (choose one condition):",
    answers: [
      { text: "Brain tumor", correct: true },
      { text: "Occlusive intracranial hypertension", correct: false },
      { text: "Inflammation of cerebral membranes", correct: false },
      { text: "Ischemic stroke", correct: false },
      { text: "Herniation of the intervertebral disk", correct: false },
    ],
  },
  {
    question: "In case of muscular dystrophy it is necessary to examine the patient using the method",
    answers: [
      { text: "Tissue biopsy", correct: true },
      { text: "CT", correct: false },
      { text: "EEG", correct: false },
      { text: "ENMG", correct: false },
      { text: "MRI", correct: false },
    ],
  },
  {
    question: "Which of the following is not a feature of conus medullaris syndrome?",
    answers: [
      { text: "Knee reflex Absent", correct: true },
      { text: "Ankle reflex Absent", correct: false },
      { text: "Bladder / bowel Early & marked", correct: false },
      { text: "Root involved S3, S4, S5", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following tests is abnormal in patients with ALS (Amyotrophic Lateral Sclerosis)?",
    answers: [
      { text: "Electromyography", correct: true },
      { text: "MRI whole spine", correct: false },
      { text: "CT whole Spine", correct: false },
      { text: "V.E.P", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "If Broun-Sekar syndrome is detected, a neuroimaging study of the following section of the neural system should be performed:",
    answers: [
      { text: "Spinal cord", correct: true },
      { text: "Cerebellum", correct: false },
      { text: "Brain", correct: false },
      { text: "Peripheral nerves", correct: false },
      { text: "Muscles", correct: false },
    ],
  },
  {
    question: "A 5O-year-old woman complains of clumsiness in her hands while working in the kitchen. She recently burned her hands on the stove without experiencing any pain. Neurologic examination reveals bilateral weakness of the shoulder girdles, arms, and hands as well as a loss of pain and temperature sensation covering the shoulder and upper limb in a cape-like distribution. Severe atrophy is present in the intrinsic muscles of the hands. The most likely diagnosis is:",
    answers: [
      { text: "Syringomyelia", correct: true },
      { text: "Subacute combined degeneration", correct: false },
      { text: "ALS", correct: false },
      { text: "Tabes dorsalis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old patient presents with numbness over the neck. On examination decreased pain and temperature sensation is found in the distribution of C4, CS. Scalp sensation, cranial nerve function and limb examination are normal. Bladder and bowel sphincter control are normal. What is the diagnosis?",
    answers: [
      { text: "Neuro-syphilis", correct: true },
      { text: "An intramedullary tumor", correct: false },
      { text: "Amyotrophic lateral sclerosis", correct: false },
      { text: "A.I.D.P", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 5O-year-old woman complains of clumsiness in her hands while working in the kitchen. She recently burned her hands on the stove without experiencing any pain. Neurologic examination reveals bilateral weakness of the shoulder girdles, arms, and hands as well as a loss of pain and temperature sensation covering the shoulder and upper limb in a cape-like distribution. Severe atrophy is present in the intrinsic muscles of the hands. The most likely diagnosis is",
    answers: [
      { text: "Syringomyelia", correct: true },
      { text: "Subacute combined degeneration", correct: false },
      { text: "ALS", correct: false },
      { text: "Tabes dorsalis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Transtentorial uncal heriniation causes all except",
    answers: [
      { text: "lpsilateral hemiplegia", correct: true },
      { text: "Decorticate rigidity", correct: false },
      { text: "Cheyne stokes respiration", correct: false },
      { text: "lpsilateral dilated pupils", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 2-year-old girl, from an endemic area, unvaccinated, became acutely ill with runny nose, cough, body temperature of 38 degrees Celsius. On the 5th day of the disease she could not stand on her feet. Examination of the neurological status revealed a lower flaccid paralysis. 6 months after the illness, the paralysis had not recovered and she needed supportive devices. What infectious disease did she have?",
    answers: [
      { text: "Polio", correct: true },
      { text: "Diphtheria", correct: false },
      { text: "Tetanus", correct: false },
      { text: "Whooping cough", correct: false },
      { text: "Measles", correct: false },
    ],
  },
  {
    question: "Which of the following is not a Channelopathy",
    answers: [
      { text: "Tay Sachs disease", correct: true },
      { text: "Periodic paralysis", correct: false },
      { text: "Cystic fibrosis", correct: false },
      { text: "Liddle syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60 yr old woman presents with tingling, numbness, and weakness of extremities for the past year. she also noted  and lack of bowel control. What is the most likely diagnosis?",
    answers: [
      { text: "ALS", correct: true },
      { text: "lpsilateral hemiplegia", correct: false },
      { text: "Cheyne stokes respiration", correct: false },
      { text: "Polyneuropathy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Guillain-Baret polyneuropathy is characterized by impairment of the following nervous system functions (choose one correct answer)",
    answers: [
      { text: "Motor", correct: true },
      { text: "Protective", correct: false },
      { text: "Temperature", correct: false },
      { text: "Sensory", correct: false },
      { text: "Coordinator", correct: false },
    ],
  },
  {
    question: "Select the symptoms characteristic of Guillain-Baret polyneuropathy",
    answers: [
      { text: "Lesions of all nerves", correct: true },
      { text: "Disorder of pelvic functions", correct: false },
      { text: "Bilateral pyramidal symptoms", correct: false },
      { text: "Nerve involvement in one limb", correct: false },
      { text: "Cranial nerve involvement", correct: false },
    ],
  },
  {
    question: "A 52-year-old woman has been suffering from type II diabetes mellitus for 10 years; she complains of severe itching and pain in the right foot. On examination: the joints of the feet are deformed, the skin on the feet is thin, Achilles reflexes are absent, knee reflexes are very low. Hypesthesia in the legs - up to the middle third of the tibia.",
    answers: [
      { text: "Diabetic polyneuropathy", correct: true },
      { text: "Alcoholic polyneuropathy", correct: false },
      { text: "Acute demyelinating polyradiculoneuropathy", correct: false },
      { text: "Guillain-Baret polyneuropathy", correct: false },
      { text: "Diphtheria polyneuropathy", correct: false },
    ],
  },
  {
    question: "Choose the most likely diagnosis:",
    answers: [
      { text: "Plasmapheresis / Immunoglobulins", correct: true },
      { text: "Steroids / Immunoglobulins", correct: false },
      { text: "Thymectomy / Immunoglobulins", correct: false },
      { text: "Antibiotics / Immunoglobulins", correct: false },
      { text: "Immunoglobulins only", correct: false },
    ],
  },
  {
    question: "A child attending a nursery suddenly increased t to 39 C, developed convulsions and confusion. The doctor diagnosed meningeal symptom complex. In the analysis of the liquor: turbid, cytosis-820 kl in ml, neutrophils predominate. Choose the most probable diagnosis:",
    answers: [
      { text: "Bacterial meningitis", correct: true },
      { text: "Viral meningitis", correct: false },
      { text: "Serous meningitis", correct: false },
      { text: "Epiduritis", correct: false },
      { text: "Subarachnoid hemorrhage", correct: false },
    ],
  },
  {
    question: "12 month old child is diagnosed with meningitis, calculate the daily dose of ceftriaxone for the patient:",
    answers: [
      { text: "10 mg per day", correct: true },
      { text: "50 mg per day", correct: false },
      { text: "100 mg per day", correct: false },
      { text: "500 mg per day", correct: false },
      { text: "1000 mg per day", correct: false },
    ],
  },
  {
    question: "Which of the following drugs can cause muscle weakness?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Zidovudine", correct: false },
      { text: "Chloropine", correct: false },
      { text: "Statin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 65-year-old, male with hypertension develops sudden onset weakness on the right side of the face & arm. His attender recalls history of headache, blurred vision in the patient which leads to the suspicion of increased ICP. Which is the most common cranial nerve involved in raised ICP?",
    answers: [
      { text: "Abducens nerve", correct: true },
      { text: "Trochlear", correct: false },
      { text: "Trigeminal", correct: false },
      { text: "Facial nerve", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Neonatal myasthenia develops as a result of:",
    answers: [
      { text: "Administration of an excessive dose of acetylcholinesterase inhibitors", correct: true },
      { text: "Transfer from the mother through the placental barrier of AT to the acetylcholine receptor", correct: false },
      { text: " Reducing their number", correct: false },
      { text: "A sharp decrease in the number of functioning AChRs due to a massive attack by their autoantibodies", correct: false },
      { text: "A sharp decrease in the number of functioning ryanodine receptors", correct: false },
    ],
  },
  {
    question: "Myasthenic crisis can be provoked by:",
    answers: [
      { text: " Bronchopulmonary infection", correct: true },
      { text: "Skin diseases", correct: false },
      { text: "Food allergies", correct: false },
      { text: "Increasing A/D", correct: false },
      { text: "Gymnastics", correct: false },
    ],
  },
  {
    question: "The patient complains of visual impairment, on optic nerve testing, the patient was found to have visual field limitation on the outer side of the right eye and on the nasal side of the left eye. What is the syndrome called?",
    answers: [
      { text: "Hemianopsia", correct: true },
      { text: "Loss of the central visual field", correct: false },
      { text: "Blindness in one eye", correct: false },
      { text: "Partial atrophy of the optic nerve", correct: false },
      { text: "Different pupil size", correct: false },
    ],
  },
  {
    question: "To test this nerve, you use, spices, flavors, perfume.",
    answers: [
      { text: "I", correct: true },
      { text: "II", correct: false },
      { text: "III", correct: false },
      { text: "X", correct: false },
      { text: "XII", correct: false },
    ],
  },
  {
    question: "A 55-year-old female presents with 3-years history of severe lancinating pain extending from left ear to her maxillary area. Pain is triggered by chewing and brushing teeth. She was treated by otolaryngologist for sinus infection a year ago and undergone multiple dental work and teeth extraction with transient or no improvement. The most likely diagnosis is",
    answers: [
      { text: "Trigeminal neuralgia", correct: true },
      { text: "Maxillary sinusitis", correct: false },
      { text: "Maxillary osteomyelitis", correct: false },
      { text: "Gradenigo's syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 22-year-old obese female experiences right eye diplopia. She had weight gain in last year and her current BMI is 35. Her fundus examination reveals papilledema on the right side. The most likely cause of her symptoms is?",
    answers: [
      { text: "Idiopathic lntracranial Hypertension", correct: true },
      { text: "Craniopharyngioma", correct: false },
      { text: "Optic neuritis", correct: false },
      { text: "Sagittal sinus thrombosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "You are an intern, posted in the neurology ward in the Department of Internal Medicine. A 48-year-old woman was admitted with a history of muscle weakness. Investigations & examination revealed normal nerve conduction but flaccidity is seen. Which of the following would be the possible diagnosis?",
    answers: [
      { text: "Myasthenia gravis", correct: true },
      { text: "GBS", correct: false },
      { text: "Transverse myelitis", correct: false },
      { text: "Traumatic neuritis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 63-year-old woman with T2DM, hypertension presented to your hospital with complaints of sudden onset right eye ptosis and diplopia, worse at the end of the day. She also had history of fatigue, intermittent muscle weakness for the past 1 month. Initial investigations were done. A probable diagnosis of Myasthenia Gravis made. Which of the following is not useful for the above diagnosis?",
    answers: [
      { text: "Voltage gated calcium channel antibodies", correct: true },
      { text: "AChR antibodies", correct: false },
      { text: "Muscle-specific kinase antibodies", correct: false },
      { text: "Edrophonium test", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 10-year-old female patient complains of weakness and pain in her right leg. She fell ill acutely and does not know the cause. However, she notes that before the complaints appeared, she was running and hit her knee on the ground while playing on a football field. In her neurological status, the Achilles reflex on the right is absent. Dorsal flexion is impossible. She cannot stand on her toes on the right. Which nerve is affected?",
    answers: [
      { text: "Tibial neuropathy", correct: true },
      { text: "Ulnar neuropathy", correct: false },
      { text: "Sciatic neuropathy", correct: false },
      { text: "Radial nerve neuropathy", correct: false },
      { text: "Peroneal neuropathy", correct: false },
    ],
  },
  {
    question: "A 10-year-old female patient complains of weakness in her left leg. She fell ill acutely and does not know the cause. However, she notes that before the complaints appeared, she picked berries while sitting on her knees. The neurological status shows that the left Achilles reflex is preserved. Left-sided steppage gait. What examination should be performed?",
    answers: [
      { text: "Tissue biopsy", correct: true },
      { text: "CT", correct: false },
      { text: "EEG", correct: false },
      { text: "ENMG", correct: false },
      { text: "MRI", correct: false },
    ],
  },
  {
    question: "A 41-year-old man is diagnosed with myasthenia gravis. His weight is 80 kilograms. You have prescribed treatment. Of the steroids, you have suggested prednisolone 0.005 g in 1 tablet. Choose the correct treatment option.",
    answers: [
      { text: "Steroids 16 tablet per day.", correct: true },
      { text: "Steroids 6 tablets per day.", correct: false },
      { text: "Steroids 10 tablets per day.", correct: false },
      { text: "Steroids 1 tablets per day.", correct: false },
      { text: "Steroids 26 tablets per day.", correct: false },
    ],
  },
  {
    question: "Patient D., 12 years old, complains of rapid fatigue of the masticatory muscles and eyelid muscles. Neurological status: hemiptosis on both sides and weakness of the masticatory muscles. There were no obvious signs of damage to the central and peripheral nervous system. After performing stress tests (sit down and stand up 20 times), weakness of the orbicularis oculi muscles, muscles that lift the upper eyelid, and masticatory muscles was revealed. Your tactics to clarify the diagnosis:",
    answers: [
      { text: "Brain MRI", correct: true },
      { text: "Proserine test", correct: false },
      { text: "CT scan of the brain", correct: false },
      { text: "EEG Holter", correct: false },
      { text: "MRI with angiography", correct: false },
    ],
  },
  {
    question: "In a child with suspected myasthenia gravis, what laboratory examination should be done first to clarify the diagnosis?",
    answers: [
      { text: "general blood test", correct: true },
      { text: "blood for CPK LDH", correct: false },
      { text: " proserine test", correct: false },
      { text: "test with atropine", correct: false },
      { text: "MRI with angiography", correct: false },
    ],
  },
  {
    question: "A 16-year-old patient, according to her mother, complains of rapid fatigue of the masticatory muscles and eyelid muscles (“in the afternoon, the girl cannot open her eyes, they close and that’s it…”). Neurological status: hemiptosis on both sides and weakness of the masticatory muscles. After performing stress tests (sit down and stand up 20 times), weakness of the orbicularis oculi muscles, muscles that lift the upper eyelid, and masticatory muscles was revealed. Preliminary diagnosis?",
    answers: [
      { text: "Spinal muscular atrophy", correct: true },
      { text: "Duchenne myopathy", correct: false },
      { text: "Shoulder-scapular myodystrophy Landouzy-Dejerine", correct: false },
      { text: "Myasthenia gravis", correct: false },
      { text: "Guillain-Barré syndrome", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
