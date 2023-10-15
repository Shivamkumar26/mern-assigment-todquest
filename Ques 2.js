/* 
Q.2. Given these 2 schemas, loop thru each student and show its time entries. */

var WorksnapsTimeEntry = BaseSchema.extend({
student: {
type: Schema.ObjectId, ref: 'Student'
},
Timeentries: {
type: Object }
});
var StudentSchema = BaseSchema.extend({ firstName: {
type: String,
trim: true,
default: ''
// validate: [validateLocalStrategyProperty, 'Please fill in your first name']
}, lastName: {
type: String,
trim: true,
default: ''
// validate: [validateLocalStrategyProperty, 'Please fill in your last name']
}, displayName: {
type: String,
trim: true },
municipality: { type: String }
});

WorksnapsTimeEntry.find().populate('student').exec(function(err, worksnapsTimeEntries) {
  if(err) {
    console.log(err);
  } else {
    worksnapsTimeEntries.forEach(function(worksnapsTimeEntry) {
      console.log('Student:', worksnapsTimeEntry.student.firstName, worksnapsTimeEntry.student.lastName);
      console.log('Time entries:', worksnapsTimeEntry['Time entries']);
    });
  }
});
