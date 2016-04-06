import { Exercise, Set, Difficulty } from "./workout-routine";

describe('On a new Exercise, ', () => {
  it('the Sets are not undefined.', () => {
     var e = new Exercise();
     expect(e.sets).not.toEqual(undefined);
  });
 
  it('the length of Sets is 0.', () => {
    var e = new Exercise();
    expect(e.sets.length).toEqual(0);
  })
  
  it('add three sets, and the length of Sets should be 3.', () => {
    var e = new Exercise();
    var sets: Set[] = [
      { "id": 1, "reps": 10, "weight": 100, "difficulty": Difficulty.Perfect, "comment": ""},
      { "id": 2, "reps": 10, "weight": 100, "difficulty": Difficulty.Perfect, "comment": ""},
      { "id": 3, "reps": 10, "weight": 100, "difficulty": Difficulty.Perfect, "comment": ""},
    ];
    
    sets.forEach(s => { 
      e.sets.push(s);
    });
    
    expect(e.sets.length).toEqual(sets.length);
  });
  
  it('add three sets with 100 lbs each, and the total weight should be 300.', () => {
    var e = new Exercise();
    var sets: Set[] = [
      { "id": 1, "reps": 10, "weight": 100, "difficulty": Difficulty.Perfect, "comment": ""},
      { "id": 2, "reps": 10, "weight": 100, "difficulty": Difficulty.Perfect, "comment": ""},
      { "id": 3, "reps": 10, "weight": 100, "difficulty": Difficulty.Perfect, "comment": ""},
    ];
    
    var total = 0;
    sets.forEach(s => { 
      e.sets.push(s);
      total += s.weight;
    });
    
    expect(e.getTotalWeight()).toEqual(total);
  });
});
