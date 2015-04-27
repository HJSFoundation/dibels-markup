GET classroom_sync_status
GET teacher
GET classroom
GET students
GET assessments
UPDATE student_reading_stage, reading_stage/:id
UPDATE student_skill_timing, skill_timing/:id
UPDATE student_assessment, assessments/:id

student_id
stage_id
skill_id
stimuli_id
assessment

assessment[2][sight_words]["boat"] = "Good enough"

{
  "3": {
    "sight_words": {
      "boat": "status": "clear",
      "boar": "status": "clear",
      "bot": "status": "clear",
      "bork": "status": "clear",
    },
    "onsets": {
      "boat": "status": "clear",
      "boar": "status": "clear",
      "bot": "status": "clear",
      "bork": "status": "clear",
    }
  },
}

Assessment

id
user_id
stage_id
skill_type
stimulus
assessment

Users
  * first_name
  * last_name
  * roles (teacher, student)

ClassroomUser
  * user_id
  * classroom_id
  * role (teacher, student)

Evaluations
  * user_id
  * evaluation_type

Evaluation Type
  * EvaluationTypes::TUTORMATE_FLASHCARD
  * EvaluationTypes::TEACHERMATE_TEACHER_NOTEPAD

create_table "evaluations", force: :cascade do |t|
  t.integer  "user_id"
  t.json     "assessments"
  t.string   "evaluation_type", limit: 255
  t.datetime "created_at"
  t.datetime "updated_at"
end
